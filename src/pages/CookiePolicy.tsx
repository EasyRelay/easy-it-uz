import React, { useEffect } from 'react';
import { Cookie, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CookiePolicy: React.FC = () => {
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
              <Cookie className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{t('legal.cookie.title')}</h1>
            <p className="text-xl text-blue-100">
              {t('legal.cookie.subtitle')}
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
              {t('legal.cookie.updatedIntro')}
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.cookie.whatAre')}</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you 
              visit a website. They allow the website to remember your actions and preferences over 
              time, so you don't have to re-enter them whenever you come back to the site or browse 
              from one page to another.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.cookie.typesTitle')}</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('legal.cookie.types.essential.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.cookie.types.essential.desc')}
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('legal.cookie.types.performance.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.cookie.types.performance.desc')}
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('legal.cookie.types.functionality.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.cookie.types.functionality.desc')}
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('legal.cookie.types.marketing.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.cookie.types.marketing.desc')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.cookie.howWeUse')}</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.howList.remember')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.howList.analyze')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.howList.personalize')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.howList.improve')}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.cookie.managing')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('legal.cookie.managingIntro')}
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.managingList.seeDelete')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.managingList.blockThird')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.managingList.blockSites')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.cookie.managingList.blockAll')}
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-yellow-800">
                <strong>{t('legal.cookie.note')}</strong> {t('legal.cookie.noteDesc')}
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.cookie.thirdParty.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legal.cookie.thirdParty.desc')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('common.contactUs')}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('legal.cookie.contactIntro')}
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

export default CookiePolicy;