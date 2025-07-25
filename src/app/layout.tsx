import type { Metadata } from "next";
import "./globals.css";
import "./Font.css";
import "./App.css";
import "./styles/global.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import PageWrapper from "@/components/common/PageWrapper/PageWrapper";
import { LocalBusinessStructuredData, TouristAttractionStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "あまみあまん | ヤマハタマリンサービス - 奄美大島のマリンスポーツ・宿泊施設",
  description: "あまみあまん（ヤマハタマリンサービス）は奄美大島でシュノーケリング、シーカヤック、グラスボートのマリンアクティビティと宿泊施設を提供。美しい奄美の海を満喫できる総合マリンリゾートです。",
  keywords: "あまみあまん, ヤマハタマリンサービス, やまはたまりんさーびす, マリンサービスあまん, まりんさーびすあまん, 奄美大島, マリンスポーツ, 宿泊施設, シュノーケリング, シーカヤック, グラスボート, 奄美, 海, リゾート, 体験ダイビング, 民宿, ペンション",
  authors: [{ name: "あまみあまん（ヤマハタマリンサービス）" }],
  creator: "あまみあまん",
  publisher: "ヤマハタマリンサービス",
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
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    title: "あまみあまん | ヤマハタマリンサービス - 奄美大島のマリンスポーツ・宿泊施設",
    description: "あまみあまん（ヤマハタマリンサービス）で奄美大島の美しい海を満喫。シュノーケリング、シーカヤック、グラスボート体験と宿泊をワンストップでご提供。",
    url: "https://amamiaman.com",
    siteName: "あまみあまん - ヤマハタマリンサービス",
    images: [
      {
        url: "/assets/images/pages/トップページ/スライドショー/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "あまみあまん 奄美大島のマリンスポーツと宿泊施設 ヤマハタマリンサービス",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "あまみあまん | ヤマハタマリンサービス - 奄美大島のマリンスポーツ・宿泊施設",
    description: "あまみあまん（ヤマハタマリンサービス）で奄美大島の美しい海を満喫。シュノーケリング、シーカヤック、グラスボート体験と宿泊をワンストップでご提供。",
    images: ["/assets/images/pages/トップページ/スライドショー/slide1.jpg"],
    creator: "@amamiaman",
  },
  alternates: {
    canonical: "https://amamiaman.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocalBusinessStructuredData
          name="あまみあまん（ヤマハタマリンサービス）"
          description="奄美大島で最高のマリンスポーツ体験と宿泊を提供するあまみあまん。ヤマハタマリンサービスが運営するシュノーケリング、シーカヤック、グラスボートの総合マリンリゾート施設です。"
          address={{
            streetAddress: "奄美大島",
            addressLocality: "奄美市",
            addressRegion: "鹿児島県",
            postalCode: "",
            addressCountry: "JP"
          }}
          telephone="0997-72-4584"
          url="https://amamiaman.com"
          openingHours={["Mo-Su 08:00-18:00"]}
          priceRange="¥¥-¥¥¥"
          services={[
            "シュノーケリング体験・レンタル",
            "シーカヤック体験・ツアー", 
            "グラスボート観光・遊覧",
            "奄美大島宿泊施設・民宿",
            "マリンスポーツレンタル",
            "体験ダイビング",
            "海水浴場案内"
          ]}
        />
        <TouristAttractionStructuredData
          name="あまみあまん（ヤマハタマリンサービス）- 奄美大島マリンリゾート"
          description="あまみあまんは奄美大島で最高のマリンスポーツ体験を提供する総合リゾート施設。ヤマハタマリンサービスが運営し、宿泊とマリンアクティビティを一体で楽しめます。"
          image="/assets/images/pages/トップページ/スライドショー/slide1.jpg"
          url="https://amamiaman.com"
          activities={[
            "奄美大島シュノーケリング体験",
            "奄美大島シーカヤックツアー", 
            "奄美大島グラスボート遊覧",
            "奄美大島マリンスポーツ",
            "奄美大島宿泊・民宿",
            "奄美大島体験ダイビング"
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
