'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, supportedLanguages, getDictionary, Dictionary } from '@/dictionaries';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  dictionary: Dictionary;
};

const defaultValue: LanguageContextType = {
  language: 'es',
  setLanguage: () => {},
  dictionary: {} as Dictionary,
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [dictionary, setDictionary] = useState<Dictionary>(getDictionary('es'));

  useEffect(() => {
    // Check for language preference in localStorage or browser
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && supportedLanguages.includes(savedLanguage as Language)) {
      setLanguageState(savedLanguage as Language);
    } else {
      // Fallback to browser language or default to 'es'
      const browserLanguage = navigator.language.split('-')[0];
      const initialLanguage = supportedLanguages.includes(browserLanguage as Language) 
        ? browserLanguage as Language 
        : 'es';
      setLanguageState(initialLanguage);
    }
  }, []);

  useEffect(() => {
    setDictionary(getDictionary(language));
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};
