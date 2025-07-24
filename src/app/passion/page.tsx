import OurPassionPage from '@/pages/OurPassionPage/OurPassionPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '私たちの想い | あまみあまん - 奄美大島',
  description: '奄美大島の美しい自然を大切にし、お客様に最高のマリン体験をお届けしたいという私たちの想いをご紹介します。',
  keywords: '奄美大島, 想い, こだわり, あまみあまん, マリンアクティビティ, 自然保護',
  openGraph: {
    title: '私たちの想い | あまみあまん - 奄美大島',
    description: '奄美大島の美しい自然を大切にし、お客様に最高のマリン体験をお届けしたいという私たちの想いをご紹介します。',
    url: 'https://amamiaman.com/passion',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/トップページ/スライドショー/slide3.jpg',
        width: 1200,
        height: 630,
        alt: '奄美大島の美しい自然とあまみあまんのこだわり',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '私たちの想い | あまみあまん - 奄美大島',
    description: '奄美大島の美しい自然を大切にし、お客様に最高のマリン体験をお届けしたいという私たちの想いをご紹介します。',
    images: ['/assets/images/pages/トップページ/スライドショー/slide3.jpg'],
  },
};

export default function Passion() {
  return <OurPassionPage />;
}