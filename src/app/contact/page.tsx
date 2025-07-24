import { Metadata } from 'next';
import ContactPage from '@/pages/ContactPage/ContactPage';

export const metadata: Metadata = {
  title: 'お問い合わせ | あまみあまん - 奄美大島',
  description: 'あまみあまんへのお問い合わせはこちらから。マリンアクティビティや宿泊に関するご質問・ご相談がございましたら、お気軽にご連絡ください。',
  keywords: '奄美大島, お問い合わせ, 連絡先, 相談, 質問, マリンアクティビティ, 宿泊, 予約, あまみあまん',
};

export default function Contact() {
  return <ContactPage />;
}