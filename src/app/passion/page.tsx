import OurPassionPage from '@/pages/OurPassionPage/OurPassionPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '私たちの想い | ヤマハタマリンサービスあまん - 奄美大島',
  description: '奄美大島の美しい自然を大切にし、お客様に最高のマリン体験をお届けしたいというヤマハタマリンサービスあまんの想いをご紹介します。',
  openGraph: {
    title: '私たちの想い | ヤマハタマリンサービスあまん - 奄美大島',
    description: '奄美大島の美しい自然を大切にし、お客様に最高のマリン体験をお届けしたいというヤマハタマリンサービスあまんの想いをご紹介します。',
    url: 'https://www.marine-services-aman.com/passion',
    siteName: 'ヤマハタマリンサービスあまん',
    images: [
      {
        url: '/assets/images/pages/トップページ/スライドショー/slide3.webp',
        width: 1200,
        height: 630,
        alt: '奄美大島の美しい自然とヤマハタマリンサービスあまんのこだわり',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '私たちの想い | ヤマハタマリンサービスあまん - 奄美大島',
    description: '奄美大島の美しい自然を大切にし、お客様に最高のマリン体験をお届けしたいというヤマハタマリンサービスあまんの想いをご紹介します。',
    images: ['/assets/images/pages/トップページ/スライドショー/slide3.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.marine-services-aman.com/passion',
  },
};

export default function Passion() {
  return <OurPassionPage />;
}