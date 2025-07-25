import StoreInformationPage from '@/pages/StoreInformationPage/StoreInformationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アクセス・店舗情報 | あまみあまん - 奄美大島',
  description: '奄美大島のヤマハタマリンサービスあまんへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。',
  keywords: '奄美大島, アクセス, 店舗情報, ヤマハタマリンサービス, あまん, 営業時間',
  openGraph: {
    title: 'アクセス・店舗情報 | あまみあまん - 奄美大島',
    description: '奄美大島のヤマハタマリンサービスあまんへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。',
    url: 'https://www.marine-services-aman.com/access',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/トップページ/スライドショー/slide5.jpg',
        width: 1200,
        height: 630,
        alt: 'あまみあまんへのアクセス・店舗情報',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アクセス・店舗情報 | あまみあまん - 奄美大島',
    description: '奄美大島のヤマハタマリンサービスあまんへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。',
    images: ['/assets/images/pages/トップページ/スライドショー/slide5.jpg'],
  },
};

export default function Access() {
  return <StoreInformationPage />;
}