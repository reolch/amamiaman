import StoreInformationPage from '@/pages/StoreInformationPage/StoreInformationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アクセス | ヤマハタマリンサービス - 奄美大島',
  description: 'ヤマハタマリンサービスへのアクセス方法、営業時間、お問い合わせ先をご確認いただけます。奄美大島瀬戸内町にございます。',
};

export default function Access() {
  return <StoreInformationPage />;
}