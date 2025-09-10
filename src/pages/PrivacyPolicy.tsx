import React, { useEffect } from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {

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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we protect your data.
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
              This Privacy Policy describes how Easy IT collects, uses, and shares your personal information.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information such as your name, email address, phone number, 
                  and mailing address when you contact us or use our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Usage Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We automatically collect information about how you interact with our website, 
                  including IP address, browser type, pages visited, and time spent on our site.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To provide and improve our services
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To communicate with you about our services
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To personalize your experience on our website
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To comply with legal obligations
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We may share your information with trusted third-party service providers who assist us 
              in operating our website and conducting our business, provided they agree to keep this 
              information confidential.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Access your personal information we have collected
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Request correction of inaccurate information
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Request deletion of your personal information
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Opt out of marketing communications
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;