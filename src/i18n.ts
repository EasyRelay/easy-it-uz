import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      common: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
        getStarted: 'Get Started',
        learnMore: 'Learn More',
        showMore: 'Show More',
        showLess: 'Show Less',
        loading: 'Loading...',
        notFound: 'Project not found',
        returnHome: 'Return Home',
        lastUpdated: 'Last updated:',
        contactUs: 'Contact Us'
      },
      hero: {
        titleLine1: 'Innovative ',
        titleEmphasis: 'IT Solutions',
        titleLine2: 'for Your Business',
        subtitle: 'We provide cutting-edge IT services, web development, automation, and comprehensive support to help your business thrive in the digital age.',
        feature1Title: 'Modern Development',
        feature1Desc: 'Cutting-edge web and mobile applications built with the latest technologies',
        feature2Title: 'Automation & Bots',
        feature2Desc: 'Smart automation solutions and custom bots to streamline your workflow',
        feature3Title: 'Reliable Support',
        feature3Desc: '24/7 technical support and maintenance to keep your systems running smoothly'
      },
      services: {
        title: 'Our Services',
        subtitle: 'We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.',
        items: {
          webDev: {
            title: 'Web Development',
            desc: 'Modern and responsive websites built with cutting-edge technologies for optimal performance and user experience.'
          },
          botDev: {
            title: 'Bot Development',
            desc: 'Custom Telegram, Discord, and specialized bots to automate your business processes and enhance productivity.'
          },
          mobileApps: {
            title: 'Mobile Applications',
            desc: 'Cross-platform mobile apps that deliver exceptional user experiences on both iOS and Android devices.'
          },
          cloud: {
            title: 'Cloud Solutions',
            desc: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.'
          },
          consulting: {
            title: 'IT Consulting',
            desc: 'Expert guidance and strategic planning to help you make informed technology decisions for your business.'
          },
          database: {
            title: 'Database Management',
            desc: 'Efficient database design, optimization, and management solutions to ensure your data is secure and accessible.'
          }
        }
      },
      portfolio: {
        title: 'Our Portfolio',
        showMore: 'Show More',
        showLess: 'Show Less'
      },
      contact: {
        title: 'Get in Touch',
        subtitle: "Ready to transform your business with cutting-edge IT solutions? Let's discuss your project.",
        infoTitle: 'Contact Information',
        sendMessage: 'Send us a Message',
        success: "Message sent successfully! We'll get back to you soon.",
        labels: {
          fullName: 'Full Name',
          email: 'Email Address',
          phone: 'Phone number',
          message: 'Message'
        },
        placeholders: {
          fullName: 'Enter your full name',
          email: 'Enter your email address',
          phone: 'Enter your phone number',
          message: 'Tell us about your project...'
        },
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Email is invalid',
          messageRequired: 'Message is required'
        },
        submit: {
          sending: 'Sending...',
          send: 'Send Message'
        },
        whyTitle: 'Why Choose EasyIT.uz?',
        why: {
          exp: 'Expert team with 6+ years experience',
          support: '24/7 technical support',
          price: 'Competitive pricing',
          satisfaction: '100% client satisfaction'
        },
        info: {
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          city: 'Tashkent, Uzbekistan'
        }
      },
      footer: {
        quickLinks: 'Quick Links',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        companyBlurb: "We provide innovative IT solutions to help businesses thrive in the digital age. From web development to automation, we've got you covered.",
        contactInfo: 'Contact Info',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        cookie: 'Cookie Policy',
        terms: 'Terms of Service'
      },
      project: {
        loading: 'Loading project details...',
        backTo: 'Back to Projects',
        breadcrumbProject: 'Project',
        viewLive: 'View Live',
        sourceCode: 'Source Code',
        overview: 'Project Overview',
        techStack: 'Technology Stack',
        keyFeatures: 'Key Features',
        responsive: 'Responsive Design',
        perf: 'Performance Optimized',
        modern: 'Modern UI/UX',
        cleanArch: 'Clean Architecture',
        details: 'Project Details',
        technologies: 'Technologies',
        completionDate: 'Completion Date',
        client: 'Client',
        category: 'Category',
        keyFeaturesF: "Key Features",
        responsiveF: "Responsive Design",
        responsiveDesc: "Adapts seamlessly to all device sizes from mobile to desktop, ensuring optimal user experience across platforms.",
        perfF: "High Performance",
        perfDesc: "Implements best practices for fast loading times and smooth interactions, enhancing user engagement.",
        modernF: "Modern UI",
        modernDesc: "Features an intuitive interface with contemporary design principles that prioritize user needs and interactions.",
        cleanArchF: "Clean Architecture",
        cleanArchDesc: "Built with maintainable code structure and organization, making it easy to extend and scale over time."
      },
      legal: {
        cookie: {
          title: 'Cookie Policy',
          subtitle: 'Learn how we use cookies to improve your browsing experience.',
          updatedIntro: 'This Cookie Policy explains how Easy IT uses cookies and similar technologies.',
          whatAre: 'What Are Cookies?',
          typesTitle: 'Types of Cookies We Use',
          types: {
            essential: { title: 'Essential Cookies', desc: 'Necessary for the website to function properly, enabling basic features.' },
            performance: { title: 'Performance Cookies', desc: 'Collect usage data to help us improve website performance.' },
            functionality: { title: 'Functionality Cookies', desc: 'Remember your choices to provide enhanced, personalized features.' },
            marketing: { title: 'Marketing Cookies', desc: 'Deliver more relevant ads and limit repeated impressions.' }
          },
          howWeUse: 'How We Use Cookies',
          howList: {
            remember: 'To remember your preferences and settings',
            analyze: 'To analyze website traffic and usage patterns',
            personalize: 'To provide personalized content and advertisements',
            improve: 'To improve website functionality and user experience'
          },
          managing: 'Managing Cookies',
          managingIntro: 'You can control and manage cookies in various ways. Most browsers allow you to:',
          managingList: {
            seeDelete: 'See what cookies are stored and delete them individually',
            blockThird: 'Block third-party cookies',
            blockSites: 'Block cookies from particular sites',
            blockAll: 'Block all cookies from being set'
          },
          note: 'Please note:',
          noteDesc: 'Disabling certain cookies may affect website functionality and your experience.',
          thirdParty: {
            title: 'Third-Party Cookies',
            desc: 'We may use services like Google Analytics that set their own cookies. Please check their policies for details.'
          },
          contactTitle: 'Contact Us',
          contactIntro: 'If you have any questions about our use of cookies, please contact us:'
        },
        privacy: {
          title: 'Privacy Policy',
          subtitle: 'Your privacy is important to us. Learn how we protect your data.',
          updatedIntro: "This Privacy Policy describes how Easy IT collects, uses, and shares your personal information.",
          infoCollect: 'Information We Collect',
          personalInfo: { title: 'Personal Information', desc: 'We may collect your name, email, phone, and address when you contact us or use our services.' },
          usageInfo: { title: 'Usage Information', desc: 'We automatically collect IP, browser, pages visited, and time spent on our site.' },
          howUse: 'How We Use Your Information',
          howUseList: {
            provide: 'To provide and improve our services',
            communicate: 'To communicate with you about our services',
            personalize: 'To personalize your experience on our website',
            legal: 'To comply with legal obligations'
          },
          sharing: 'Information Sharing',
          sharingIntro: 'We do not sell or trade your personal information without consent, except as described here.',
          sharingDesc: 'We may share data with trusted providers who assist our operations, under confidentiality obligations.',
          security: 'Data Security',
          securityDesc: 'We apply appropriate measures to protect data. No Internet transmission is 100% secure.',
          rights: 'Your Rights',
          rightsIntro: 'You have the right to:',
          rightsList: {
            access: 'Access your personal information',
            correct: 'Request correction of inaccurate information',
            delete: 'Request deletion of your personal information',
            optout: 'Opt out of marketing communications'
          },
          contactTitle: 'Contact Us',
          contactIntro: 'If you have questions about this Privacy Policy or our practices, contact us:'
        },
        terms: {
          title: 'Terms of Service',
          subtitle: 'Please read these terms carefully before using our services.',
          updatedIntro: "These Terms of Service govern your use of Easy IT's website and services.",
          agreement: 'Agreement to Terms',
          agreementDesc: 'By using this website, you agree to be bound by these terms. If not, do not use this service.',
          useLicense: 'Use License',
          useLicenseIntro: "Permission is granted to temporarily download one copy for personal, non-commercial use. Under this license you may not:",
          useLicenseList: {
            modify: 'Modify or copy the materials',
            commercial: 'Use the materials for any commercial purpose or public display',
            reverse: 'Attempt to reverse engineer any software on the website',
            remove: 'Remove any copyright or proprietary notations'
          },
          services: 'Services',
          availability: { title: 'Service Availability', desc: 'We strive for 99.9% uptime but do not guarantee uninterrupted access. Maintenance may occur.' },
          modifications: { title: 'Service Modifications', desc: 'We may modify, suspend, or discontinue services at any time, with or without notice.' },
          responsibilities: 'User Responsibilities',
          responsibilitiesIntro: 'As a user, you agree to:',
          responsibilitiesList: {
            accurate: 'Provide accurate and complete information',
            security: 'Maintain the security of your credentials',
            laws: 'Use our services in compliance with laws',
            disrupt: 'Not engage in activities that disrupt services',
            ip: 'Respect intellectual property rights'
          },
          payments: 'Payment Terms',
          billing: { title: 'Billing', desc: 'Fees are charged in advance and non-refundable unless specified. You agree to pay all charges.' },
          late: { title: 'Late Payments', desc: 'Failure to pay may result in suspension or termination. Late fees may apply.' },
          disclaimer: 'Disclaimer',
          disclaimerDesc: "Materials are provided 'as is'. Easy IT disclaims all implied warranties including merchantability, fitness, and non-infringement.",
          limitations: 'Limitations',
          limitationsDesc: 'Easy IT is not liable for any damages arising from the use or inability to use the materials, even if notified.',
          law: 'Governing Law',
          lawDesc: 'These terms are governed by the laws where Easy IT operates. You submit to that jurisdiction.',
          contactTitle: 'Contact Information',
          contactIntro: 'If you have questions about these Terms of Service, please contact us:'
        }
      }
    }
  },
  ru: {
    translation: {
      common: {
        home: 'Главная',
        services: 'Услуги',
        portfolio: 'Портфолио',
        contact: 'Контакты',
        getStarted: 'Начать',
        learnMore: 'Подробнее',
        showMore: 'Показать больше',
        showLess: 'Показать меньше',
        loading: 'Загрузка...',
        notFound: 'Проект не найден',
        returnHome: 'На главную',
        lastUpdated: 'Последнее обновление:',
        contactUs: 'Свяжитесь с нами'
      },
      hero: {
        titleLine1: 'Инновационные ',
        titleEmphasis: 'IT-решения',
        titleLine2: 'для вашего бизнеса',
        subtitle: 'Мы предоставляем передовые IT‑услуги, веб‑разработку, автоматизацию и комплексную поддержку, чтобы помочь вашему бизнесу развиваться в цифровую эпоху.',
        feature1Title: 'Современная разработка',
        feature1Desc: 'Передовые веб и мобильные приложения на новейших технологиях',
        feature2Title: 'Автоматизация и боты',
        feature2Desc: 'Умные решения и кастомные боты для оптимизации процессов',
        feature3Title: 'Надежная поддержка',
        feature3Desc: 'Круглосуточная техподдержка и обслуживание для стабильной работы систем'
      },
      services: {
        title: 'Наши услуги',
        subtitle: 'Мы предлагаем комплексные IT‑решения, адаптированные под нужды вашего бизнеса и цифровую трансформацию.',
        items: {
          webDev: { title: 'Веб‑разработка', desc: 'Современные адаптивные сайты на передовых технологиях для лучшего UX и производительности.' },
          botDev: { title: 'Разработка ботов', desc: 'Кастомные боты для Telegram, Discord и другие для автоматизации процессов.' },
          mobileApps: { title: 'Мобильные приложения', desc: 'Кроссплатформенные приложения с отличным UX на iOS и Android.' },
          cloud: { title: 'Облачные решения', desc: 'Масштабируемая облачная инфраструктура и миграция для оптимизации затрат.' },
          consulting: { title: 'IT‑консалтинг', desc: 'Экспертные рекомендации и стратегия для технологических решений вашего бизнеса.' },
          database: { title: 'Управление базами данных', desc: 'Проектирование, оптимизация и управление данными для безопасности и доступности.' }
        }
      },
      portfolio: {
        title: 'Наше портфолио',
        showMore: 'Показать больше',
        showLess: 'Показать меньше'
      },
      contact: {
        title: 'Свяжитесь с нами',
        subtitle: 'Готовы трансформировать бизнес с передовыми IT‑решениями? Обсудим ваш проект.',
        infoTitle: 'Контактная информация',
        sendMessage: 'Отправьте нам сообщение',
        success: 'Сообщение успешно отправлено! Мы скоро свяжемся с вами.',
        labels: { fullName: 'Полное имя', email: 'Электронная почта', phone: 'Номер телефона', message: 'Сообщение' },
        placeholders: { fullName: 'Введите полное имя', email: 'Введите адрес электронной почты', phone: 'Введите номер телефона', message: 'Расскажите о вашем проекте...' },
        errors: { nameRequired: 'Имя обязательно', emailRequired: 'Email обязателен', emailInvalid: 'Неверный email', messageRequired: 'Сообщение обязательно' },
        submit: { sending: 'Отправка...', send: 'Отправить сообщение' },
        whyTitle: 'Почему EasyIT.uz?',
        why: { exp: 'Экспертная команда 6+ лет опыта', support: 'Круглосуточная поддержка', price: 'Конкурентные цены', satisfaction: '100% удовлетворенность клиентов' },
        info: { email: 'Email', phone: 'Телефон', location: 'Локация', city: 'Ташкент, Узбекистан' }
      },
      footer: {
        quickLinks: 'Быстрые ссылки',
        services: 'Услуги',
        about: 'О нас',
        contact: 'Контакты',
        companyBlurb: 'Мы предоставляем инновационные IT‑решения для роста бизнеса в цифровую эпоху. От веб‑разработки до автоматизации — мы поможем.',
        contactInfo: 'Контакты',
        rights: 'Все права защищены.',
        privacy: 'Политика конфиденциальности',
        cookie: 'Политика файлов cookie',
        terms: 'Условия обслуживания'
      },
      project: {
        loading: 'Загрузка данных проекта...',
        backTo: 'Назад к проектам',
        breadcrumbProject: 'Проект',
        viewLive: 'Открыть сайт',
        sourceCode: 'Исходный код',
        overview: 'Обзор проекта',
        techStack: 'Технологический стек',
        keyFeatures: 'Ключевые особенности',
        responsive: 'Адаптивный дизайн',
        perf: 'Оптимизированная производительность',
        modern: 'Современный UI/UX',
        cleanArch: 'Чистая архитектура',
        details: 'Детали проекта',
        technologies: 'Технологии',
        completionDate: 'Дата завершения',
        client: 'Клиент',
        category: 'Категория',
        keyFeaturesF: "Основные особенности",
        responsiveF: "Адаптивный дизайн",
        responsiveDesc: "Идеально подстраивается под все размеры устройств — от мобильных до настольных, обеспечивая удобство для пользователей.",
        perfF: "Высокая производительность",
        perfDesc: "Реализованы лучшие практики для быстрой загрузки и плавных взаимодействий.",
        modernF: "Современный интерфейс",
        modernDesc: "Интуитивно понятный интерфейс с современными принципами дизайна, ориентированными на пользователя.",
        cleanArchF: "Чистая архитектура",
        cleanArchDesc: "Построен на поддерживаемой структуре кода, что облегчает расширение и масштабирование."
      },
      legal: {
        cookie: {
          title: 'Политика файлов cookie',
          subtitle: 'Узнайте, как мы используем cookie для улучшения работы сайта.',
          updatedIntro: 'Эта политика объясняет, как Easy IT использует cookie и похожие технологии.',
          whatAre: 'Что такое файлы cookie?',
          typesTitle: 'Типы cookie, которые мы используем',
          types: {
            essential: { title: 'Необходимые cookie', desc: 'Нужны для корректной работы сайта и базовых функций.' },
            performance: { title: 'Производительные cookie', desc: 'Собирают данные об использовании сайта для его улучшения.' },
            functionality: { title: 'Функциональные cookie', desc: 'Запоминают ваши выборы и обеспечивают персонализацию.' },
            marketing: { title: 'Маркетинговые cookie', desc: 'Показывают более релевантную рекламу и ограничивают повторы.' }
          },
          howWeUse: 'Как мы используем cookie',
          howList: {
            remember: 'Запоминать ваши настройки и предпочтения',
            analyze: 'Анализировать трафик и поведение пользователей',
            personalize: 'Предоставлять персонализированный контент и рекламу',
            improve: 'Улучшать функциональность и UX сайта'
          },
          managing: 'Управление файлами cookie',
          managingIntro: 'Вы можете управлять cookie разными способами. Большинство браузеров позволяют:',
          managingList: {
            seeDelete: 'Просматривать и удалять cookie по отдельности',
            blockThird: 'Блокировать cookie третьих сторон',
            blockSites: 'Блокировать cookie для отдельных сайтов',
            blockAll: 'Полностью блокировать установку cookie'
          },
          note: 'Обратите внимание:',
          noteDesc: 'Отключение некоторых cookie может повлиять на работу сайта и ваш опыт.',
          thirdParty: { title: 'Сторонние cookie', desc: 'Мы можем использовать Google Analytics и другие сервисы со своими cookie. Ознакомьтесь с их политиками.' },
          contactTitle: 'Свяжитесь с нами',
          contactIntro: 'Если у вас есть вопросы по использованию cookie, напишите нам:'
        },
        privacy: {
          title: 'Политика конфиденциальности',
          subtitle: 'Мы заботимся о вашей конфиденциальности. Узнайте, как мы защищаем данные.',
          updatedIntro: 'Эта политика описывает, как Easy IT собирает, использует и передает персональные данные.',
          infoCollect: 'Какие данные мы собираем',
          personalInfo: { title: 'Персональные данные', desc: 'Имя, email, телефон, адрес при обращении или использовании услуг.' },
          usageInfo: { title: 'Данные об использовании', desc: 'IP, браузер, посещенные страницы, время на сайте.' },
          howUse: 'Как мы используем данные',
          howUseList: { provide: 'Оказывать и улучшать услуги', communicate: 'Связываться с вами по услугам', personalize: 'Персонализировать опыт на сайте', legal: 'Соблюдать юридические требования' },
          sharing: 'Передача данных',
          sharingIntro: 'Мы не продаем данные без согласия, за исключением описанных случаев.',
          sharingDesc: 'Можем делиться данными с подрядчиками при условии конфиденциальности.',
          security: 'Безопасность данных',
          securityDesc: 'Применяем меры защиты, но передача по Интернету не на 100% безопасна.',
          rights: 'Ваши права',
          rightsIntro: 'Вы имеете право:',
          rightsList: { access: 'Доступ к данным', correct: 'Исправление неточностей', delete: 'Удаление данных', optout: 'Отказ от маркетинговых рассылок' },
          contactTitle: 'Связаться с нами',
          contactIntro: 'По вопросам политики и практик свяжитесь с нами:'
        },
        terms: {
          title: 'Условия обслуживания',
          subtitle: 'Внимательно прочитайте условия перед использованием услуг.',
          updatedIntro: 'Эти условия регулируют использование сайта и сервисов Easy IT.',
          agreement: 'Соглашение с условиями',
          agreementDesc: 'Используя сайт, вы соглашаетесь с условиями. Если нет — не используйте сервис.',
          useLicense: 'Лицензия на использование',
          useLicenseIntro: 'Разрешается временно скачать одну копию для личного, некоммерческого использования. Запрещается:',
          useLicenseList: { modify: 'Изменять или копировать материалы', commercial: 'Использовать в коммерческих целях или для публичного показа', reverse: 'Проводить обратную разработку ПО', remove: 'Удалять уведомления об авторских правах' },
          services: 'Сервисы',
          availability: { title: 'Доступность сервисов', desc: 'Стараемся поддерживать 99.9% аптайм, но не гарантируем. Возможны работы.' },
          modifications: { title: 'Изменения сервисов', desc: 'Можем изменять, приостанавливать или прекращать сервисы в любое время.' },
          responsibilities: 'Ответственность пользователя',
          responsibilitiesIntro: 'Пользователь обязуется:',
          responsibilitiesList: { accurate: 'Предоставлять точные данные', security: 'Хранить учетные данные в безопасности', laws: 'Соблюдать законы', disrupt: 'Не нарушать работу сервисов', ip: 'Уважать ИС права' },
          payments: 'Условия оплаты',
          billing: { title: 'Биллинг', desc: 'Оплата авансом, невозвратная, если не указано иное. Оплачивайте все начисления.' },
          late: { title: 'Просрочки', desc: 'Неплатежи ведут к блокировке/расторжению. Возможны пени.' },
          disclaimer: 'Отказ от гарантий',
          disclaimerDesc: "Материалы предоставляются 'как есть'. Easy IT снимает все подразумеваемые гарантии.",
          limitations: 'Ограничения ответственности',
          limitationsDesc: 'Easy IT не отвечает за ущерб от использования материалов, даже при уведомлении.',
          law: 'Применимое право',
          lawDesc: 'Условия регулируются законами юрисдикции Easy IT. Подсудность — соответствующие суды.',
          contactTitle: 'Контактная информация',
          contactIntro: 'По вопросам условий обслуживания свяжитесь с нами:'
        }
      }
    }
  },
  uz: {
    translation: {
      common: {
        home: 'Bosh sahifa',
        services: 'Xizmatlar',
        portfolio: 'Portfolio',
        contact: 'Aloqa',
        getStarted: 'Boshlash',
        learnMore: 'Batafsil',
        showMore: "Ko'proq ko'rsatish",
        showLess: 'Kamroq ko‘rsatish',
        loading: 'Yuklanmoqda...',
        notFound: 'Loyiha topilmadi',
        returnHome: 'Bosh sahifaga qaytish',
        lastUpdated: 'Oxirgi yangilanish:',
        contactUs: 'Biz bilan bog‘laning'
      },
      hero: {
        titleLine1: 'Innovatsion ',
        titleEmphasis: 'IT yechimlar',
        titleLine2: 'biznesingiz uchun',
        subtitle: 'Biz raqamli davrda biznesingizni rivojlantirish uchun ilg‘or IT xizmatlari, veb‑ishlab chiqish, avtomatlashtirish va to‘liq qo‘llab‑quvvatlashni taqdim etamiz.',
        feature1Title: 'Zamonaviy ishlab chiqish',
        feature1Desc: "Eng so‘nggi texnologiyalarda qurilgan veb va mobil ilovalar",
        feature2Title: 'Avtomatlashtirish va botlar',
        feature2Desc: 'Ish jarayonini soddalashtiruvchi aqlli avtomatlashtirish yechimlari va botlar',
        feature3Title: "Ishonchli qo‘llab-quvvatlash",
        feature3Desc: 'Tizimlaringiz barqaror ishlashi uchun 24/7 texnik yordam va xizmat'
      },
      services: {
        title: 'Xizmatlarimiz',
        subtitle: "Biz biznesingiz ehtiyojlariga moslashtirilgan va raqamli transformatsiyani tezlashtiruvchi kompleks IT yechimlarni taklif qilamiz.",
        items: {
          webDev: { title: 'Veb‑ishlab chiqish', desc: "Zamonaviy va moslashuvchan saytlar, yuqori unumdorlik va foydalanuvchi tajribasi uchun." },
          botDev: { title: 'Bot ishlab chiqish', desc: 'Telegram, Discord va boshqa platformalar uchun avtomatlashtirishga yordam beruvchi maxsus botlar.' },
          mobileApps: { title: 'Mobil ilovalar', desc: 'iOS va Android uchun ajoyib tajribaga ega kross‑platforma ilovalar.' },
          cloud: { title: 'Bulut yechimlari', desc: 'Masshtablanuvchi bulut infratuzilmasi va migratsiya xizmatlari, xarajatlarni optimallashtirish uchun.' },
          consulting: { title: 'IT konsalting', desc: "To‘g‘ri texnologik qarorlar qabul qilish uchun ekspert maslahat va strategiya." },
          database: { title: 'Ma’lumotlar bazasi boshqaruvi', desc: "Ma’lumotlarni xavfsiz va qulay saqlash uchun samarali dizayn, optimallashtirish va boshqaruv." }
        }
      },
      portfolio: {
        title: 'Bizning portfoliomiz',
        showMore: "Ko'proq ko'rsatish",
        showLess: 'Kamroq ko‘rsatish'
      },
      contact: {
        title: 'Biz bilan bog‘laning',
        subtitle: 'Biznesingizni ilg‘or IT yechimlari bilan o‘zgartirishga tayyormisiz? Loyihangiz haqida suhbatlashamiz.',
        infoTitle: 'Aloqa ma’lumotlari',
        sendMessage: 'Bizga xabar yuboring',
        success: 'Xabar muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.',
        labels: { fullName: 'To‘liq ism', email: 'Elektron pochta', phone: 'Telefon raqami', message: 'Xabar' },
        placeholders: { fullName: 'To‘liq ismingizni kiriting', email: 'Elektron pochtangizni kiriting', phone: 'Telefon raqamingizni kiriting', message: 'Loyihangiz haqida yozing...' },
        errors: { nameRequired: 'Ism kiritish majburiy', emailRequired: 'Email kiritish majburiy', emailInvalid: 'Email noto‘g‘ri', messageRequired: 'Xabar kiritish majburiy' },
        submit: { sending: 'Yuborilmoqda...', send: 'Xabarni yuborish' },
        whyTitle: 'Nega EasyIT.uz?',
        why: { exp: "6+ yillik tajribaga ega jamoa", support: '24/7 texnik yordam', price: 'Raqobatbardosh narxlar', satisfaction: "100% mijozlar mamnunligi" },
        info: { email: 'Email', phone: 'Telefon', location: 'Manzil', city: 'Toshkent, O‘zbekiston' }
      },
      footer: {
        quickLinks: 'Tezkor havolalar',
        services: 'Xizmatlar',
        about: 'Haqimizda',
        contact: 'Aloqa',
        companyBlurb: 'Biz raqamli davrda biznesingizni rivojlantirish uchun innovatsion IT yechimlarni taqdim etamiz. Veb‑ishlab chiqishdan tortib avtomatlashtirishgacha — biz yoningizdamiz.',
        contactInfo: 'Aloqa ma’lumotlari',
        rights: 'Barcha huquqlar himoyalangan.',
        privacy: 'Maxfiylik siyosati',
        cookie: 'Cookie siyosati',
        terms: 'Xizmat ko‘rsatish shartlari'
      },
      project: {
        loading: 'Loyiha tafsilotlari yuklanmoqda...',
        backTo: 'Loyihalarga qaytish',
        breadcrumbProject: 'Loyiha',
        viewLive: 'Saytni ko‘rish',
        sourceCode: 'Manba kodi',
        overview: 'Loyiha haqida',
        techStack: 'Texnologiyalar to‘plami',
        keyFeatures: 'Asosiy xususiyatlar',
        responsive: 'Moslashuvchan dizayn',
        perf: 'Tezkorlik optimallashgan',
        modern: 'Zamonaviy UI/UX',
        cleanArch: 'Toza arxitektura',
        details: 'Loyiha tafsilotlari',
        technologies: 'Texnologiyalar',
        completionDate: 'Tugash sanasi',
        client: 'Mijoz',
        category: 'Kategoriya',
        keyFeaturesF: "Asosiy xususiyatlari",
        responsiveF: "Moslashuvchan dizayn",
        responsiveDesc: "Mobil telefondan tortib, kompyutergacha barcha qurilmalarda qulay ishlash imkonini beradi.",
        perfF: "Yuqori samaradorlik",
        perfDesc: "Tez yuklanish va silliq ishlash uchun eng yaxshi amaliyotlar qo‘llanilgan.",
        modernF: "Zamonaviy UI",
        modernDesc: "Foydalanuvchi ehtiyojlariga yo‘naltirilgan zamonaviy interfeysga ega.",
        cleanArchF: "Toza arxitektura",
        cleanArchDesc: "Kengaytirish va qo‘llab-quvvatlash oson bo‘lishi uchun toza kod tuzilmasida qurilgan."
      },
      legal: {
        cookie: {
          title: 'Cookie siyosati',
          subtitle: 'Brauzer tajribangizni yaxshilash uchun cookie qanday ishlatilishini bilib oling.',
          updatedIntro: 'Ushbu siyosat Easy IT cookie va o‘xshash texnologiyalarni qanday ishlatishini tushuntiradi.',
          whatAre: 'Cookie nima?',
          typesTitle: 'Biz foydalanadigan cookie turlari',
          types: {
            essential: { title: 'Zarur cookie', desc: 'Saytning to‘g‘ri ishlashi va asosiy funksiyalar uchun zarur.' },
            performance: { title: 'Unumdorlik cookie', desc: 'Foydalanish ma’lumotlarini to‘plab, sayt samaradorligini oshirishga yordam beradi.' },
            functionality: { title: 'Funktsional cookie', desc: 'Tanlovlaringizni eslab, shaxsiylashtirilgan imkoniyatlarni taqdim etadi.' },
            marketing: { title: 'Marketing cookie', desc: 'Sizga mos reklamalarni ko‘rsatadi va takrorlanishni cheklaydi.' }
          },
          howWeUse: 'Cookie’dan qanday foydalanamiz',
          howList: {
            remember: 'Sozlamalar va afzalliklarni eslab qolish',
            analyze: 'Trafik va foydalanish naqshlarini tahlil qilish',
            personalize: 'Shaxsiylashtirilgan kontent va reklamalarni taqdim etish',
            improve: 'Sayt funksionalligini va foydalanuvchi tajribasini yaxshilash'
          },
          managing: 'Cookie’larni boshqarish',
          managingIntro: 'Cookie’larni turlicha boshqarish mumkin. Aksariyat brauzerlar quyidagilarga ruxsat beradi:',
          managingList: {
            seeDelete: 'Saqlangan cookie’larni ko‘rish va alohida o‘chirish',
            blockThird: 'Uchinchi tomon cookie’larini bloklash',
            blockSites: 'Muayyan saytlardan cookie’larni bloklash',
            blockAll: 'Barcha cookie’larning o‘rnatilishini bloklash'
          },
          note: 'Eslatma:',
          noteDesc: 'Ba’zi cookie’larni o‘chirish sayt ishlashiga va tajribangizga ta’sir qilishi mumkin.',
          thirdParty: { title: 'Uchinchi tomon cookie’lari', desc: 'Google Analytics kabi xizmatlar o‘z cookie’larini o‘rnatishi mumkin. Ularning siyosatini o‘qing.' },
          contactTitle: 'Biz bilan bog‘laning',
          contactIntro: 'Cookie’lardan foydalanish bo‘yicha savollar bo‘lsa, biz bilan bog‘laning:'
        },
        privacy: {
          title: 'Maxfiylik siyosati',
          subtitle: 'Sizning maxfiyligingiz muhim. Ma’lumotlaringizni qanday himoya qilishimizni bilib oling.',
          updatedIntro: 'Ushbu siyosat Easy IT shaxsiy ma’lumotlarni qanday yig‘ishi, ishlatishi va ulashishini bayon qiladi.',
          infoCollect: 'Qanday ma’lumotlar yig‘amiz',
          personalInfo: { title: 'Shaxsiy ma’lumotlar', desc: 'Ism, email, telefon, manzil — biz bilan bog‘langanda yoki xizmatlardan foydalanganda.' },
          usageInfo: { title: 'Foydalanish ma’lumotlari', desc: 'IP, brauzer, ko‘rilgan sahifalar, saytga sarflangan vaqt.' },
          howUse: 'Ma’lumotlardan qanday foydalanamiz',
          howUseList: { provide: 'Xizmatlarni ko‘rsatish va yaxshilash', communicate: 'Xizmatlar haqida siz bilan aloqa qilish', personalize: 'Saytdagi tajribani shaxsiylashtirish', legal: 'Yuridik talablarni bajarish' },
          sharing: 'Ma’lumotlarni ulashish',
          sharingIntro: 'Roziligingizsiz ma’lumotlar sotilmaydi yoki berilmaydi, bundan mustasno, shu yerda ko‘rsatilgan holatlar.',
          sharingDesc: 'Ishimizga ko‘maklashadigan hamkorlar bilan maxfiylik sharti asosida bo‘lishimiz mumkin.',
          security: 'Ma’lumotlarning xavfsizligi',
          securityDesc: 'Mos himoya choralarini qo‘llaymiz, biroq Internet orqali uzatish 100% xavfsiz emas.',
          rights: 'Sizning huquqlaringiz',
          rightsIntro: 'Siz quyidagi huquqlarga egasiz:',
          rightsList: { access: 'Ma’lumotlarga kirish', correct: 'Noto‘g‘ri ma’lumotni tuzatish', delete: 'Ma’lumotni o‘chirish', optout: 'Marketing xabarlardan voz kechish' },
          contactTitle: 'Biz bilan bog‘laning',
          contactIntro: 'Ushbu siyosat yoki amaliyotlar bo‘yicha savollar bo‘lsa, bizga murojaat qiling:'
        },
        terms: {
          title: 'Xizmat ko‘rsatish shartlari',
          subtitle: 'Iltimos, xizmatlarimizdan foydalanishdan oldin shartlarni o‘qing.',
          updatedIntro: 'Ushbu shartlar Easy IT sayt va xizmatlaridan foydalanishni tartibga soladi.',
          agreement: 'Shartlarga rozilik',
          agreementDesc: 'Saytdan foydalanish — shartlarga rozilik demak. Rozi bo‘lmasangiz, xizmatdan foydalanmang.',
          useLicense: 'Foydalanish litsenziyasi',
          useLicenseIntro: 'Shaxsiy, notijorat maqsadda vaqtinchalik yuklab olishga ruxsat beriladi. Quyidagilar taqiqlanadi:',
          useLicenseList: { modify: 'Materiallarni o‘zgartirish yoki nusxa olish', commercial: 'Tijorat yoki ommaviy ko‘rsatish uchun foydalanish', reverse: 'Dasturiy ta’minotni teskari tahlil qilish', remove: 'Mualliflik huquqi eslatmalarini olib tashlash' },
          services: 'Xizmatlar',
          availability: { title: 'Xizmatlarning mavjudligi', desc: '99.9% ishchanlikka intilamiz, ammo kafolat bermaymiz. Texnik ishlar bo‘lishi mumkin.' },
          modifications: { title: 'Xizmatlar o‘zgarishi', desc: 'Xizmatlarni istalgan vaqtda o‘zgartirish, to‘xtatish yoki bekor qilishimiz mumkin.' },
          responsibilities: 'Foydalanuvchi majburiyatlari',
          responsibilitiesIntro: 'Foydalanuvchi quyidagilarga rozilik bildiradi:',
          responsibilitiesList: { accurate: 'To‘g‘ri va to‘liq ma’lumot berish', security: 'Hisob ma’lumotlari xavfsizligini ta’minlash', laws: 'Qonunlarga rioya qilish', disrupt: 'Xizmatlarga halal bermaslik', ip: 'Intellektual mulk huquqlariga hurmat' },
          payments: 'To‘lov shartlari',
          billing: { title: 'Hisob-kitob', desc: 'To‘lovlar oldindan olinadi va odatda qaytarilmaydi. Barcha to‘lovlarni to‘lang.' },
          late: { title: 'Kechikishlar', desc: 'To‘lov qilinmasa to‘xtatilishi yoki bekor qilinishi mumkin. Jarimalar qo‘llanilishi ehtimol.' },
          disclaimer: 'Kafolatlardan voz kechish',
          disclaimerDesc: "Materiallar 'boricha' taqdim etiladi. Easy IT barcha nazarda tutilgan kafolatlardan voz kechadi.",
          limitations: 'Mas’uliyat cheklovlari',
          limitationsDesc: 'Materiallardan foydalanish natijasidagi zararlar uchun Easy IT javobgar emas, ogohlantirilgan taqdirda ham.',
          law: 'Qo‘llaniladigan qonun',
          lawDesc: 'Shartlar Easy IT faoliyat yuritadigan hudud qonunlari bilan tartibga solinadi. Sud yurisdiksiyasi — shu hudud.',
          contactTitle: 'Kontakt ma’lumotlari',
          contactIntro: 'Ushbu shartlar bo‘yicha savollar bo‘lsa, biz bilan bog‘laning:'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'uz'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;