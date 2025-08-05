import SeaKayakPage from '@/pages/SeaKayakPage/SeakayakPage';
import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'シーカヤック体験 | あまみあまん - 奄美大島',
  description: 'あまんで加計呂麻島カヤック体験を楽しめます。奄美大島からアクセスし、透明度抜群の海でマングローブや美しい海岸線を巡るツアーをご用意しています。',
  openGraph: {
    title: 'シーカヤック体験 | あまみあまん - 奄美大島',
    description: 'あまんで加計呂麻島カヤック体験を楽しめます。奄美大島からアクセスし、透明度抜群の海でマングローブや美しい海岸線を巡るツアーをご用意しています。',
    url: 'https://www.marine-services-aman.com/seaKayak',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/シーカヤック/top.webp',
        width: 1200,
        height: 630,
        alt: '奄美大島でのシーカヤック体験の様子',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'シーカヤック体験 | あまみあまん - 奄美大島',
    description: 'あまんで加計呂麻島カヤック体験を楽しめます。奄美大島からアクセスし、透明度抜群の海でマングローブや美しい海岸線を巡るツアーをご用意しています。',
    images: ['/assets/images/pages/シーカヤック/top.webp'],
  },
};

export default function SeaKayak() {
  return (
    <>
      <SeaKayakPage />
      <ServiceStructuredData
        name="シーカヤック体験"
        description="加計呂麻島でのシーカヤックツアー。マングローブの森や美しい海岸線を巡ります。"
        providerName="あまみあまん"
        offers={[
          { price: '10000', priceCurrency: 'JPY' },
        ]}
      />
    </>
  );
}