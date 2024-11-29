import React from 'react';
import { MapPin, Globe, Building2, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IPDetails as IPDetailsType } from '../types/ip';

interface IPDetailsProps {
  details: IPDetailsType | null;
}

export const IPDetailsCard: React.FC<IPDetailsProps> = ({ details }) => {
  const { t } = useTranslation();
  
  if (!details) return null;

  return (
    <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{details.ip}</h2>
            <p className="text-gray-600">{details.org}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{details.city}, {details.region}</p>
              <p className="text-sm text-gray-600">{details.country}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('details.location')}</p>
              <p className="text-sm text-gray-600">{details.loc}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Building2 className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('details.postalCode')}</p>
              <p className="text-sm text-gray-600">{details.postal}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('details.timezone')}</p>
              <p className="text-sm text-gray-600">{details.timezone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};