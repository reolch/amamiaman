import StoreInformationPage from '@/pages/StoreInformationPage/StoreInformationPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';

export const metadata: Metadata = createPageMetadata({
  title: 'アクセス | ヤマハタマリンサービスあまん - 奄美大島',
  description: 'ヤマハタマリンサービスへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。奄美大島瀬戸内町にございます。',
  path: '/access',
  image: {
    url: '/assets/images/pages/店舗情報/top.webp',
    alt: 'ヤマハタマリンサービスあまんへのアクセス',
  },
});

export default function Access() {
  return <StoreInformationPage />;
}
