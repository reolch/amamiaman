import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME, SITE_TWITTER_CREATOR } from '@/constants/site';

interface PageMetadataOptions {
  /** ページタイトル（<title>、OG、Twitter に共通で使われる） */
  title: string;
  /** ページの説明文（meta description、OG、Twitter に共通で使われる） */
  description: string;
  /** サイトルートからのパス（例: '/glassboat', '/seaKayak'） */
  path: string;
  /** OG / Twitter カード用画像 */
  image: {
    url: string;
    width?: number;
    height?: number;
    alt: string;
  };
  /** ページ固有のキーワード（サイト共通 keywords に追加されます） */
  keywords?: string[];
  /** ページ固有の追加 Metadata（上書き用） */
  extra?: Partial<Metadata>;
}

/** サイト全ページ共通のキーワード */
const BASE_KEYWORDS = [
  '奄美大島',
  'マリンスポーツ',
  '瀬戸内町',
  'ヤマハタマリンサービスあまん',
  'マリンサービスあまん',
];

/**
 * ページごとの Metadata を生成するヘルパー。
 * siteName / locale / twitter card などの共通フィールドをまとめており、
 * URL を変えるときは src/constants/site.ts の SITE_URL だけ更新すれば OK。
 */
export function createPageMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
  extra = {},
}: PageMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  // 画像 URL が相対パスの場合は絶対 URL に変換
  const imageUrl = image.url.startsWith('http') ? image.url : `${SITE_URL}${image.url}`;

  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: image.width ?? 1200,
          height: image.height ?? 630,
          alt: image.alt,
        },
      ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: SITE_TWITTER_CREATOR,
      site: SITE_TWITTER_CREATOR,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    ...extra,
  };
}
