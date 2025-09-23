import React from 'react';
import { Monitor, Palette, Smartphone, Printer, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'Веб-дизайн',
      description: 'Создаем современные и функциональные веб-сайты',
      features: ['Адаптивный дизайн', 'UX/UI оптимизация', 'Современные технологии', 'SEO-оптимизация'],
      price: 'от 50 000 ₽'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Брендинг',
      description: 'Разрабатываем уникальную визуальную идентичность',
      features: ['Разработка логотипа', 'Фирменный стиль', 'Гайдлайны', 'Брендбук'],
      price: 'от 80 000 ₽'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'UI/UX Дизайн',
      description: 'Проектируем интуитивные пользовательские интерфейсы',
      features: ['Прототипирование', 'Пользовательские сценарии', 'A/B тестирование', 'Анимации'],
      price: 'от 40 000 ₽'
    },
    {
      icon: <Printer className="w-12 h-12" />,
      title: 'Графический дизайн',
      description: 'Создаем эффективные печатные и цифровые материалы',
      features: ['Рекламные материалы', 'Презентации', 'Полиграфия', 'Социальные сети'],
      price: 'от 20 000 ₽'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Консультация',
      description: 'Изучаем ваши потребности и цели проекта'
    },
    {
      step: '02',
      title: 'Концепция',
      description: 'Разрабатываем креативную концепцию и стратегию'
    },
    {
      step: '03',
      title: 'Дизайн',
      description: 'Создаем дизайн-макеты и прототипы'
    },
    {
      step: '04',
      title: 'Реализация',
      description: 'Воплощаем проект в жизнь и передаем клиенту'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Наши услуги</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предлагаем полный спектр дизайнерских услуг для развития вашего бизнеса
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group">
                Узнать подробнее
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600">
              Наш проверенный процесс гарантирует отличный результат
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Получить консультацию
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;