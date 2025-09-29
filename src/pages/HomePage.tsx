import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Быстрая реализация',
      description: 'Проекты выполняем в кратчайшие сроки без потери качества'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Высокое качество',
      description: 'Каждый проект проходит строгий контроль качества'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Персональный подход',
      description: 'Индивидуальное решение для каждого клиента'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      company: 'Tech StartUp',
      text: 'Невероятно талантливая команда! Они создали потрясающий дизайн для нашего стартапа.',
      rating: 5
    },
    {
      name: 'Михаил Иванов',
      company: 'Fashion Brand',
      text: 'Профессиональный подход и креативные решения. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Елена Сидорова',
      company: 'Restaurant Chain',
      text: 'Отличная работа с брендингом. Наши продажи выросли на 40% после ребрендинга.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Создаем
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> дизайн </span>
            будущего
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Профессиональные дизайнерские решения для вашего бизнеса. От концепции до реализации.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Посмотреть работы
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ПочемуПочему выбирают насПочему выбирают насПочему выбирают насПочему выбирают насПочему выбирают насПочему выбирают насПочему выбирают нас выбирают нас</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы сочетаем креативность с техническими знаниями для создания выдающихся результатов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентовОтзывы клиентовОтзывы клиентовОтзывы клиентовОтзывы клиентовОтзывы клиентовОтзывы клиентовОтзывы клиентов</h1>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-purple-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-8 opacity-90">
            Давайте обсудим ваши идеи и воплотим их в жизнь
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Начать проект
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;