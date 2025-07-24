import { Metadata } from 'next';
import GlassBoatPage from '@/pages/GlassBoatPage/GlassBoatPage';

export const metadata: Metadata = {
  title: 'グラスボート | あまみあまん - 奄美大島',
  description: '濡れることなく奄美の海底世界を楽しめるグラスボートツアー。透明な船底から美しいサンゴ礁や熱帯魚を観察できる、お子様や泳げない方にも人気のアクティビティです。',
  keywords: '奄美大島, グラスボート, ツアー, サンゴ礁, 熱帯魚, 海底観察, ファミリー向け, 子供, 泳げない方, 海中観察, あまみあまん',
};

export default function GlassBoat() {
  return <GlassBoatPage />;
}