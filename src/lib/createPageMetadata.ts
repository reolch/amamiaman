import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/constants/site';

interface PageMetadataOptions {
  /** ページタイトル（<title> タグ、OG、Twitter に共通で使われる） */
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
  /** ページ固有の追加 Metadata（上書き用）*/
  extra?: Partial<Metadata>;
}

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
  extra = {},
}: PageMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image.url;

  return {
    title,
    description,
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
    },
    alternates: {
      canonical: canonicalUrl,
    },
    ...extra,
  };
}
