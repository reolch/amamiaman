import { Metadata } from 'next';
import OurPassionPage from '@/pages/OurPassionPage/OurPassionPage';

export const metadata: Metadata = {
  title: 'あまんのこだわり | あまみあまん - 奄美大島',
  description: 'お客様に合わせたコース設定とマリンスポーツのご提案。初心者から上級者まで、奄美大島の海を安心して楽しんでいただけるよう、私たちのこだわりをご紹介します。',
  keywords: '奄美大島, マリンスポーツ, こだわり, お客様対応, 初心者対応, 上級者対応, カスタマイズ, 体験コース, あまみあまん',
};

export default function Passion() {
  return <OurPassionPage />;
}