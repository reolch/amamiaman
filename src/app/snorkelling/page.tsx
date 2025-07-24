import SnorkellingPage from '@/pages/SnorkellingPage/SnorkellingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'シュノーケリング体験 | あまみあまん - 奄美大島',
  description: '奄美大島の美しい海でシュノーケリング体験を楽しめます。初心者から上級者まで安心してお楽しみいただけるガイド付きツアーです。',
  keywords: '奄美大島, シュノーケリング, 体験, マリンアクティビティ, あまみあまん, 海',
  openGraph: {
    title: 'シュノーケリング体験 | あまみあまん - 奄美大島',
    description: '奄美大島の美しい海でシュノーケリング体験を楽しめます。初心者から上級者まで安心してお楽しみいただけるガイド付きツアーです。',
    url: 'https://amamiaman.com/snorkelling',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/トップページ/スライドショー/slide2.jpg',
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
    description: '奄美大島の美しい海でシュノーケリング体験を楽しめます。初心者から上級者まで安心してお楽しみいただけるガイド付きツアーです。',
    images: ['/assets/images/pages/トップページ/スライドショー/slide2.jpg'],
  },
};

export default function Snorkelling() {
  return <SnorkellingPage />;
}