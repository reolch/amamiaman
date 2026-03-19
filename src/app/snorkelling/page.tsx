import SnorkellingPage from '@/pages/SnorkellingPage/SnorkellingPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';
import ParallaxBanner from '@/components/common/ParallaxBanner/ParallaxBanner';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: '奄美大島シュノーケリング｜ガイド付き体験ツアー【初心者歓迎】',
  description: '奄美大島南部でシュノーケリング体験。8,000円〜、ガイド付きで初心者も安心。サンゴ礁とウミガメに出会えるポイントへご案内。器材レンタル込み。',
  path: '/snorkelling',
  image: {
    url: '/assets/images/pages/トップページ/スライドショー/slide2.webp',
    alt: '奄美大島でのシュノーケリング体験の様子',
  },
  keywords: ['奄美大島 シュノーケリング', '奄美大島 シュノーケル', '奄美 シュノーケリング 体験'],
});

export default function Snorkelling() {
  return (
    <>
      <ParallaxBanner
        src="/assets/images/pages/トップページ/スライドショー/slide2.webp"
        alt="奄美大島でのシュノーケリング体験の様子"
        title="シュノーケリング体験"
        subtitle="奄美の青い海で魚たちとふれあう"
      />
      <PageWrapper>
        <SnorkellingPage />
      </PageWrapper>
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
