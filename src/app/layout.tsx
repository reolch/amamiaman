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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marine-services-aman.com"),
  title: "ヤマハタマリンサービス - 奄美大島のマリンスポーツ・宿泊施設",
  description: "ヤマハタマリンサービスは奄美大島でシュノーケリング、シーカヤック、グラスボートのマリンアクティビティと宿泊施設を提供。あまみあまん・マリンサービスあまんとしても知られ、美しい奄美の海を満喫できる総合マリンリゾートです。",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  keywords: "あまん, 加計呂麻島 カヤック, 奄美大島 南部 ダイビング, 奄美大島シュノーケル, あまみあまん, ヤマハタマリンサービス, やまはたまりんさーびす, マリンサービスあまん, まりんさーびすあまん, 奄美大島, マリンスポーツ, 宿泊施設, シュノーケリング, シーカヤック, グラスボート, 奄美, 海, リゾート, 体験ダイビング, 民宿, ペンション",
  authors: [{ name: "ヤマハタマリンサービス" }],
  creator: "ヤマハタマリンサービス",
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
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    title: "ヤマハタマリンサービス - 奄美大島のマリンスポーツ・宿泊施設",
    description: "ヤマハタマリンサービスで奄美大島の美しい海を満喫。シュノーケリング、シーカヤック、グラスボート体験と宿泊をワンストップでご提供。あまみあまん・マリンサービスあまんとしても知られています。",
    url: "https://www.marine-services-aman.com",
    siteName: "ヤマハタマリンサービス",
    images: [
      {
        url: "/assets/images/pages/トップページ/スライドショー/slide1.webp",
        width: 1200,
        height: 630,
        alt: "ヤマハタマリンサービス 奄美大島のマリンスポーツと宿泊施設",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ヤマハタマリンサービス - 奄美大島のマリンスポーツ・宿泊施設",
    description: "ヤマハタマリンサービスで奄美大島の美しい海を満喫。シュノーケリング、シーカヤック、グラスボート体験と宿泊をワンストップでご提供。",
    images: ["/assets/images/pages/トップページ/スライドショー/slide1.webp"],
    creator: "@amamiaman",
  },
  alternates: {
    canonical: "https://www.marine-services-aman.com",
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
          name="ヤマハタマリンサービス"
          description="ヤマハタマリンサービスは奄美大島シュノーケル、加計呂麻島カヤック、奄美大島南部ダイビング体験を提供する総合マリンリゾート施設です。あまみあまん・マリンサービスあまんとしても知られています。"
          address={{
            streetAddress: "奄美大島",
            addressLocality: "奄美市",
            addressRegion: "鹿児島県",
            postalCode: "",
            addressCountry: "JP"
          }}
          telephone="0997-72-4584"
          url="https://www.marine-services-aman.com"
          openingHours={["Mo-Su 08:00-18:00"]}
          priceRange="¥¥-¥¥¥"
          services={[
            "奄美大島シュノーケル体験・レンタル",
            "加計呂麻島カヤック体験・ツアー", 
            "奄美大島南部ダイビング体験",
            "グラスボート観光・遊覧",
            "奄美大島宿泊施設・民宿",
            "マリンスポーツレンタル",
            "海水浴場案内"
          ]}
        />
        <TouristAttractionStructuredData
          name="ヤマハタマリンサービス - 奄美大島マリンリゾート"
          description="ヤマハタマリンサービスは奄美大島シュノーケル、加計呂麻島カヤック、奄美大島南部ダイビング体験を提供する総合リゾート施設。あまみあまん・マリンサービスあまんとしても知られ、宿泊とマリンアクティビティを一体で楽しめます。"
          image="/assets/images/pages/トップページ/スライドショー/slide1.webp"
          url="https://www.marine-services-aman.com"
          activities={[
            "奄美大島シュノーケル体験",
            "加計呂麻島カヤックツアー", 
            "奄美大島南部ダイビング体験",
            "奄美大島グラスボート遊覧",
            "奄美大島マリンスポーツ",
            "奄美大島宿泊・民宿"
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
