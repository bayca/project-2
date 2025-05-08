import React from 'react';
import { Shield, Battery, Droplet, Thermometer, Anchor, Navigation, File as WiFi, Cpu } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Güçlü Kontrol Paneli Elinizin Altında
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Sezgisel kontrol panelimiz, tüm tekne sistemlerinin kontrolünü ve izlenmesini sağlar. 
              Kritik bilgilere telefonunuzdan, tabletinizden veya bilgisayarınızdan istediğiniz zaman, 
              istediğiniz yerden erişin.
            </p>
            
            <div className="space-y-6">
              <Feature 
                icon={<Battery className="h-6 w-6 text-cyan-500" />}
                title="Gerçek Zamanlı İzleme"
                description="Tüm sensörlerden ve sistemlerden anlık veri güncellemeleri"
              />
              
              <Feature 
                icon={<Shield className="h-6 w-6 text-cyan-500" />}
                title="Akıllı Uyarılar"
                description="Kritik sistem değişiklikleri için özelleştirilebilir bildirimler"
              />
              
              <Feature 
                icon={<Navigation className="h-6 w-6 text-cyan-500" />}
                title="Konum Takibi"
                description="Detaylı hareket geçmişi ile teknenizin konumunu takip edin"
              />
              
              <Feature 
                icon={<WiFi className="h-6 w-6 text-cyan-500" />}
                title="Uzaktan Erişim"
                description="Dünyanın her yerinden sistemlerinizi kontrol edin ve izleyin"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="bg-blue-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Anchor className="h-6 w-6 text-cyan-400 mr-2" />
                  <span className="font-bold">DenizKoruma Paneli</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                  <span className="text-sm">Bağlı</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <DashboardCard 
                    icon={<Battery className="h-5 w-5 text-green-500" />}
                    title="Ana Akü"
                    value="12.6V"
                    status="good"
                  />
                  
                  <DashboardCard 
                    icon={<Battery className="h-5 w-5 text-green-500" />}
                    title="Motor Aküsü"
                    value="12.8V"
                    status="good"
                  />
                  
                  <DashboardCard 
                    icon={<Droplet className="h-5 w-5 text-green-500" />}
                    title="Sintine Pompası"
                    value="Pasif"
                    status="good"
                  />
                  
                  <DashboardCard 
                    icon={<Shield className="h-5 w-5 text-green-500" />}
                    title="Güvenlik Sistemi"
                    value="Aktif"
                    status="good"
                  />
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Thermometer className="h-5 w-5 mr-2 text-blue-900" />
                    Sıcaklık Değerleri
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Kabin</span>
                      <span className="font-medium">21°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Motor Bölmesi</span>
                      <span className="font-medium">24°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Dış Ortam</span>
                      <span className="font-medium">18°C</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Cpu className="h-5 w-5 mr-2 text-blue-900" />
                    Sistem Durumu
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-slate-700">Tüm sistemler normal</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-slate-700">Son kontrol: 2 dakika önce</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-cyan-100 max-w-xs hidden md:block">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Navigation className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Konum</h3>
                  <p className="text-sm text-slate-600">İstanbul Marina</p>
                  <p className="text-xs text-blue-600 mt-1">Haritada göster →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="p-2 bg-blue-50 rounded-lg mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg text-blue-900 mb-1">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: 'good' | 'warning' | 'alert';
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, value, status }) => {
  const statusColors = {
    good: 'bg-green-50 border-green-100',
    warning: 'bg-yellow-50 border-yellow-100',
    alert: 'bg-red-50 border-red-100',
  };
  
  return (
    <div className={`p-4 rounded-lg border ${statusColors[status]}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-700 font-medium">{title}</span>
        {icon}
      </div>
      <div className="font-bold text-lg">{value}</div>
    </div>
  );
};

export default Dashboard;