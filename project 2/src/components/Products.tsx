import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Link } from './Link';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: Array<{
    name: string;
    included: boolean;
  }>;
  highlightedFeature?: string;
  buttonText: string;
  isPopular?: boolean;
}

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'fleet'>('individual');

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Temel',
      price: '2.999',
      description: 'Hobi tekneleri için temel izleme',
      features: [
        { name: 'Akü İzleme', included: true },
        { name: 'Sintine Pompa Durumu', included: true },
        { name: 'GPS Takibi', included: true },
        { name: 'Mobil Uygulama Erişimi', included: true },
        { name: 'Güvenlik Uyarıları', included: true },
        { name: 'Uzaktan Sistem Kontrolü', included: false },
        { name: 'Motor Teşhisi', included: false },
        { name: 'Çoklu Kullanıcı Erişimi', included: false },
      ],
      buttonText: 'Başla',
    },
    {
      name: 'Pro',
      price: '5.999',
      description: 'Ciddi tekne sahipleri için tam izleme çözümü',
      features: [
        { name: 'Akü İzleme', included: true },
        { name: 'Sintine Pompa Durumu', included: true },
        { name: 'GPS Takibi', included: true },
        { name: 'Mobil Uygulama Erişimi', included: true },
        { name: 'Güvenlik Uyarıları', included: true },
        { name: 'Uzaktan Sistem Kontrolü', included: true },
        { name: 'Motor Teşhisi', included: true },
        { name: 'Çoklu Kullanıcı Erişimi', included: false },
      ],
      highlightedFeature: 'Motor Teşhisi Dahil',
      buttonText: 'Pro\'ya Geç',
      isPopular: true,
    },
    {
      name: 'Elite',
      price: '9.999',
      description: 'Yat sahipleri ve charter işletmeleri için premium çözüm',
      features: [
        { name: 'Akü İzleme', included: true },
        { name: 'Sintine Pompa Durumu', included: true },
        { name: 'GPS Takibi', included: true },
        { name: 'Mobil Uygulama Erişimi', included: true },
        { name: 'Güvenlik Uyarıları', included: true },
        { name: 'Uzaktan Sistem Kontrolü', included: true },
        { name: 'Motor Teşhisi', included: true },
        { name: 'Çoklu Kullanıcı Erişimi', included: true },
      ],
      highlightedFeature: 'Tüm Özellikler Dahil',
      buttonText: 'Elite\'e Geç',
    },
  ];

  const fleetPlans: PricingPlan[] = [
    {
      name: 'Filo Temel',
      price: '9.999',
      description: 'Küçük filolar için izleme çözümü (5 tekneye kadar)',
      features: [
        { name: 'Filo Paneli', included: true },
        { name: 'Temel Tekne İzleme', included: true },
        { name: 'Konum Takibi', included: true },
        { name: 'Bakım Programlama', included: true },
        { name: 'Kullanıcı Yönetimi', included: true },
        { name: 'Gelişmiş Analitik', included: false },
        { name: 'API Entegrasyonu', included: false },
        { name: 'Özel Markalama', included: false },
      ],
      buttonText: 'Başla',
    },
    {
      name: 'Filo Pro',
      price: '24.999',
      description: 'Tam filo yönetimi (15 tekneye kadar)',
      features: [
        { name: 'Filo Paneli', included: true },
        { name: 'Temel Tekne İzleme', included: true },
        { name: 'Konum Takibi', included: true },
        { name: 'Bakım Programlama', included: true },
        { name: 'Kullanıcı Yönetimi', included: true },
        { name: 'Gelişmiş Analitik', included: true },
        { name: 'API Entegrasyonu', included: true },
        { name: 'Özel Markalama', included: false },
      ],
      highlightedFeature: 'API Entegrasyonu Dahil',
      buttonText: 'Pro\'ya Geç',
      isPopular: true,
    },
    {
      name: 'Filo Kurumsal',
      price: 'Özel',
      description: 'Büyük filolar için kurumsal çözüm (sınırsız tekne)',
      features: [
        { name: 'Filo Paneli', included: true },
        { name: 'Temel Tekne İzleme', included: true },
        { name: 'Konum Takibi', included: true },
        { name: 'Bakım Programlama', included: true },
        { name: 'Kullanıcı Yönetimi', included: true },
        { name: 'Gelişmiş Analitik', included: true },
        { name: 'API Entegrasyonu', included: true },
        { name: 'Özel Markalama', included: true },
      ],
      highlightedFeature: 'Özel Çözüm',
      buttonText: 'İletişime Geç',
    },
  ];

  const displayedPlans = activeTab === 'individual' ? pricingPlans : fleetPlans;

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            İzleme Çözümünüzü Seçin
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Teknenize en uygun paketi seçin ve denizde içiniz rahat etsin.
          </p>

          <div className="inline-flex p-1 bg-slate-100 rounded-lg">
            <button
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'individual'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-slate-600 hover:text-blue-900'
              } transition-all duration-200`}
              onClick={() => setActiveTab('individual')}
            >
              Bireysel Tekneler
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'fleet'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-slate-600 hover:text-blue-900'
              } transition-all duration-200`}
              onClick={() => setActiveTab('fleet')}
            >
              Filo Yönetimi
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden border ${
                plan.isPopular
                  ? 'border-cyan-500 shadow-lg shadow-cyan-100'
                  : 'border-slate-200 shadow-md'
              } transition-all duration-300 hover:shadow-lg relative`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-white px-4 py-1 text-sm font-semibold">
                  En Popüler
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-900">₺{plan.price}</span>
                  {plan.name !== 'Filo Kurumsal' && (
                    <span className="text-slate-600 ml-1">+ kurulum</span>
                  )}
                </div>

                {plan.highlightedFeature && (
                  <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium mb-6">
                    {plan.highlightedFeature}
                  </div>
                )}

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included ? 'text-slate-700' : 'text-slate-400'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold ${
                    plan.isPopular
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : 'bg-blue-50 hover:bg-blue-100 text-blue-900'
                  } transition-colors duration-200`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;