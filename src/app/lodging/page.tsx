import LodgingPage from '@/pages/LodgingPage/LodgingPage';
import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: '宿泊施設 | あまみあまん - 奄美大島',
  description: '奄美大島の海を満喫できる宿泊施設をご提供しています。マリンアクティビティと合わせて快適にお過ごしいただけます。',
  openGraph: {
    title: '宿泊施設 | あまみあまん - 奄美大島',
    description: '奄美大島の海を満喫できる宿泊施設をご提供しています。マリンアクティビティと合わせて快適にお過ごしいただけます。',
    url: 'https://www.marine-services-aman.com/lodging',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/LodgingGridItem1.webp',
        width: 1200,
        height: 630,
        alt: 'あまみあまんの宿泊施設の様子',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '宿泊施設 | あまみあまん - 奄美大島',
    description: '奄美大島の海を満喫できる宿泊施設をご提供しています。マリンアクティビティと合わせて快適にお過ごしいただけます。',
    images: ['/assets/images/LodgingGridItem1.webp'],
  },
};

export default function Lodging() {
  return (
    <>
      <LodgingPage />
      <ServiceStructuredData
        name="宿泊施設"
        description="奄美大島の自然を満喫できる、快適な宿泊施設。マリンスポーツの拠点として最適です。"
        providerName="あまみあまん"
        offers={[
          { price: '4000', priceCurrency: 'JPY' },
        ]}
      />
    </>
  );
}