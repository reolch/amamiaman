import SeaKayakPage from '@/pages/SeaKayakPage/SeakayakPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'シーカヤック体験 | あまみあまん - 奄美大島',
  description: '奄美大島の透明度抜群の海でシーカヤック体験を楽しめます。マングローブや美しい海岸線を巡るツアーをご用意しています。',
  keywords: '奄美大島, シーカヤック, 体験, マリンアクティビティ, あまみあまん, マングローブ',
  openGraph: {
    title: 'シーカヤック体験 | あまみあまん - 奄美大島',
    description: '奄美大島の透明度抜群の海でシーカヤック体験を楽しめます。マングローブや美しい海岸線を巡るツアーをご用意しています。',
    url: 'https://amamiaman.com/seaKayak',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/シーカヤック/top.JPG',
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
    description: '奄美大島の透明度抜群の海でシーカヤック体験を楽しめます。マングローブや美しい海岸線を巡るツアーをご用意しています。',
    images: ['/assets/images/pages/シーカヤック/top.JPG'],
  },
};

export default function SeaKayak() {
  return <SeaKayakPage />;
}