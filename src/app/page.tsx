import { Metadata } from 'next'
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import AboutSection from '@/components/Section/AboutSection/AboutSection';
import ServiceSection from '@/components/Section/ServiceSection/ServiceSection';
import AccessSection from '@/components/Section/AccessSection/AccessSection';
import NewsSection from '@/components/Section/NewsSection/NewsSection';

export const metadata: Metadata = {
  title: 'ホーム | あまみあまん（ヤマハタマリンサービス） - 奄美大島のマリンスポーツ・宿泊施設',
  description: 'あまんは奄美大島シュノーケル、加計呂麻島カヤック、奄美大島南部ダイビング体験を提供するヤマハタマリンサービスの総合マリンリゾートです。',
  keywords: 'あまみあまん, ヤマハタマリンサービス, やまはたまりんさーびす, マリンサービスあまん, まりんさーびすあまん, 奄美大島, マリンスポーツ, 宿泊施設, ホーム',
}

export default function HomePage() {
  return (
    <>
      {/* SEO用の隠しテキスト */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <h1>あまん - 奄美大島シュノーケル・加計呂麻島カヤック・奄美大島南部ダイビング</h1>
        <p>あまんで奄美大島シュノーケル体験、加計呂麻島カヤックツアー、奄美大島南部ダイビングをお楽しみいただけます。ヤマハタマリンサービスあまんで奄美の美しい海を満喜してください。</p>
      </div>
      
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <AccessSection />
      <NewsSection />
    </>
  );
}
