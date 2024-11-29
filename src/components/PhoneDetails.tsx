import React from 'react';
import { Phone, MapPin, Building, Hash } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PhoneDetails as PhoneDetailsType } from '../types/phone';

interface PhoneDetailsProps {
  details: PhoneDetailsType | null;
}

export const PhoneDetailsCard: React.FC<PhoneDetailsProps> = ({ details }) => {
  const { t } = useTranslation();
  
  if (!details) return null;

  return (
    <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('phone.operator')}</p>
              <p className="text-sm text-gray-600">{details.operator}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('phone.location')}</p>
              <p className="text-sm text-gray-600">
                {details.province} {details.city}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Hash className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('phone.areaCode')}</p>
              <p className="text-sm text-gray-600">{details.areaCode}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{t('phone.postCode')}</p>
              <p className="text-sm text-gray-600">{details.postCode || '-'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};