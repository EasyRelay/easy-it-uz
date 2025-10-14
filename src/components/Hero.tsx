import { ArrowRight, Code, Zap, Shield, Sparkles } from 'lucide-react';
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import FloatingButtons from './FloatingButtons';

const Hero = () => {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const fullText = t('hero.titleLine1') + ' ' + t('hero.titleEmphasis') + ' ' + t('hero.titleLine2');

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  const floatingAnimation = {
    y: [-20, 20, -20],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.3
      }
    }
  };

  const featureItemVariants = {
    hidden: {
      x: 50,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-400 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="relative">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight min-h-[200px]">
                  <span className="inline-block">
                    {displayedText}
                    <motion.span
                      className="inline-block w-1 h-16 bg-blue-400 ml-1"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </span>
                </h1>

                <motion.div
                  className="absolute -top-8 -right-8 text-blue-400"
                  animate={floatingAnimation}
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-xl lg:text-2xl text-gray-300 max-w-2xl"
              >
                {t('hero.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 
                 text-white px-8 py-4 rounded-xl font-semibold text-lg 
                 transition-all duration-300 flex items-center justify-center gap-2 
                 shadow-xl hover:shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">{t('common.getStarted')}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>

              <motion.a
                href='#services'
                className="border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('common.learnMore')}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 mt-16 lg:mt-0 space-y-6"
            variants={featureContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: Code, color: "text-blue-400", title: t('hero.feature1Title'), desc: t('hero.feature1Desc') },
              { icon: Zap, color: "text-purple-400", title: t('hero.feature2Title'), desc: t('hero.feature2Desc') },
              { icon: Shield, color: "text-green-400", title: t('hero.feature3Title'), desc: t('hero.feature3Desc') }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={featureItemVariants}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 
                 hover:bg-white/20 transition-all duration-500 cursor-pointer
                 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                animate={{
                  y: [0, -3, 0],
                  transition: {
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    padding: '2px',
                  }}
                  initial={{ rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl" />
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="relative"
                    animate={{
                      rotate: [0, 2, -2, 0],
                      transition: {
                        duration: 6 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 1.2
                      }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl opacity-30"
                      style={{ backgroundColor: feature.color.replace('text-', '') }}
                      whileHover={{ scale: 1.8, opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        transition: {
                          duration: 3 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }
                      }}
                    />
                    <feature.icon className={`w-12 h-12 ${feature.color} mb-4 relative z-10`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <FloatingButtons />
    </section>
  );
};

export default Hero;