import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/hero-section';
import FeaturedProjects from '@/components/PortfolioBento';
import ServicesSection from '@/components/SevicesSection';
import SkillsAndTools from '@/components/SkillsAndTools';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/testimonial';
// import PortfolioBento from '@/components/PortfolioBento';
// import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#0E121B]">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <SkillsAndTools />
      <ContactSection />
      <Footer />
    </main>
  );
}
