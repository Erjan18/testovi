import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Bean as Behance, Dribbble, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DesignStudio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Создаем уникальные дизайнерские решения для вашего бизнеса
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors">
                <Behance size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors">
                <Dribbble size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Портфолио</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Веб-дизайн</li>
              <li>Брендинг</li>
              <li>UI/UX дизайн</li>
              <li>Графический дизайн</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>info@designstudio.ru</p>
              <p>+7 (495) 123-45-67</p>
              <p>Москва, ул. Дизайнерская, 1</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DesignStudio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;