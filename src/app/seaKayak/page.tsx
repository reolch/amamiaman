import SeaKayakPage from '@/pages/SeaKayakPage/SeakayakPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';

export const metadata: Metadata = createPageMetadata({
  title: 'シーカヤック体験 | ヤマハタマリンサービスあまん - 奄美大島',
  description: 'ヤマハタマリンサービスあまんで加計呂麻島カヤック体験を楽しめます。奄美大島からアクセスし、透明度抜群の海でマングローブや美しい海岸線を巡るツアーをご用意しています。',
  path: '/seaKayak',
  image: {
    url: '/assets/images/pages/シーカヤック/top.webp',
    alt: '奄美大島でのシーカヤック体験の様子',
  },
});

export default function SeaKayak() {
  return (
    <>
      <SeaKayakPage />
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
