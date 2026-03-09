import GlassBoatPage from '@/pages/GlassBoatPage/GlassBoatPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';

export const metadata: Metadata = createPageMetadata({
  title: 'グラスボート観光 | ヤマハタマリンサービスあまん - 奄美大島',
  description: 'ヤマハタマリンサービスあまんで奄美大島の美しい海中世界をグラスボートで観光できます。濡れることなく海中の美しいサンゴや魚たちを観察いただけます。',
  path: '/glassboat',
  image: {
    url: '/assets/images/pages/グラスボート/top.webp',
    alt: '奄美大島でのグラスボート観光の様子',
  },
});

export default function GlassBoat() {
  return (
    <>
      <GlassBoatPage />
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
