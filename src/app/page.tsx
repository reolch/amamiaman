import { Metadata } from 'next'
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import AboutSection from '@/components/Section/AboutSection/AboutSection';
import ServiceSection from '@/components/Section/ServiceSection/ServiceSection';
import AccessSection from '@/components/Section/AccessSection/AccessSection';
import NewsSection from '@/components/Section/NewsSection/NewsSection';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Hero下の黒帯 */}
      <div
        style={{
          height: '40px',
          background: '#000000',
        }}
        aria-hidden="true"
      />
      <AboutSection />
      <ServiceSection />
      <AccessSection />
      <NewsSection />
    </>
  );
}
