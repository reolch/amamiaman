import ContactPage from '@/pages/ContactPage/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | あまみあまん - 奄美大島',
  description: 'あまみあまんへのお問い合わせ、ご予約はこちらからお気軽にどうぞ。マリンアクティビティや宿泊に関するご質問にお答えします。',
  keywords: '奄美大島, お問い合わせ, 予約, あまみあまん, コンタクト, 電話',
  openGraph: {
    title: 'お問い合わせ | あまみあまん - 奄美大島',
    description: 'あまみあまんへのお問い合わせ、ご予約はこちらからお気軽にどうぞ。マリンアクティビティや宿泊に関するご質問にお答えします。',
    url: 'https://amamiaman.com/contact',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/pages/トップページ/スライドショー/slide4.jpg',
        width: 1200,
        height: 630,
        alt: 'あまみあまんお問い合わせ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ | あまみあまん - 奄美大島',
    description: 'あまみあまんへのお問い合わせ、ご予約はこちらからお気軽にどうぞ。マリンアクティビティや宿泊に関するご質問にお答えします。',
    images: ['/assets/images/pages/トップページ/スライドショー/slide4.jpg'],
  },
};

export default function Contact() {
  return <ContactPage />;
}