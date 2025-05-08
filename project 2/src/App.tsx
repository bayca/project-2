import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Products from './components/Products';
import Partnership from './components/Partnership';
import Testimonials from './components/Testimonials';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'DenizKoruma | Akıllı Tekne İzleme';
    
    // Add smooth scrolling support
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Header />
      <Features />
      <ProductShowcase />
      <Products />
      <Partnership />
      <Dashboard />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;