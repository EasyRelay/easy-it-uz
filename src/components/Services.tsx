import { Globe, Bot, Smartphone, Cloud, Users, Database } from 'lucide-react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Globe,
      title: t('services.items.webDev.title'),
      description: t('services.items.webDev.desc')
    },
    {
      icon: Bot,
      title: t('services.items.botDev.title'),
      description: t('services.items.botDev.desc')
    },
    {
      icon: Smartphone,
      title: t('services.items.mobileApps.title'),
      description: t('services.items.mobileApps.desc')
    },
    {
      icon: Cloud,
      title: t('services.items.cloud.title'),
      description: t('services.items.cloud.desc')
    },
    {
      icon: Users,
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.desc')
    },
    {
      icon: Database,
      title: t('services.items.database.title'),
      description: t('services.items.database.desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white rounded-2xl p-8 shadow-lg 
                border border-gray-100 hover:border-blue-200 
                transition-all duration-300 transform hover:-translate-y-2 
                animate-glow hover:animate-none"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl 
                flex items-center justify-center mb-6 
                group-hover:scale-110 group-hover:rotate-6 
                transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;