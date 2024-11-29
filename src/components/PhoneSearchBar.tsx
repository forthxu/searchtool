import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PhoneSearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const PhoneSearchBar: React.FC<PhoneSearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="relative">
        <input
          type="tel"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('phone.searchPlaceholder')}
          className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={isLoading}
        />
        <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2.5 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-blue-300"
        >
          {isLoading ? t('search.searching') : t('search.button')}
        </button>
      </div>
    </form>
  );
};