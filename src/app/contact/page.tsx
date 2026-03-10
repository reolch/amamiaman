import ContactPage from '@/pages/ContactPage/ContactPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';

export const metadata: Metadata = createPageMetadata({
  title: 'お問い合わせ | ヤマハタマリンサービスあまん - 奄美大島',
  description: 'ヤマハタマリンサービスあまんへのお問い合わせ、ご予約はこちらから。マリンアクティビティや宿泊に関するご質問にお答えします。',
  path: '/contact',
  image: {
    url: '/assets/images/pages/お問い合わせ/top.webp',
    alt: 'ヤマハタマリンサービスあまんへのお問い合わせ',
  },
});

export default function Contact() {
  return <ContactPage />;
}
