"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  phone: string,
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.messageRequired');
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(true);
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const res = await fetch('https://eow5xcsp1f4eyie.m.pipedream.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1000);
    } else {
      setErrors(newErrors);
    }

    setStatus(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      value: 'easyituz@gmail.com',
      link: 'mailto:easyituz@gmail.com'
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      value: '+998 (94) 683-44-89',
      link: 'tel:+998946834489'
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      value: t('contact.info.city'),
      link: '#'
    }
  ];

  return (
    <motion.section
      id="contact"
      className="py-12 bg-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('contact.infoTitle')}</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{info.title}</h4>
                      <Link
                        to={info.link}
                        className="text-blue-600 hover:text-purple-600 transition-colors text-sm"
                      >
                        {info.value}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Choose EasyIT.uz */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('contact.whyTitle')}</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {t('contact.why.exp')}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {t('contact.why.support')}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {t('contact.why.price')}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {t('contact.why.satisfaction')}
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-5">{t('contact.sendMessage')}</h3>

            {isSubmitted && (
              <motion.div
                className="mb-5 p-3 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium text-sm">
                    {t('contact.success')}
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div whileFocus={{ scale: 1.01 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.labels.fullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder={t('contact.placeholders.fullName')}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.labels.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder={t('contact.placeholders.email')}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </motion.div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.labels.phone')}
                </label>
                <input
                  type="string"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all border-gray-300 text-sm"
                  placeholder={t('contact.placeholders.phone')}
                />
              </div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.labels.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-sm ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder={t('contact.placeholders.message')}
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md text-sm"
              >
                <Send className="w-4 h-4 animate-pulse" />
                {status ? t('contact.submit.sending') : t('contact.submit.send')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;