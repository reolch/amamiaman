import { Metadata } from 'next'
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import AboutSection from '@/components/Section/AboutSection/AboutSection';
import ServiceSection from '@/components/Section/ServiceSection/ServiceSection';
import AccessSection from '@/components/Section/AccessSection/AccessSection';
import NewsSection from '@/components/Section/NewsSection/NewsSection';

export const metadata: Metadata = {
  title: 'ヤマハタマリンサービス｜奄美大島瀬戸内町のダイビング・カヤック・宿泊',
  description: 'ヤマハタマリンサービスは、鹿児島県奄美大島の瀬戸内町でダイビング、シーカヤック、シュノーケリング等のマリンスポーツと宿泊施設を提供します。別名「マリンサービスあまん」としても親しまれています。',
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
