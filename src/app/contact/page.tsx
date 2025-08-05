import ContactPage from '@/pages/ContactPage/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | ヤマハタマリンサービス - 奄美大島',
  description: 'ヤマハタマリンサービスへのお問い合わせ、ご予約はこちらから。マリンアクティビティや宿泊に関するご質問にお答えします。',
  openGraph: {
    title: 'お問い合わせ | ヤマハタマリンサービス - 奄美大島',
    description: 'ヤマハタマリンサービスへのお問い合わせ、ご予約はこちらから。マリンアクティビティや宿泊に関するご質問にお答えします。',
    url: 'https://www.marine-services-aman.com/contact',
    siteName: 'ヤマハタマリンサービス',
    images: [
      {
        url: '/assets/images/pages/お問い合わせ/top.webp',
        width: 1200,
        height: 630,
        alt: 'ヤマハタマリンサービスへのお問い合わせ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ | ヤマハタマリンサービス - 奄美大島',
    description: 'ヤマハタマリンサービスへのお問い合わせ、ご予約はこちらから。マリンアクティビティや宿泊に関するご質問にお答えします。',
    images: ['/assets/images/pages/お問い合わせ/top.webp'],
  },
};

export default function Contact() {
  return <ContactPage />;
}