import React from 'react';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import { products, testimonials, stats, historyTimeline, companyValues } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProductsSection products={products.slice(0, 3)} />
      <AboutSection 
        stats={stats} 
        historyTimeline={historyTimeline.slice(0, 3)} 
        companyValues={companyValues} 
      />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
