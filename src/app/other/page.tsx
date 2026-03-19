import OtherFacilitiesPage from '@/pages/OtherFacilities/OtherFacilitiesPage';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/createPageMetadata';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: '施設紹介｜シャワー・更衣室・ロビー完備',
  description: 'あまんの施設をご紹介。温水シャワー、更衣室、休憩ロビーを完備。体験前後も快適にお過ごしいただけます。',
  path: '/other',
  image: {
    url: '/assets/images/pages/施設紹介/ロビー.webp',
    alt: 'ヤマハタマリンサービスあまんの施設紹介',
  },
});

export default function Other() {
  return (
    <PageWrapper>
      <OtherFacilitiesPage />
    </PageWrapper>
  );
}
