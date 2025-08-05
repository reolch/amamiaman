import OtherFacilitiesPage from '@/pages/OtherFacilities/OtherFacilitiesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'その他施設 | ヤマハタマリンサービス - 奄美大島',
  description: 'ヤマハタマリンサービスではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
};

export default function Other() {
  return <OtherFacilitiesPage />;
}