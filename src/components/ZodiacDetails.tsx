import React from 'react';
import { Star, Calendar, Flame, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ZodiacInfo } from '../types/zodiac';

interface ZodiacDetailsProps {
  zodiacInfo: ZodiacInfo | null;
}

export const ZodiacDetails: React.FC<ZodiacDetailsProps> = ({ zodiacInfo }) => {
  const { t } = useTranslation();
  
  if (!zodiacInfo) return null;

  return (
    <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('zodiac.sign')}</p>
              <p className="text-lg font-semibold text-blue-600">{zodiacInfo.sign}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('zodiac.date')}</p>
              <p className="text-sm text-gray-600">{zodiacInfo.date}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Flame className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('zodiac.element')}</p>
              <p className="text-sm text-gray-600">{zodiacInfo.element}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('zodiac.compatibility')}</p>
              <p className="text-sm text-gray-600">
                {zodiacInfo.compatibility.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};