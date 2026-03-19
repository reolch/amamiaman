import ContactPage from '@/pages/ContactPage/ContactPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: 'ご予約・お問い合わせ｜奄美大島 瀬戸内町',
  description: 'シーカヤック・シュノーケリング・グラスボートのご予約、宿泊のお問い合わせはこちら。電話 0997-72-4584（8:00〜17:00）。当日予約もお気軽にどうぞ。',
  path: '/contact',
  image: {
    url: '/assets/images/pages/お問い合わせ/top.webp',
    alt: 'ヤマハタマリンサービスあまんへのお問い合わせ',
  },
});

export default function Contact() {
  return (
    <PageWrapper>
      <ContactPage />
    </PageWrapper>
  );
}
