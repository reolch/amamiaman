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
  title: "ヤマハタマリンサービス｜奄美大島のシーカヤック・シュノーケル・宿泊",
  description: "奄美大島瀬戸内町の「ヤマハタマリンサービス」（通称：あまん）。シーカヤック、シュノーケリング、グラスボートなどのマリンスポーツと宿泊施設を提供。加計呂麻島カヤックも人気です。",
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
    // TODO: Add your Google verification code here
    google: "your-google-verification-code",
    // TODO: Add your Yandex verification code here
    yandex: "your-yandex-verification-code",
    // TODO: Add your Yahoo verification code here
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    title: "ヤマハタマリンサービス｜奄美大島のシーカヤック・シュノーケル・宿泊",
    description: "奄美大島瀬戸内町の「ヤマハタマリンサービス」（通称：あまん）。シーカヤック、シュノーケリング、グラスボートなどのマリンスポーツと宿泊施設を提供。加計呂麻島カヤックも人気です。",
    url: "https://www.marine-services-aman.com",
    siteName: "ヤマハタマリンサービス",
    images: [
      {
        url: "/assets/images/pages/トップページ/スライドショー/slide1.webp",
        width: 1200,
        height: 630,
        alt: "ヤマハタマリンサービスのサービス：シーカヤック、シュノーケル、グラスボート",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ヤマハタマリンサービス｜奄美大島のシーカヤック・シュノーケル・宿泊",
    description: "奄美大島瀬戸内町の「ヤマハタマリンサービス」（通称：あまん）。シーカヤック、シュノーケリング、グラスボートなどのマリンスポーツと宿泊施設を提供。加計呂麻島カヤックも人気です。",
    images: ["/assets/images/pages/トップページ/スライドショー/slide1.webp"],
    creator: "@amamiaman",
  },
  // alternates: {
  //   canonical: "https://www.marine-services-aman.com",
  // },
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
          description="奄美大島瀬戸内町の「ヤマハタマリンサービス」（通称：あまん）。シーカヤック、シュノーケリング、グラスボートなどのマリンスポーツと宿泊施設を提供。加計呂麻島カヤックも人気です。"
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
            { name: "奄美大島 シーカヤック", url: "https://www.marine-services-aman.com/seaKayak" },
            { name: "加計呂麻島 シーカヤック", url: "https://www.marine-services-aman.com/seaKayak" },
            { name: "奄美大島 シュノーケル", url: "https://www.marine-services-aman.com/snorkelling" },
            { name: "奄美大島 グラスボート", url: "https://www.marine-services-aman.com/glassboat" },
            { name: "奄美大島 宿泊", url: "https://www.marine-services-aman.com/lodging" }
          ]}
        />
        <TouristAttractionStructuredData
          name="ヤマハタマリンサービス"
          description="奄美大島瀬戸内町の「ヤマハタマリンサービス」（通称：あまん）。シーカヤック、シュノーケリング、グラスボートなどのマリンスポーツと宿泊施設を提供。加計呂麻島カヤックも人気です。"
          image="/assets/images/pages/トップページ/スライドショー/slide1.webp"
          url="https://www.marine-services-aman.com"
          activities={[
            { name: "奄美大島 シーカヤック", url: "https://www.marine-services-aman.com/seaKayak" },
            { name: "加計呂麻島 シーカヤック", url: "https://www.marine-services-aman.com/seaKayak" },
            { name: "奄美大島 シュノーケル", url: "https://www.marine-services-aman.com/snorkelling" },
            { name: "奄美大島 グラスボート", url: "https://www.marine-services-aman.com/glassboat" },
            { name: "奄美大島 宿泊", url: "https://www.marine-services-aman.com/lodging" }
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
