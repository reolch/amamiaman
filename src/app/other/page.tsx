import { Metadata } from 'next';
import OtherFacilitiesPage from '@/pages/OtherFacilities/OtherFacilitiesPage';

export const metadata: Metadata = {
  title: 'その他の施設 | あまみあまん - 奄美大島',  
  description: 'マリンアクティビティ体験後にご利用いただけるシャワー室やロビーなど、快適にお過ごしいただくための施設をご紹介します。',
  keywords: '奄美大島, 施設紹介, シャワー室, ロビー, アクティビティ後, 快適, 設備, あまみあまん',
};

export default function Other() {
  return <OtherFacilitiesPage />;
}