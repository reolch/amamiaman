import { Metadata } from 'next'
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import AboutSection from '@/components/Section/AboutSection/AboutSection';
import ServiceSection from '@/components/Section/ServiceSection/ServiceSection';
import AccessSection from '@/components/Section/AccessSection/AccessSection';
import NewsSection from '@/components/Section/NewsSection/NewsSection';

export const metadata: Metadata = {
  title: 'ホーム | あまみあまん（ヤマハタマリンサービス） - 奄美大島のマリンスポーツ・宿泊施設',
  description: 'あまみあまん（ヤマハタマリンサービス）のホームページ。奄美大島でシュノーケリング、シーカヤック、グラスボートのマリンアクティビティと宿泊施設を提供する総合マリンリゾートです。',
  keywords: 'あまみあまん, ヤマハタマリンサービス, やまはたまりんさーびす, マリンサービスあまん, まりんさーびすあまん, 奄美大島, マリンスポーツ, 宿泊施設, ホーム',
}

export default function HomePage() {
  return (
    <>
      {/* SEO用の隠しテキスト */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <h1>あまみあまん（ヤマハタマリンサービス）</h1>
        <p>やまはたまりんさーびす まりんさーびすあまん 奄美大島マリンスポーツ 奄美大島宿泊</p>
      </div>
      
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <AccessSection />
      <NewsSection />
    </>
  );
}
