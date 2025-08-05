import { Metadata } from 'next'
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import AboutSection from '@/components/Section/AboutSection/AboutSection';
import ServiceSection from '@/components/Section/ServiceSection/ServiceSection';
import AccessSection from '@/components/Section/AccessSection/AccessSection';
import NewsSection from '@/components/Section/NewsSection/NewsSection';

export const metadata: Metadata = {
  title: 'あまみあまん｜奄美大島南部のシュノーケル・カヤック・ダイビングと宿泊',
  description: '奄美大島南部でシュノーケリング、シーカヤック、ダイビングなどのマリンスポーツと宿泊施設を提供する「あまみあまん」。美しい海と自然を満喫できるアクティビティをご案内します。',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <AccessSection />
      <NewsSection />
    </>
  );
}
