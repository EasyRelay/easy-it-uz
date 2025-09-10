import { Globe, Bot, Smartphone, Cloud, Users, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern and responsive websites built with cutting-edge technologies for optimal performance and user experience.'
    },
    {
      icon: Bot,
      title: 'Bot Development',
      description: 'Custom Telegram, Discord, and specialized bots to automate your business processes and enhance productivity.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps that deliver exceptional user experiences on both iOS and Android devices.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance and strategic planning to help you make informed technology decisions for your business.'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management solutions to ensure your data is secure and accessible.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;