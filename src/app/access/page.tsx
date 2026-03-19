import StoreInformationPage from '@/pages/StoreInformationPage/StoreInformationPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: 'アクセス・営業案内｜奄美大島 瀬戸内町',
  description: '奄美空港から車で約2時間、古仁屋港すぐ。営業時間8:00〜17:00、年中無休。無料駐車場あり。地図・ルート案内はこちら。',
  path: '/access',
  image: {
    url: '/assets/images/pages/店舗情報/top.webp',
    alt: 'ヤマハタマリンサービスあまんへのアクセス',
  },
  keywords: ['マリンサービスあまん アクセス', '瀬戸内町 マリンスポーツ', '古仁屋 アクティビティ'],
});

export default function Access() {
  return (
    <PageWrapper>
      <StoreInformationPage />
    </PageWrapper>
  );
}
