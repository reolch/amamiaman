import OtherFacilitiesPage from '@/pages/OtherFacilities/OtherFacilitiesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'その他施設 | ヤマハタマリンサービス - 奄美大島',
  description: 'ヤマハタマリンサービスではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
  openGraph: {
    title: 'その他施設 | ヤマハタマリンサービス - 奄美大島',
    description: 'ヤマハタマリンサービスではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
    url: 'https://www.marine-services-aman.com/other',
    siteName: 'ヤマハタマリンサービス',
    images: [
      {
        url: '/assets/images/pages/施設紹介/ロビー.webp',
        width: 1200,
        height: 630,
        alt: 'ヤマハタマリンサービスの施設紹介',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'その他施設 | ヤマハタマリンサービス - 奄美大島',
    description: 'ヤマハタマリンサービスではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
    images: ['/assets/images/pages/施設紹介/ロビー.webp'],
  },
};

export default function Other() {
  return <OtherFacilitiesPage />;
}