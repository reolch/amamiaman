import SnorkellingPage from '@/pages/SnorkellingPage/SnorkellingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'シュノーケリング体験 | あまみあまん - 奄美大島',
  description: 'あまんで奄美大島シュノーケル体験を楽しめます。奄美大島南部の美しい海で初心者から上級者まで安心のガイド付きツアーです。',
  keywords: '奄美大島, シュノーケリング, 体験, マリンアクティビティ, あまみあまん, 海',
  openGraph: {
    title: 'シュノーケリング体験 | あまみあまん - 奄美大島',
    description: 'あまんで奄美大島シュノーケル体験を楽しめます。奄美大島南部の美しい海で初心者から上級者まで安心のガイド付きツアーです。',
    url: 'https://www.marine-services-aman.com/snorkelling',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/トップページ/スライドショー/slide2.webp',
        width: 1200,
        height: 630,
        alt: '奄美大島でのシュノーケリング体験の様子',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'シュノーケリング体験 | あまみあまん - 奄美大島',
    description: 'あまんで奄美大島シュノーケル体験を楽しめます。奄美大島南部の美しい海で初心者から上級者まで安心のガイド付きツアーです。',
    images: ['/assets/images/pages/トップページ/スライドショー/slide2.webp'],
  },
};

export default function Snorkelling() {
  return <SnorkellingPage />;
}