import { Metadata } from 'next';
import LodgingPage from '@/pages/LodgingPage/LodgingPage';

export const metadata: Metadata = {
  title: '宿泊施設 | あまみあまん - 奄美大島',
  description: '奄美大島での滞在に最適な素泊まり宿。和室・洋室完備、WiFi・洗濯機・冷蔵庫など設備充実。低価格でご利用いただける快適な宿泊施設です。',
  keywords: '奄美大島, 宿泊施設, 素泊まり, 和室, 洋室, WiFi, 洗濯機, 冷蔵庫, 低価格, 民宿, あまみあまん',
};

export default function Lodging() {
  return <LodgingPage />;
}