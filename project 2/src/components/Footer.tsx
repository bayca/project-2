import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Anchor } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Anchor className="h-8 w-8 text-cyan-400 mr-2" />
              <span className="text-white font-bold text-xl">DenizKoruma</span>
            </div>
            <p className="text-blue-100 mb-6">
              Tekneniz için kapsamlı izleme ve güvenlik çözümleri. 
              İster teknede olun ister uzakta, içiniz rahat olsun.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <FooterLink href="#home">Ana Sayfa</FooterLink>
              <FooterLink href="#features">Özellikler</FooterLink>
              <FooterLink href="#products">Ürünler</FooterLink>
              <FooterLink href="#testimonials">Referanslar</FooterLink>
              <FooterLink href="#contact">İletişim</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Ürünler</h4>
            <ul className="space-y-3">
              <FooterLink href="#products">Temel İzleme</FooterLink>
              <FooterLink href="#products">Pro İzleme</FooterLink>
              <FooterLink href="#products">Elite Paket</FooterLink>
              <FooterLink href="#products">Filo Yönetimi</FooterLink>
              <FooterLink href="#contact">Özel Çözümler</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">İletişim</h4>
            <address className="not-italic text-blue-100 space-y-3">
              <p>Marina Caddesi No:100</p>
              <p>İstanbul, Türkiye</p>
              <p>info@denizkoruma.com</p>
              <p>+90 (850) 555 7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} DenizKoruma. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
              <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link href={href} className="text-blue-100 hover:text-cyan-300 transition-colors">
      {children}
    </Link>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a
    href="#"
    className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors"
  >
    {icon}
  </a>
);

export default Footer;