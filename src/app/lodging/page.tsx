import LodgingPage from '@/pages/LodgingPage/LodgingPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';
import ParallaxBanner from '@/components/common/ParallaxBanner/ParallaxBanner';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: '宿泊施設 | ヤマハタマリンサービスあまん - 奄美大島',
  description: 'ヤマハタマリンサービスあまんが提供する、奄美大島の海を満喫できる宿泊施設。マリンアクティビティと合わせて快適にお過ごしいただけます。',
  path: '/lodging',
  image: {
    url: '/assets/images/LodgingGridItem1.webp',
    alt: 'ヤマハタマリンサービスあまんの宿泊施設の様子',
  },
});

export default function Lodging() {
  return (
    <>
      <ParallaxBanner
        src="/assets/images/LodgingGridItem1.webp"
        alt="ヤマハタマリンサービスあまんの宿泊施設の様子"
        title="民宿"
        subtitle="奄美の海を満喫する、くつろぎのひとときを"
      />
      <PageWrapper>
        <LodgingPage />
      </PageWrapper>
      <ServiceStructuredData
        name="宿泊施設"
        description="奄美大島の自然を満喫できる、快適な宿泊施設。マリンスポーツの拠点として最適です。"
        providerName="ヤマハタマリンサービスあまん"
        offers={[
          { price: '4000', priceCurrency: 'JPY' },
        ]}
      />
    </>
  );
}
