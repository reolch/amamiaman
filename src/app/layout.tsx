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
  title: "ヤマハタマリンサービス｜奄美大島瀬戸内町のダイビング・カヤック・宿泊",
  description: "ヤマハタマリンサービスは、鹿児島県奄美大島の瀬戸内町でダイビング、シーカヤック、シュノーケリング等のマリンスポーツと宿泊施設を提供します。別名「マリンサービスあまん」としても親しまれています。",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
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
          name="ヤマハタマリンサービス"
          description="ヤマハタマリンサービスは、鹿児島県奄美大島の瀬戸内町でダイビング、シーカヤック、シュノーケリング等のマリンスポーツと宿泊施設を提供します。別名「あまみあまん」としても親しまれています。"
          address={{
            streetAddress: "清水 古仁屋平原375-1",
            addressLocality: "瀬戸内町",
            addressRegion: "鹿児島県",
            postalCode: "894-1521",
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
          name="ヤマハタマリンサービス（マリンサービスあまん）"
          description="ヤマハタマリンサービスは、鹿児島県奄美大島の瀬戸内町でダイビング、シーカヤック、シュノーケリング等のマリンスポーツと宿泊施設を提供します。別名「マリンサービスあまん」としても親しまれています。"
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
