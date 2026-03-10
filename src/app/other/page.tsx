import OtherFacilitiesPage from '@/pages/OtherFacilities/OtherFacilitiesPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';

export const metadata: Metadata = createPageMetadata({
  title: 'その他施設 | ヤマハタマリンサービスあまん - 奄美大島',
  description: 'ヤマハタマリンサービスあまんではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
  path: '/other',
  image: {
    url: '/assets/images/pages/施設紹介/ロビー.webp',
    alt: 'ヤマハタマリンサービスあまんの施設紹介',
  },
});

export default function Other() {
  return <OtherFacilitiesPage />;
}
