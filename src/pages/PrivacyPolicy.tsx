import React, { useEffect } from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{t('legal.privacy.title')}</h1>
            <p className="text-xl text-blue-100">
              {t('legal.privacy.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-800 p-6 mb-8 rounded-r-lg">
            <p className="text-gray-700 mb-2">
              <strong>{t('common.lastUpdated')}</strong> September, 2025
            </p>
            <p className="text-gray-700">
              {t('legal.privacy.updatedIntro')}
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacy.infoCollect')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('legal.privacy.personalInfo.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.privacy.personalInfo.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('legal.privacy.usageInfo.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.privacy.usageInfo.desc')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacy.howUse')}</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.howUseList.provide')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.howUseList.communicate')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.howUseList.personalize')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.howUseList.legal')}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacy.sharing')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('legal.privacy.sharingIntro')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('legal.privacy.sharingDesc')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacy.security')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legal.privacy.securityDesc')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacy.rights')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('legal.privacy.rightsIntro')}
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.rightsList.access')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.rightsList.correct')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.rightsList.delete')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.privacy.rightsList.optout')}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('common.contactUs')}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('legal.privacy.contactIntro')}
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">easyituz@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">+998 (94) 683-44-89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">Tashkent, Uzbekistan</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;