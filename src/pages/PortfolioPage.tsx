import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Все проекты' },
    { id: 'web', name: 'Веб-дизайн' },
    { id: 'branding', name: 'Брендинг' },
    { id: 'ui-ux', name: 'UI/UX' },
    { id: 'graphic', name: 'Графический дизайн' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Мобильное приложение для фитнеса',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      description: 'Современный UI/UX дизайн для фитнес приложения'
    },
    {
      id: 2,
      title: 'Корпоративный сайт технологической компании',
      category: 'web',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      description: 'Адаптивный веб-сайт с современным дизайном'
    },
    {
      id: 3,
      title: 'Ребрендинг ресторана',
      category: 'branding',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      description: 'Полный ребрендинг включая логотип и фирменный стиль'
    },
    {
      id: 4,
      title: 'E-commerce платформа',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      description: 'Интернет-магазин с удобной навигацией'
    },
    {
      id: 5,
      title: 'Брендинг стартапа',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      description: 'Создание бренда с нуля для IT стартапа'
    },
    {
      id: 6,
      title: 'Дизайн мобильного банкинга',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: 'Интуитивный интерфейс банковского приложения'
    },
    {
      id: 7,
      title: 'Рекламные материалы',
      category: 'graphic',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Комплект печатной рекламной продукции'
    },
    {
      id: 8,
      title: 'Корпоративная презентация',
      category: 'graphic',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      description: 'Стильная презентация для крупной корпорации'
    },
    {
      id: 9,
      title: 'Лендинг для продукта',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      description: 'Конверсионная посадочная страница'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Наши работы</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Изучите наши последние проекты и убедитесь в качестве наших решений
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
            Показать больше проектов
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;