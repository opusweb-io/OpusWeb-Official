
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import PageTurnWrapper from '@/components/fx/PageTurnWrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PageTurnWrapper>
          <HeroSection />
        </PageTurnWrapper>
        <PageTurnWrapper>
          <ServicesSection />
        </PageTurnWrapper>
        <PageTurnWrapper>
          <AboutSection />
        </PageTurnWrapper>
        <PageTurnWrapper>
          <ContactSection />
        </PageTurnWrapper>
      </main>
      <Footer />
    </div>
  );
}
