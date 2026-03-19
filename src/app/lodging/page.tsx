import LodgingPage from '@/pages/LodgingPage/LodgingPage';
import type { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';
import { createPageMetadata } from '@/lib/createPageMetadata';
import ParallaxBanner from '@/components/common/ParallaxBanner/ParallaxBanner';
import PageWrapper from '@/components/common/PageWrapper/PageWrapper';

export const metadata: Metadata = createPageMetadata({
  title: '奄美大島の民宿｜瀬戸内町の海辺の宿【素泊り4,000円〜】',
  description: '奄美大島瀬戸内町の民宿あまん。素泊り1泊4,000円〜。シーカヤックやシュノーケルの拠点に最適。海まで徒歩すぐ、無料駐車場完備。マリン体験とセットでお得。',
  path: '/lodging',
  image: {
    url: '/assets/images/LodgingGridItem1.webp',
    alt: 'ヤマハタマリンサービスあまんの宿泊施設の様子',
  },
  keywords: ['奄美大島 民宿', '民宿 あまん', '瀬戸内町 宿泊', '奄美大島 宿泊 安い'],
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
