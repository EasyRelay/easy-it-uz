import React, { useEffect } from 'react';
import { Cookie, Mail, Phone, MapPin } from 'lucide-react';

const CookiePolicy: React.FC = () => {

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
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-blue-100">
              Learn how we use cookies to improve your browsing experience.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-800 p-6 mb-8 rounded-r-lg">
            <p className="text-gray-700 mb-2">
              <strong>Last updated:</strong> September, 2025
            </p>
            <p className="text-gray-700">
              This Cookie Policy explains how Easy IT uses cookies and similar technologies.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you 
              visit a website. They allow the website to remember your actions and preferences over 
              time, so you don't have to re-enter them whenever you come back to the site or browse 
              from one page to another.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas of the website.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies collect information about how visitors use our website, such as which 
                  pages are visited most often. This data helps us improve our website performance.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Functionality Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies allow the website to remember choices you make and provide enhanced, 
                  more personal features. They may be set by us or by third-party providers.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are used to deliver advertisements more relevant to you and your interests. 
                  They are also used to limit the number of times you see an advertisement.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To remember your preferences and settings
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To analyze website traffic and usage patterns
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To provide personalized content and advertisements
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To improve website functionality and user experience
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can control and manage cookies in various ways. Most browsers allow you to:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                See what cookies are stored and delete them individually
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Block third-party cookies
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Block cookies from particular sites
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Block all cookies from being set
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-yellow-800">
                <strong>Please note:</strong> Disabling certain cookies may affect the functionality 
                of our website and your user experience.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We may also use third-party services such as Google Analytics, which may set their own 
              cookies. We have no control over these cookies and recommend you check the relevant 
              third party's website for more information about their cookie policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">contact@easyit.com</span>
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