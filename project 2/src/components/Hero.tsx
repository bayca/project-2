import React from 'react';
import { Shield, Wifi, Anchor, Activity } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIzMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTYwYzQwIDAgNDAtMTYwIDgwLTE2MHM0MCAxNjAgODAgMTYwIDQwLTE2MCA4MC0xNjAgNDAgMTYwIDgwIDE2MCA0MC0xNjAgODAtMTYwIDQwIDE2MCA4MCAxNjAgNDAtMTYwIDgwLTE2MCA0MCAxNjAgODAgMTYwIDQwLTE2MCA4MC0xNjAgNDAgMTYwIDgwIDE2MCA0MC0xNjAgODAtMTYwIDQwIDE2MCA4MCAxNjAgNDAtMTYwIDgwLTE2MCA0MCAxNjAgODAgMTYwIDQwLTE2MCA4MC0xNjAgNDAgMTYwIDgwIDE2MCA0MC0xNjAgODAtMTYwIDQwIDE2MCA4MCAxNjAgNDAtMTYwIDgwLTE2MCA0MCAxNjAgODAgMTYwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] animate-wave"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center min-h-screen">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Yeni Nesil
              <span className="block text-cyan-400 mt-2">Deniz Teknolojisi</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Teknenizi 7/24 koruyan gelişmiş izleme sistemleri. Gerçek zamanlı bilgiler ve tam kontrol ile deniz teknolojisinin geleceğini deneyimleyin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center shadow-lg shadow-cyan-500/25"
              >
                Çözümleri Keşfet
              </Link>
              <Link
                href="#features"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-lg transition-all duration-300 text-center"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern yat ve gelişmiş izleme sistemleri"
                className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-6 right-0 sm:-right-6 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 max-w-[calc(100%-2rem)] sm:max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Activity className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Canlı İzleme</h3>
                  <p className="text-blue-100 text-sm mt-1">Tüm sistemler optimal seviyede çalışıyor</p>
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-400 text-xs ml-2">Aktif Koruma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;