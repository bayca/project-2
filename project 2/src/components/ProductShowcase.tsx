import React from 'react';
import { Shield, Wifi, Anchor, Activity, Cpu, Navigation, Smartphone, Cloud } from 'lucide-react';
import { Link } from './Link';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'DenizKoruma Basic',
      description: 'Hobi tekneleri için temel izleme sistemi',
      image: 'https://images.pexels.com/photos/1007836/pexels-photo-1007836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Akü izleme sistemi',
        'Sintine pompası sensörleri',
        'Temel GPS takibi',
        'Mobil uygulama erişimi',
        'E-posta bildirimleri'
      ],
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 2,
      name: 'DenizKoruma Pro',
      description: 'Ciddi tekne sahipleri için gelişmiş izleme',
      image: 'https://images.pexels.com/photos/2582159/pexels-photo-2582159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Tüm Basic özellikleri',
        'Motor teşhisi',
        'Gelişmiş güvenlik sistemi',
        'Uzaktan sistem kontrolü',
        'Hava durumu uyarıları'
      ],
      icon: <Cpu className="h-6 w-6" />
    },
    {
      id: 3,
      name: 'DenizKoruma Elite',
      description: 'Lüks tekneler için premium çözüm',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Tüm Pro özellikleri',
        'Çoklu kullanıcı erişimi',
        'Kamera entegrasyonu',
        'Uydu bağlantısı',
        'Özel kurulum'
      ],
      icon: <Anchor className="h-6 w-6" />
    },
    {
      id: 4,
      name: 'DenizKoruma Mobil',
      description: 'Küçük tekneler için gelişmiş mobil izleme çözümü',
      image: 'https://images.pexels.com/photos/673902/pexels-photo-673902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Kompakt izleme ünitesi',
        'Güneş enerjisi şarj özelliği',
        'Kablosuz sensörler',
        'Gerçek zamanlı mobil uyarılar',
        'Kolay kendi kendine kurulum'
      ],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: 5,
      name: 'DenizKoruma Cloud',
      description: 'Kurumsal seviye filo izleme ve yönetim sistemi',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Filo genelinde izleme',
        'Gelişmiş analiz paneli',
        'Bakım programlama',
        'API entegrasyonu',
        'Özel raporlama araçları'
      ],
      icon: <Cloud className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Ürün Yelpazemiz
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Teknede olun ya da uzakta, teknenizi korumak ve içinizin rahat etmesi için
            tasarlanmış deniz izleme çözümlerimizi keşfedin.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 hidden lg:block">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 rounded-full">
                        <Navigation className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Güvenilen</p>
                        <p className="font-bold text-slate-800">1000+ Tekne</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                    {product.name}
                  </h3>
                </div>

                <p className="text-lg text-slate-600 mb-6">
                  {product.description}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 mb-8">
                  <h4 className="font-semibold text-blue-900 mb-4">Temel Özellikler:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <Activity className="h-5 w-5 text-cyan-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 text-center font-semibold"
                  >
                    Demo İste
                  </Link>
                  <Link
                    href="#products"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-900 px-8 py-3 rounded-lg transition-colors duration-300 text-center font-semibold"
                  >
                    Fiyatları Gör
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;