
import React from 'react';
import Header from '@/components/Header';
import ModernHeroSection from '@/components/ModernHeroSection';
import NextJSFeaturesSection from '@/components/NextJSFeaturesSection';
import NextJSCodeShowcase from '@/components/NextJSCodeShowcase';
import ServicesSection from '@/components/ServicesSection';
import StatisticsSection from '@/components/StatisticsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const NextJSLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ModernHeroSection />
      <NextJSFeaturesSection />
      <NextJSCodeShowcase />
      <ServicesSection />
      <StatisticsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default NextJSLanding;
