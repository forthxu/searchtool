import React, { useState } from 'react';
import { Globe2, Phone, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SearchBar } from './components/SearchBar';
import { PhoneSearchBar } from './components/PhoneSearchBar';
import { ZodiacSearch } from './components/ZodiacSearch';
import { IPDetailsCard } from './components/IPDetails';
import { PhoneDetailsCard } from './components/PhoneDetails';
import { ZodiacDetails } from './components/ZodiacDetails';
import { LanguageSelector } from './components/LanguageSelector';
import { getIPDetails } from './services/ipService';
import { getPhoneDetails } from './services/phoneService';
import { getZodiacSign } from './services/zodiacService';
import { IPDetails } from './types/ip';
import { PhoneDetails } from './types/phone';
import { ZodiacInfo } from './types/zodiac';

function App() {
  const [ipDetails, setIpDetails] = useState<IPDetails | null>(null);
  const [phoneDetails, setPhoneDetails] = useState<PhoneDetails | null>(null);
  const [zodiacInfo, setZodiacInfo] = useState<ZodiacInfo | null>(null);
  const [isLoadingIp, setIsLoadingIp] = useState(false);
  const [isLoadingPhone, setIsLoadingPhone] = useState(false);
  const [isLoadingZodiac, setIsLoadingZodiac] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleIpSearch = async (query: string) => {
    setIsLoadingIp(true);
    setError(null);
    try {
      const details = await getIPDetails(query);
      setIpDetails(details);
      setPhoneDetails(null);
      setZodiacInfo(null);
    } catch (err) {
      setError(t('error.ip'));
      setIpDetails(null);
    } finally {
      setIsLoadingIp(false);
    }
  };

  const handlePhoneSearch = async (query: string) => {
    setIsLoadingPhone(true);
    setError(null);
    try {
      const details = await getPhoneDetails(query);
      setPhoneDetails(details);
      setIpDetails(null);
      setZodiacInfo(null);
    } catch (err) {
      setError(t('error.phone'));
      setPhoneDetails(null);
    } finally {
      setIsLoadingPhone(false);
    }
  };

  const handleZodiacSearch = (month: number, day: number) => {
    setIsLoadingZodiac(true);
    setError(null);
    try {
      const zodiac = getZodiacSign(month, day);
      setZodiacInfo(zodiac);
      setIpDetails(null);
      setPhoneDetails(null);
    } catch (err) {
      setError(t('error.zodiac'));
      setZodiacInfo(null);
    } finally {
      setIsLoadingZodiac(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="absolute top-4 right-4">
          <LanguageSelector />
        </div>
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Globe2 className="h-12 w-12 text-blue-600" />
            <Phone className="h-12 w-12 text-blue-600" />
            <Sparkles className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-xl space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">{t('ip.title')}</h2>
            <SearchBar onSearch={handleIpSearch} isLoading={isLoadingIp} />
          </div>

          <div className="w-full max-w-xl space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">{t('phone.title')}</h2>
            <PhoneSearchBar onSearch={handlePhoneSearch} isLoading={isLoadingPhone} />
          </div>

          <div className="w-full max-w-xl space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">{t('zodiac.title')}</h2>
            <ZodiacSearch onSearch={handleZodiacSearch} isLoading={isLoadingZodiac} />
          </div>
          
          {error && (
            <div className="w-full max-w-xl bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {ipDetails && <IPDetailsCard details={ipDetails} />}
          {phoneDetails && <PhoneDetailsCard details={phoneDetails} />}
          {zodiacInfo && <ZodiacDetails zodiacInfo={zodiacInfo} />}
        </div>
      </div>
    </div>
  );
}

export default App;