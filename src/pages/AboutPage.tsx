import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '200+', label: 'Довольных клиентов' },
    { icon: <Award className="w-8 h-8" />, number: '500+', label: 'Завершенных проектов' },
    { icon: <Clock className="w-8 h-8" />, number: '5+', label: 'Лет опыта' },
    { icon: <Heart className="w-8 h-8" />, number: '100%', label: 'Увлеченности работой' }
  ];

  const team = [
    {
      name: 'Анна Дизайнова',
      position: 'Арт-директор',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      description: 'Более 8 лет в дизайне, специализируется на брендинге и веб-дизайне'
    },
    {
      name: 'Михаил Креативов',
      position: 'UI/UX Дизайнер',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      description: 'Эксперт по пользовательскому опыту с опытом работы в крупных IT-компаниях'
    },
    {
      name: 'Елена Графикова',
      position: 'Графический дизайнер',
      image: 'https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg',
      description: 'Специалист по печатному дизайну и визуальным коммуникациям'
    }
  ];

  const values = [
    {
      title: 'Творчество',
      description: 'Мы верим в силу креативных решений и нестандартного подхода к каждому проекту'
    },
    {
      title: 'Качество',
      description: 'Стремимся к совершенству в каждой детали и никогда не идем на компромиссы'
    },
    {
      title: 'Партнерство',
      description: 'Работаем как ваша команда, понимая бизнес-цели и помогая их достигать'
    },
    {
      title: 'Инновации',
      description: 'Следим за трендами и используем передовые технологии в своей работе'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">О нашей студии</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы — команда талантливых дизайнеров, которые создают выдающиеся визуальные решения 
            для брендов по всему миру. Наша цель — помочь вашему бизнесу выделиться на рынке 
            через качественный дизайн.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full text-purple-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Наша миссия</h2>
            <p className="text-xl leading-relaxed opacity-90">
              Создавать дизайн, который не только красив, но и работает на результат. 
              Мы помогаем брендам находить свой уникальный визуальный язык и эффективно 
              коммуницировать с аудиторией через продуманные дизайнерские решения.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">
              Профессионалы, которые воплощают ваши идеи в жизнь
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600">
              Принципы, которые направляют нашу работу
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;