import type { Metadata } from "next";
import "./globals.css";
import "./Font.css";
import "./App.css";
import "./styles/global.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import PageWrapper from "@/components/common/PageWrapper/PageWrapper";
import { LocalBusinessStructuredData, TouristAttractionStructuredData } from "@/components/StructuredData";
import { inter } from "./fonts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_TWITTER_CREATOR,
  DEFAULT_OG_IMAGE,
} from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   TODO: Google Search Console で取得した認証コードを設定してください
  //   手順: https://search.google.com/search-console → プロパティ追加 → HTML タグ → content の値をコピー
  //   google: "実際の認証コードをここに設定",
  // },
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
        alt: "ヤマハタマリンサービスあまんのサービス：シーカヤック、シュノーケル、グラスボート",
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
  },
  alternates: {
    canonical: SITE_URL,
  },
};

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
            streetAddress: "清水 古仁屋平原375-1",
            addressLocality: "瀬戸内町",
            addressRegion: "鹿児島県",
            postalCode: "894-1521",
            addressCountry: "JP"
          }}
          telephone="0997-72-4584"
          url={SITE_URL}
          openingHours={["Mo-Su 08:00-18:00"]}
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
          image={DEFAULT_OG_IMAGE}
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
            <PageWrapper>
              {children}
            </PageWrapper>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
