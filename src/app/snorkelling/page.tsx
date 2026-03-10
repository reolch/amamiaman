import SnorkellingPage from '@/pages/SnorkellingPage/SnorkellingPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';

export const metadata: Metadata = createPageMetadata({
  title: 'シュノーケリング体験 | ヤマハタマリンサービスあまん - 奄美大島',
  description: 'ヤマハタマリンサービスあまんで奄美大島シュノーケル体験を楽しめます。奄美大島南部の美しい海で初心者から上級者まで安心のガイド付きツアーです。',
  path: '/snorkelling',
  image: {
    url: '/assets/images/pages/トップページ/スライドショー/slide2.webp',
    alt: '奄美大島でのシュノーケリング体験の様子',
  },
});

export default function Snorkelling() {
  return (
    <>
      <SnorkellingPage />
      <ServiceStructuredData
        name="シュノーケリング体験"
        description="奄美大島南部の美しい海で、初心者から上級者まで楽しめるガイド付きシュノーケリングツアーです。"
        providerName="ヤマハタマリンサービスあまん"
        offers={[
          { price: '8000', priceCurrency: 'JPY' },
        ]}
      />
    </>
  );
}
