import { Metadata } from 'next';
import SeaKayakPage from '@/pages/SeaKayakPage/SeakayakPage';

export const metadata: Metadata = {
  title: 'シーカヤック | あまみあまん - 奄美大島',
  description: '奄美大島の透明度抜群の海をシーカヤックで巡りませんか。穏やかな海面を漕ぎながら、美しい海岸線と自然の魅力を満喫できるツアーです。',
  keywords: '奄美大島, シーカヤック, ツアー, 海岸線, 透明度, 自然体験, マリンスポーツ, パドリング, 奄美の海, あまみあまん',
};

export default function SeaKayak() {
  return <SeaKayakPage />;
}