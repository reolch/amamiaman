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

      {/* ヒーロー（黒）→ アバウト（#f8fafc グラデ開始色） */}
      <WaveDivider fillColor="#f8fafc" bgColor="#000000" />
      <AboutSection />

      {/* アバウト（#f0f9ff グラデ終了色）→ サービス（#f8fafc グラデ開始色） */}
      <WaveDivider fillColor="#f8fafc" bgColor="#f0f9ff" flip />
      <ServiceSection />

      {/* サービス（#f1f5f9 グラデ終了色）→ アクセス（#ffffff） */}
      <WaveDivider fillColor="#ffffff" bgColor="#f1f5f9" />
      <AccessSection />

      {/* アクセスとニュースは両方 #ffffff なのでディバイダー不要 */}
      <NewsSection />
    </>
  );
}
