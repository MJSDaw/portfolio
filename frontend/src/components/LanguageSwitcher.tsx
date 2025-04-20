'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        className={`text-sm px-2 py-1 rounded ${
          language === 'es' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
        }`}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
      <button
        className={`text-sm px-2 py-1 rounded ${
          language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}
