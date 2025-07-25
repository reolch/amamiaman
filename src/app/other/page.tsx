import OtherFacilitiesPage from '@/pages/OtherFacilities/OtherFacilitiesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'その他の施設 | あまみあまん - 奄美大島',
  description: 'あまみあまんではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
  keywords: '奄美大島, その他施設, 施設案内, あまみあまん, シャワー室, ロビー, 設備',
  openGraph: {
    title: 'その他の施設 | あまみあまん - 奄美大島',
    description: 'あまみあまんではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
    url: 'https://www.marine-services-aman.com/other',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/施設紹介/ロビー.jpg',
        width: 1200,
        height: 630,
        alt: 'あまみあまんの施設の様子',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'その他の施設 | あまみあまん - 奄美大島',
    description: 'あまみあまんではマリンアクティビティ以外にも様々な施設やサービスをご用意しています。シャワー室やロビーなどの施設紹介です。',
    images: ['/assets/images/pages/施設紹介/ロビー.jpg'],
  },
};

export default function Other() {
  return <OtherFacilitiesPage />;
}