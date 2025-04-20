import { cache } from 'react';
import enTranslations from './en.json';
import esTranslations from './es.json';

export const supportedLanguages = ['en', 'es'] as const;
export type Language = typeof supportedLanguages[number];

export type Dictionary = typeof enTranslations;

const dictionaries = {
  en: enTranslations,
  es: esTranslations,
};

export const getDictionary = cache((locale: Language): Dictionary => {
  return dictionaries[locale];
});
