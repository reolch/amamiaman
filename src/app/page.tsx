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
      {/* Hero(黒)→About(薄青)のフェード */}
      <div
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, #000000, #e8f4f8)',
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
