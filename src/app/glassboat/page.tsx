import GlassBoatPage from '@/pages/GlassBoatPage/GlassBoatPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'グラスボート観光 | あまみあまん - 奄美大島',
  description: '奄美大島の美しい海中世界をグラスボートで観光できます。濡れることなく海中の美しいサンゴや魚たちを観察いただけます。',
  keywords: '奄美大島, グラスボート, 観光, マリンアクティビティ, あまみあまん, サンゴ, 海中観察',
  openGraph: {
    title: 'グラスボート観光 | あまみあまん - 奄美大島',
    description: '奄美大島の美しい海中世界をグラスボートで観光できます。濡れることなく海中の美しいサンゴや魚たちを観察いただけます。',
    url: 'https://amamiaman.com/glassboat',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/グラスボート/top.jpg',
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
    images: ['/assets/images/pages/グラスボート/top.jpg'],
  },
};

export default function GlassBoat() {
  return <GlassBoatPage />;
}