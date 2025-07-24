import { Metadata } from 'next';
import SnorkellingPage from '@/pages/SnorkellingPage/SnorkellingPage';

export const metadata: Metadata = {
  title: 'シュノーケリング | あまみあまん - 奄美大島',
  description: '奄美の美しい海でシュノーケリングツアーを楽しみませんか。サンゴ礁と色とりどりの魚たちに出会える、奄美大島の海中世界を体験できます。',
  keywords: '奄美大島, シュノーケリング, ツアー, サンゴ礁, 熱帯魚, 海中観察, マリンアクティビティ, 奄美の海, あまみあまん',
};

export default function Snorkelling() {
  return <SnorkellingPage />;
}