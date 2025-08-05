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
  title: "ヤマハタマリンサービスあまん - 奄美大島シーカヤック・加計呂麻島カヤック・奄美大島南部ダイビング体験",
  description: "ヤマハタマリンサービスあまんは奄美大島シーカヤック、加計呂麻島カヤック、奄美大島南部ダイビング、奄美大島ダイビングショップとして人気。あまんでシュノーケリング、グラスボート体験と宿泊を提供する総合マリンリゾートです。",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  keywords: "ヤマハタマリンサービスあまん, やまはたまりんさーびすあまん, 奄美大島 シーカヤック, 加計呂麻島 カヤック, 奄美大島 南部 ダイビング, あまん, 奄美大島 ダイビングショップ, 奄美大島シュノーケル, あまみあまん, ヤマハタマリンサービス, やまはたまりんさーびす, マリンサービスあまん, まりんさーびすあまん, 奄美大島, マリンスポーツ, 宿泊施設, シュノーケリング, シーカヤック, グラスボート, 奄美, 海, リゾート, 体験ダイビング, 民宿, ペンション",
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
    title: "ヤマハタマリンサービスあまん - 奄美大島シーカヤック・加計呂麻島カヤック・奄美大島南部ダイビング体験",
    description: "ヤマハタマリンサービスあまんで奄美大島シーカヤック、加計呂麻島カヤック、奄美大島南部ダイビング体験。奄美大島ダイビングショップとしても人気のあまんでマリンスポーツと宿泊をワンストップでご提供。",
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
    title: "ヤマハタマリンサービスあまん - 奄美大島シーカヤック・加計呂麻島カヤック・奄美大島南部ダイビング体験",
    description: "ヤマハタマリンサービスあまんで奄美大島シーカヤック、加計呂麻島カヤック、奄美大島南部ダイビング体験。奄美大島ダイビングショップとしても人気。",
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
          name="ヤマハタマリンサービスあまん"
          description="ヤマハタマリンサービスあまんは奄美大島シーカヤック、加計呂麻島カヤック、奄美大島南部ダイビング、奄美大島ダイビングショップとして人気。あまんで奄美大島シュノーケル体験を提供する総合マリンリゾート施設です。"
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
            { name: "奄美大島シーカヤック体験・レンタル", url: "https://www.marine-services-aman.com/seaKayak" },
            { name: "加計呂麻島カヤック体験・ツアー", url: "https://www.marine-services-aman.com/seaKayak" }, 
            { name: "奄美大島南部ダイビング・体験ダイビング", url: "https://www.marine-services-aman.com/other" },
            { name: "奄美大島ダイビングショップ・体験ダイビング", url: "https://www.marine-services-aman.com/other" },
            { name: "奄美大島シュノーケル体験・レンタル", url: "https://www.marine-services-aman.com/snorkelling" },
            { name: "グラスボート観光・遊覧", url: "https://www.marine-services-aman.com/glassboat" },
            { name: "奄美大島宿泊施設・民宿", url: "https://www.marine-services-aman.com/lodging" },
            { name: "マリンスポーツレンタル", url: "https://www.marine-services-aman.com" }
          ]}
        />
        <TouristAttractionStructuredData
          name="ヤマハタマリンサービスあまん - 奄美大島マリンリゾート"
          description="ヤマハタマリンサービスあまんは奄美大島シーカヤック、加計呂麻島カヤック、奄美大島南部ダイビング、奄美大島ダイビングショップとして人気。あまんで奄美大島シュノーケル体験を提供する総合リゾート施設で、宿泊とマリンアクティビティを一体で楽しめます。"
          image="/assets/images/pages/トップページ/スライドショー/slide1.webp"
          url="https://www.marine-services-aman.com"
          activities={[
            { name: "奄美大島シーカヤック体験", url: "https://www.marine-services-aman.com/seaKayak" },
            { name: "加計呂麻島カヤックツアー", url: "https://www.marine-services-aman.com/seaKayak" }, 
            { name: "奄美大島南部ダイビング・体験ダイビング", url: "https://www.marine-services-aman.com/other" },
            { name: "奄美大島ダイビングショップ・体験ダイビング", url: "https://www.marine-services-aman.com/other" },
            { name: "奄美大島シュノーケル体験", url: "https://www.marine-services-aman.com/snorkelling" },
            { name: "奄美大島グラスボート遊覧", url: "https://www.marine-services-aman.com/glassboat" },
            { name: "奄美大島マリンスポーツ", url: "https://www.marine-services-aman.com" },
            { name: "奄美大島宿泊・民宿", url: "https://www.marine-services-aman.com/lodging" }
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
