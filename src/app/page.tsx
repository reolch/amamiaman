import { Metadata } from 'next'
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import AboutSection from '@/components/Section/AboutSection/AboutSection';
import ServiceSection from '@/components/Section/ServiceSection/ServiceSection';
import AccessSection from '@/components/Section/AccessSection/AccessSection';
import NewsSection from '@/components/Section/NewsSection/NewsSection';
import WaveDivider from '@/components/common/WaveDivider/WaveDivider';
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

      {/* ヒーロー → アバウトセクション */}
      <WaveDivider fillColor="#f8fafc" bgColor="transparent" />
      <AboutSection />

      {/* アバウト → サービスセクション */}
      <WaveDivider fillColor="#f8fafc" bgColor="#f0f9ff" flip />
      <ServiceSection />

      {/* サービス → アクセスセクション */}
      <WaveDivider fillColor="#ffffff" bgColor="#f1f5f9" />
      <AccessSection />

      {/* アクセス → ニュースセクション */}
      <WaveDivider fillColor="#ffffff" bgColor="#ffffff" flip />
      <NewsSection />
    </>
  );
}
