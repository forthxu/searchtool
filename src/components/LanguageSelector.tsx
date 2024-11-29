import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: 'zh-CN', name: t('language.zh-CN') },
    { code: 'zh-TW', name: t('language.zh-TW') },
    { code: 'en-US', name: t('language.en-US') },
  ];

  return (
    <div className="flex items-center space-x-2">
      <Languages className="h-5 w-5 text-gray-500" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};