import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет отправка формы
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'info@designstudio.ru',
      subdetails: 'hello@designstudio.ru'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Телефон',
      details: '+7 (495) 123-45-67',
      subdetails: '+7 (495) 123-45-68'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Адрес',
      details: 'Москва, ул. Дизайнерская, 1',
      subdetails: '3-й этаж, офис 301'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Режим работы',
      details: 'Пн-Пт: 9:00 - 19:00',
      subdetails: 'Сб-Вс: по договоренности'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Напишите нам или позвоните — мы всегда рады новым вызовам!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="+7 (000) 000-00-00"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="web-design">Веб-дизайн</option>
                    <option value="branding">Брендинг</option>
                    <option value="ui-ux">UI/UX дизайн</option>
                    <option value="graphic">Графический дизайн</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Отправить сообщение
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Контактная информация</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-700">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.subdetails}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Наш офис в Москве</h4>
                <p className="opacity-90">
                  Приходите к нам в гости для личной встречи и обсуждения проекта за чашкой кофе
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Часто задаваемые вопросы</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Сколько времени занимает проект?</h4>
              <p className="text-gray-600 mb-4">
                Время выполнения зависит от сложности проекта. Обычно веб-дизайн занимает 2-4 недели, 
                брендинг — 3-6 недель.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Предоставляете ли вы техническую поддержку?</h4>
              <p className="text-gray-600 mb-4">
                Да, мы предоставляем техническую поддержку в течение 3 месяцев после завершения проекта.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Работаете ли вы с клиентами из других городов?</h4>
              <p className="text-gray-600 mb-4">
                Конечно! Мы успешно работаем с клиентами по всей России и за рубежом в удаленном формате.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Какие гарантии вы предоставляете?</h4>
              <p className="text-gray-600 mb-4">
                Мы гарантируем качество работы и готовы внести правки до полного соответствия вашим требованиям.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;