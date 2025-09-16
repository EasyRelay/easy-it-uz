import React, { useEffect } from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
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
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{t('legal.terms.title')}</h1>
            <p className="text-xl text-blue-100">
              {t('legal.terms.subtitle')}
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
              {t('legal.terms.updatedIntro')}
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.agreement')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legal.terms.agreementDesc')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.useLicense')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('legal.terms.useLicenseIntro')}
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.useLicenseList.modify')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.useLicenseList.commercial')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.useLicenseList.reverse')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.useLicenseList.remove')}
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              {/* trailing sentence already covered by intro and general terms; keep structure */}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.services')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('legal.terms.availability.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.terms.availability.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('legal.terms.modifications.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.terms.modifications.desc')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.responsibilities')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('legal.terms.responsibilitiesIntro')}
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.responsibilitiesList.accurate')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.responsibilitiesList.security')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.responsibilitiesList.laws')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.responsibilitiesList.disrupt')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('legal.terms.responsibilitiesList.ip')}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.payments')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('legal.terms.billing.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.terms.billing.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('legal.terms.late.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('legal.terms.late.desc')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.disclaimer')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legal.terms.disclaimerDesc')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.limitations')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legal.terms.limitationsDesc')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.law')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legal.terms.lawDesc')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.terms.contactTitle')}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('legal.terms.contactIntro')}
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

export default TermsOfService;