import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./Font.css";
import "./App.css";
import "./styles/global.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import PageWrapper from "@/components/common/PageWrapper/PageWrapper";
import {
  LocalBusinessStructuredData,
  TouristAttractionStructuredData,
} from "@/components/StructuredData";
import { inter } from "./fonts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_TWITTER_CREATOR,
  DEFAULT_OG_IMAGE,
} from "@/constants/site";

// ── viewport（Next.js 14 ではメタデータと分離して export） ──────────────
export const viewport: Viewport = {
  themeColor: "#2d7f7f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ── サイト共通メタデータ ──────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // title.template を使うと各ページが "ページ名 | サイト名" になる
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,

  // キーワード（直接ランキング要因ではないがコンテキスト補助）
  keywords: [
    "奄美大島",
    "シーカヤック",
    "シュノーケリング",
    "グラスボート",
    "マリンスポーツ",
    "宿泊",
    "瀬戸内町",
    "加計呂麻島",
    "ヤマハタマリンサービスあまん",
    "マリンサービスあまん",
    "奄美大島 体験",
    "奄美大島 ツアー",
  ],

  applicationName: SITE_NAME,
  category: "travel",
  creator: SITE_NAME,
  publisher: SITE_NAME,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "ヤマハタマリンサービスあまん｜奄美大島のシーカヤック・シュノーケル・グラスボート",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
    creator: SITE_TWITTER_CREATOR,
    site: SITE_TWITTER_CREATOR,
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "ja-JP": SITE_URL,
    },
  },
};

// ── ルートレイアウト ────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LocalBusinessStructuredData
          name={SITE_NAME}
          description={SITE_DESCRIPTION}
          address={{
            streetAddress: "清水375-1",
            addressLocality: "瀬戸内町",
            addressRegion: "鹿児島県",
            postalCode: "894-1521",
            addressCountry: "JP",
          }}
          telephone="0997-72-4584"
          url={SITE_URL}
          openingHours={["Mo-Su 08:00-17:00"]}
          priceRange="¥¥-¥¥¥"
          services={[
            { name: "奄美大島 シーカヤック", url: `${SITE_URL}/seaKayak` },
            { name: "加計呂麻島 シーカヤック", url: `${SITE_URL}/seaKayak` },
            { name: "奄美大島 シュノーケル", url: `${SITE_URL}/snorkelling` },
            { name: "奄美大島 グラスボート", url: `${SITE_URL}/glassboat` },
            { name: "奄美大島 宿泊", url: `${SITE_URL}/lodging` },
          ]}
        />
        <TouristAttractionStructuredData
          name={SITE_NAME}
          description={SITE_DESCRIPTION}
          image={`${SITE_URL}${DEFAULT_OG_IMAGE}`}
          url={SITE_URL}
          activities={[
            { name: "奄美大島 シーカヤック", url: `${SITE_URL}/seaKayak` },
            { name: "加計呂麻島 シーカヤック", url: `${SITE_URL}/seaKayak` },
            { name: "奄美大島 シュノーケル", url: `${SITE_URL}/snorkelling` },
            { name: "奄美大島 グラスボート", url: `${SITE_URL}/glassboat` },
            { name: "奄美大島 宿泊", url: `${SITE_URL}/lodging` },
          ]}
        />
        <div className="app">
          <Header />
          <main>
            <PageWrapper>{children}</PageWrapper>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
