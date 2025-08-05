import GlassBoatPage from '@/pages/GlassBoatPage/GlassBoatPage';
import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'グラスボート観光 | あまみあまん - 奄美大島',
  description: '奄美大島の美しい海中世界をグラスボートで観光できます。濡れることなく海中の美しいサンゴや魚たちを観察いただけます。',
  openGraph: {
    title: 'グラスボート観光 | あまみあまん - 奄美大島',
    description: '奄美大島の美しい海中世界をグラスボートで観光できます。濡れることなく海中の美しいサンゴや魚たちを観察いただけます。',
    url: 'https://www.marine-services-aman.com/glassboat',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/グラスボート/top.webp',
        width: 1200,
        height: 630,
        alt: '奄美大島でのグラスボート観光の様子',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'グラスボート観光 | あまみあまん - 奄美大島',
    description: '奄美大島の美しい海中世界をグラスボートで観光できます。濡れることなく海中の美しいサンゴや魚たちを観察いただけます。',
    images: ['/assets/images/pages/グラスボート/top.webp'],
  },
};

export default function GlassBoat() {
  return (
    <>
      <GlassBoatPage />
      <ServiceStructuredData
        name="グラスボート観光"
        description="服のまま海中世界を楽しめるグラスボートツアー。サンゴ礁や熱帯魚を間近で観察できます。"
        providerName="あまみあまん"
        offers={[
          { price: '2500', priceCurrency: 'JPY' },
        ]}
      />
    </>
  );
}