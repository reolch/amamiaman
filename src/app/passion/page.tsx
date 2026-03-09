import OurPassionPage from '@/pages/OurPassionPage/OurPassionPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';

export const metadata: Metadata = createPageMetadata({
  title: '私たちの想い | ヤマハタマリンサービスあまん - 奄美大島',
  description: '奄美大島の美しい自然を大切にし、お客様に最高のマリン体験をお届けしたいというヤマハタマリンサービスあまんの想いをご紹介します。',
  path: '/passion',
  image: {
    url: '/assets/images/pages/トップページ/スライドショー/slide3.webp',
    alt: '奄美大島の美しい自然とヤマハタマリンサービスあまんのこだわり',
  },
});

export default function Passion() {
  return <OurPassionPage />;
}
