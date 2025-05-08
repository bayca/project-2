import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, LifeBuoy } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Anchor className="h-8 w-8 text-cyan-400 mr-2" />
            <span className="text-white font-bold text-xl">DenizKoruma</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#home" className="text-white hover:text-cyan-300">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white hover:text-cyan-300">
                  Özellikler
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white hover:text-cyan-300">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="#partnership" className="text-white hover:text-cyan-300">
                  İş Ortaklığı
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-white hover:text-cyan-300">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-cyan-300">
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors flex items-center"
            >
              <LifeBuoy className="w-4 h-4 mr-2" />
              Destek Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900/95 shadow-lg">
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#home" 
                  className="text-white hover:text-cyan-300 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link 
                  href="#features" 
                  className="text-white hover:text-cyan-300 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Özellikler
                </Link>
              </li>
              <li>
                <Link 
                  href="#products" 
                  className="text-white hover:text-cyan-300 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link 
                  href="#partnership" 
                  className="text-white hover:text-cyan-300 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İş Ortaklığı
                </Link>
              </li>
              <li>
                <Link 
                  href="#testimonials" 
                  className="text-white hover:text-cyan-300 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Referanslar
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-white hover:text-cyan-300 block py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="#contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-md transition-colors flex items-center justify-center w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LifeBuoy className="w-4 h-4 mr-2" />
                  Destek Al
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;