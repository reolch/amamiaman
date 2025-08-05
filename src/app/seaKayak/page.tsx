import SeaKayakPage from '@/pages/SeaKayakPage/SeakayakPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'シーカヤック体験 | あまみあまん - 奄美大島',
  description: 'あまんで加計呂麻島カヤック体験を楽しめます。奄美大島からアクセスし、透明度抜群の海でマングローブや美しい海岸線を巡るツアーをご用意しています。',
  keywords: '加計呂麻島 カヤック, 奄美大島, シーカヤック, 体験, マリンアクティビティ, あまん, マングローブ',
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
  return <SeaKayakPage />;
}