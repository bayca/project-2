import React from 'react';
import { Battery, Droplet, Thermometer, Cpu, MapPin, Bell, Shield, Wifi } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Eksiksiz Tekne İzleme
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Kapsamlı izleme sistemimiz, teknede olun ya da olmayın, teknenizin tüm sistemleri
            ve güvenliği hakkında tam görünürlük sağlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Battery className="h-8 w-8 text-cyan-600" />}
            title="Akü İzleme"
            description="Tüm akülerin voltaj, akım ve sıcaklığını takip edin. Seviyeler eşik değerlerin altına düştüğünde uyarı alın."
          />
          
          <FeatureCard
            icon={<Droplet className="h-8 w-8 text-cyan-600" />}
            title="Sintine Sistemi"
            description="Sintine pompası aktivitesini ve su seviyelerini hassas sensörler ve otomatik uyarılarla izleyin."
          />
          
          <FeatureCard
            icon={<Thermometer className="h-8 w-8 text-cyan-600" />}
            title="Sıcaklık Kontrolü"
            description="Aşırı ısınmayı önlemek için ortam, motor ve soğutma sıcaklıklarını takip edin."
          />
          
          <FeatureCard
            icon={<Cpu className="h-8 w-8 text-cyan-600" />}
            title="Motor Teşhisi"
            description="Gerçek zamanlı motor performans izleme ile detaylı teşhis ve erken uyarılar alın."
          />
          
          <FeatureCard
            icon={<MapPin className="h-8 w-8 text-cyan-600" />}
            title="GPS Takibi"
            description="Teknenizin konumunu takip edin ve belirlenen alanların dışına çıktığında coğrafi sınır uyarıları alın."
          />
          
          <FeatureCard
            icon={<Bell className="h-8 w-8 text-cyan-600" />}
            title="Akıllı Bildirimler"
            description="Kritik sistem değişiklikleri veya güvenlik endişeleri için uygulama, SMS veya e-posta yoluyla özelleştirilebilir uyarılar."
          />
          
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-cyan-600" />}
            title="Güvenlik Sistemi"
            description="Hareket sensörleri, kapı/kaportalar için sensörler ve tam güvenlik kapsamı için kamera entegrasyonu."
          />
          
          <FeatureCard
            icon={<Wifi className="h-8 w-8 text-cyan-600" />}
            title="Uzaktan Erişim"
            description="Dünyanın herhangi bir yerinden sistemleri uzaktan kontrol edin, durumu kontrol edin ve teşhis alın."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300">
    <div className="bg-blue-50 p-3 inline-block rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

export default Features;