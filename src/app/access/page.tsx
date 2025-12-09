import StoreInformationPage from '@/pages/StoreInformationPage/StoreInformationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アクセス | ヤマハタマリンサービス - 奄美大島',
  description: 'ヤマハタマリンサービスへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。奄美大島瀬戸内町にございます。',
  openGraph: {
    title: 'アクセス | ヤマハタマリンサービス - 奄美大島',
    description: 'ヤマハタマリンサービスへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。奄美大島瀬戸内町にございます。',
    url: 'https://www.marine-services-aman.com/access',
    siteName: 'ヤマハタマリンサービス',
    images: [
      {
        url: '/assets/images/pages/店舗情報/top.webp',
        width: 1200,
        height: 630,
        alt: 'ヤマハタマリンサービスへのアクセス',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アクセス | ヤマハタマリンサービス - 奄美大島',
    description: 'ヤマハタマリンサービスへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。奄美大島瀬戸内町にございます。',
    images: ['/assets/images/pages/店舗情報/top.webp'],
  },
};

export default function Access() {
  return <StoreInformationPage />;
}