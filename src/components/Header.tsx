import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-lg shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className='flex justify-center items-center rounded-lg bg-gradient-to-r w-[140px] h-14 from-purple-600 to-blue-500 active:scale-105'>
              <img src='/logos/logo.png' rel='header-logo' onClick={() => {navigate("/")}} className="w-32 h-12 text-white active:scale-90 bg-white rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {useLocation().pathname === '/' && menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-300'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {useLocation().pathname === '/' && (
            <div className="hidden md:block">
              <a
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                href='#contact'
              >
                Get Started
              </a>
            </div>)}
        </div>
      </div>
    </header>
  );
};

export default Header;