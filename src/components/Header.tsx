import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('common.home'), href: '#home' },
    { name: t('common.services'), href: '#services' },
    { name: t('common.portfolio'), href: '#portfolio' },
    { name: t('common.contact'), href: '#contact' }
  ];

  const pathname = window.location.pathname;
  const isNumber = parseInt(pathname.split('/')[2]);

  const acceptToOpen = isNumber && pathname === '/portfolio/' + pathname.split('/')[2];

  const changeLanguage = (lng: 'uz' | 'ru' | 'en') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {!acceptToOpen ?
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
          }`}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center cursor-pointer gap-3">
                <div className='flex justify-center items-center rounded-lg bg-gradient-to-r w-[140px] h-14 active:scale-105'>
                  <img src={isScrolled ? '/logos/Рисунок2.png' : '/logos/easyit-logo-white.png'} onClick={() => { navigate("/") }} className={`flex w-32 h-10 text-2xl font-extrabold items-center justify-center active:scale-90 rounded-lg  ${!isScrolled && (pathname === '/' || pathname === '/privacy-policy' || pathname === '/cookie-policy' || pathname === '/terms-of-service') ? 'text-white' : 'text-black'}`} />
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {useLocation().pathname === '/' && menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-300'}`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                {(['uz', 'ru', 'en'] as const).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`px-3 py-1 rounded-md text-sm font-medium border ${i18n.resolvedLanguage === lng
                        ? 'bg-blue-600 text-white border-blue-600'
                        : isScrolled
                          ? 'text-gray-700 border-gray-300'
                          : 'text-white border-white/50'
                      }`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header> : <div></div>
      }
    </div>
  );
};

export default Header;