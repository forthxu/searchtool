import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ZodiacSearchProps {
  onSearch: (month: number, day: number) => void;
  isLoading: boolean;
}

export const ZodiacSearch: React.FC<ZodiacSearchProps> = ({ onSearch, isLoading }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (month && day) {
      onSearch(parseInt(month, 10), parseInt(day, 10));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <input
            type="number"
            min="1"
            max="12"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder={t('zodiac.monthPlaceholder')}
            className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            disabled={isLoading}
          />
        </div>
        <div className="relative flex-1">
          <input
            type="number"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder={t('zodiac.dayPlaceholder')}
            className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !month || !day}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-blue-300"
        >
          <Sparkles className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};