import LodgingPage from '@/pages/LodgingPage/LodgingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '宿泊施設 | あまみあまん - 奄美大島',
  description: '奄美大島の海を満喫できる宿泊施設をご提供しています。マリンアクティビティと合わせて快適にお過ごしいただけます。',
  keywords: '奄美大島, 宿泊施設, 宿泊, あまみあまん, 民宿, ホテル',
  openGraph: {
    title: '宿泊施設 | あまみあまん - 奄美大島',
    description: '奄美大島の海を満喫できる宿泊施設をご提供しています。マリンアクティビティと合わせて快適にお過ごしいただけます。',
    url: 'https://www.marine-services-aman.com/lodging',
    siteName: 'あまみあまん',
    images: [
      {
        url: '/assets/images/LodgingGridItem1.jpg',
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
    images: ['/assets/images/LodgingGridItem1.jpg'],
  },
};

export default function Lodging() {
  return <LodgingPage />;
}