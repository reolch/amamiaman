import SeaKayakPage from '@/pages/SeaKayakPage/SeakayakPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';
import ParallaxBanner from '@/components/common/ParallaxBanner/ParallaxBanner';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: '奄美大島シーカヤック｜加計呂麻島ツアー【初心者OK】',
  description: '奄美大島発の加計呂麻島シーカヤックツアー。1人10,000円〜、半日コースあり。初心者ガイド付きで安心。透明度抜群の海と無人ビーチを冒険できます。',
  path: '/seaKayak',
  image: {
    url: '/assets/images/pages/シーカヤック/top.webp',
    alt: '奄美大島でのシーカヤック体験の様子',
  },
  keywords: ['奄美大島 シーカヤック', '奄美大島 カヤック', '加計呂麻島 カヤック', '奄美 カヤック 体験'],
});

export default function SeaKayak() {
  return (
    <>
      <ParallaxBanner
        src="/assets/images/pages/シーカヤック/top.webp"
        alt="奄美大島でのシーカヤック体験の様子"
        title="シーカヤック体験"
        subtitle="加計呂麻島の大自然をカヤックで探検"
      />
      <PageWrapper>
        <SeaKayakPage />
      </PageWrapper>
      <ServiceStructuredData
        name="シーカヤック体験"
        description="加計呂麻島でのシーカヤックツアー。マングローブの森や美しい海岸線を巡ります。"
        providerName="ヤマハタマリンサービスあまん"
        offers={[
          { price: '10000', priceCurrency: 'JPY' },
        ]}
      />
    </>
  );
}
