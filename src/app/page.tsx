import { Metadata } from 'next';
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import AboutSection from '@/components/Section/AboutSection/AboutSection';
import ServiceSection from '@/components/Section/ServiceSection/ServiceSection';
import AccessSection from '@/components/Section/AccessSection/AccessSection';
import NewsSection from '@/components/Section/NewsSection/NewsSection';

export const metadata: Metadata = {
  title: 'ホーム | あまみあまん - 奄美大島',
  description: '奄美大島で楽しむマリンアクティビティと宿泊施設。シュノーケリング、シーカヤック、グラスボートツアーから素泊まり宿まで、奄美の海を満喫できるあまみあまんです。',
  keywords: '奄美大島, マリンアクティビティ, シュノーケリング, シーカヤック, グラスボート, 宿泊施設, 奄美の海, ツアー, あまみあまん',
};

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
