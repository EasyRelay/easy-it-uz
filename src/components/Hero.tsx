import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen bg-gradient-to-br bg-no-repeat from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden animate-gradientReveal bg-[length:200%_200%]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                {t('hero.titleLine1')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {t('hero.titleEmphasis')}
                </span>
                <br />
                {t('hero.titleLine2')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl lg:text-2xl text-gray-300 max-w-2xl"
              >
                {t('hero.subtitle')}
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 
             text-white px-8 py-4 rounded-xl font-semibold text-lg 
             transition-all duration-300 flex items-center justify-center gap-2 
             shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                {t('common.getStarted')}
                <ArrowRight className="w-5 h-5 animate-arrowMove" />
              </a>

              <a href='#services' className="border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                {t('common.learnMore')}
              </a>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 grid grid-cols-1 gap-6">
            <div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 
               hover:bg-white/30 transition-all duration-300 
               animate-fadeShine hover:animate-none"
              style={{ animationDelay: "0s" }}
            >
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('hero.feature1Title')}</h3>
              <p className="text-gray-300">
                {t('hero.feature1Desc')}
              </p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 
               hover:bg-white/30 transition-all duration-300 
               animate-fadeShine hover:animate-none"
              style={{ animationDelay: "0.5s" }}
            >
              <Zap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('hero.feature2Title')}</h3>
              <p className="text-gray-300">
                {t('hero.feature2Desc')}
              </p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 
               hover:bg-white/30 transition-all duration-300 
               animate-fadeShine hover:animate-none"
              style={{ animationDelay: "1s" }}
            >
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('hero.feature3Title')}</h3>
              <p className="text-gray-300">
                {t('hero.feature3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;