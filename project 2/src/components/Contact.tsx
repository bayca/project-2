import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mesajınız için teşekkürler! En kısa sürede size geri dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Bize Ulaşın
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              İzleme sistemlerimiz hakkında sorularınız mı var? Teknenizi nasıl
              koruyabileceğimiz hakkında bilgi almak için bugün bize ulaşın.
            </p>

            <div className="space-y-8">
              <ContactInfo
                icon={<Phone className="h-6 w-6 text-cyan-500" />}
                title="Bizi Arayın"
                details={['+90 (850) 555 7890', 'Pzt-Cum 09:00-18:00']}
              />
              
              <ContactInfo
                icon={<Mail className="h-6 w-6 text-cyan-500" />}
                title="E-posta Gönderin"
                details={['info@denizkoruma.com', 'destek@denizkoruma.com']}
              />
              
              <ContactInfo
                icon={<MapPin className="h-6 w-6 text-cyan-500" />}
                title="Bizi Ziyaret Edin"
                details={['Marina Caddesi No:100', 'İstanbul, Türkiye']}
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Mesaj Gönderin</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  >
                    <option value="">Konu seçin</option>
                    <option value="Sales">Satış Bilgisi</option>
                    <option value="Support">Teknik Destek</option>
                    <option value="Installation">Kurulum</option>
                    <option value="Other">Diğer</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => (
  <div className="flex items-start">
    <div className="p-3 bg-white shadow-md rounded-lg mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg text-blue-900 mb-1">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-slate-600">{detail}</p>
      ))}
    </div>
  </div>
);

export default Contact;