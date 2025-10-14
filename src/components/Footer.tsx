import { Mail, Phone, MapPin, } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('footer.services'), href: '#services' },
    { name: t('common.portfolio'), href: '#portfolio' },
    { name: t('footer.about'), href: '#about' },
    { name: t('common.contact'), href: '#contact' }
  ];

  const services = [
    { name: t('services.items.webDev.title'), href: '#' },
    { name: t('services.items.botDev.title'), href: '#' },
    { name: t('services.items.mobileApps.title'), href: '#' },
    { name: t('services.items.cloud.title'), href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 pr-4  gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className='w-[140px] h-14'>
                <img src="/logos/easyit-logo-white.png" alt="" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.companyBlurb')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:easyituz@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  easyituz@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+998901234567" className="text-gray-300 hover:text-white transition-colors">
                  +998 (94) 683-44-89
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <Link to={'https://www.google.com/maps/place/41%C2%B019\'25.1%22N+69%C2%B013\'53.5%22E/@41.323645,69.231535,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.323645!4d69.231535?entry=ttu'}
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  {t('contact.info.city')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between px-20 items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} EasyIT. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">{t('footer.cookie')}</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;