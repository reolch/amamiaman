import GlassBoatPage from '@/pages/GlassBoatPage/GlassBoatPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';
import ParallaxBanner from '@/components/common/ParallaxBanner/ParallaxBanner';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: '奄美大島グラスボート｜濡れずに海中散歩【料金・予約】',
  description: '奄美大島瀬戸内町でグラスボート体験。大人2,500円〜、所要約40分。服のままサンゴ礁や熱帯魚を観察できます。小さなお子様連れにも人気。当日予約OK。',
  path: '/glassboat',
  image: {
    url: '/assets/images/pages/グラスボート/top.webp',
    alt: '奄美大島でのグラスボート観光の様子',
  },
  keywords: ['奄美大島 グラスボート', '奄美 グラスボート', 'グラスボート 体験', '奄美大島 子連れ'],
});

export default function GlassBoat() {
  return (
    <>
      <ParallaxBanner
        src="/assets/images/pages/グラスボート/top.webp"
        alt="奄美大島でのグラスボート観光の様子"
        title="グラスボート観光"
        subtitle="濡れずに楽しむ奄美の海中世界"
      />
      <PageWrapper>
        <GlassBoatPage />
      </PageWrapper>
      <ServiceStructuredData
        name="グラスボート観光"
        description="服のまま海中世界を楽しめるグラスボートツアー。サンゴ礁や熱帯魚を間近で観察できます。"
        providerName="ヤマハタマリンサービスあまん"
        offers={[
          { price: '2500', priceCurrency: 'JPY' },
        ]}
      />
    </>
  );
}
