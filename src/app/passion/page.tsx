import OurPassionPage from '@/pages/OurPassionPage/OurPassionPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: '私たちの想い｜奄美大島の海を守り届けるマリンショップ',
  description: '奄美大島瀬戸内町で30年以上。地元の海を知り尽くしたスタッフが安全で感動的なマリン体験をご案内。自然保全への取り組みもご紹介します。',
  path: '/passion',
  image: {
    url: '/assets/images/pages/トップページ/スライドショー/slide3.webp',
    alt: '奄美大島の美しい自然とヤマハタマリンサービスあまんのこだわり',
  },
  keywords: ['マリンサービスあまん', '奄美大島 マリンショップ', '瀬戸内町 マリン'],
});

export default function Passion() {
  return (
    <PageWrapper>
      <OurPassionPage />
    </PageWrapper>
  );
}
