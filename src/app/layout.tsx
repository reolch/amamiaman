import type { Metadata } from "next";
import "./globals.css";
import "./Font.css";
import "./App.css";
import "./styles/global.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { LocalBusinessStructuredData, TouristAttractionStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "あまみあまん - 奄美大島の海を楽しむ",
  description: "奄美大島でシュノーケリング、シーカヤック、グラスボートを楽しめる施設です。",
  keywords: "奄美大島, マリンアクティビティ, シュノーケリング, シーカヤック, グラスボート, 宿泊施設, あまみあまん",
  openGraph: {
    title: "あまみあまん - 奄美大島の海を楽しむ",
    description: "奄美大島でシュノーケリング、シーカヤック、グラスボートを楽しめる施設です。",
    url: "https://amamiaman.com",
    siteName: "あまみあまん",
    images: [
      {
        url: "/assets/images/pages/トップページ/スライドショー/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "奄美大島の美しい海とマリンアクティビティの様子",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "あまみあまん - 奄美大島の海を楽しむ",
    description: "奄美大島でシュノーケリング、シーカヤック、グラスボートを楽しめる施設です。",
    images: ["/assets/images/pages/トップページ/スライドショー/slide1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <LocalBusinessStructuredData
          name="ヤマハタマリンサービスあまん"
          description="奄美大島でシュノーケリング、シーカヤック、グラスボート等のマリンアクティビティと宿泊施設を提供"
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
          priceRange="¥¥"
          services={[
            "シュノーケリング体験",
            "シーカヤック体験", 
            "グラスボート観光",
            "宿泊施設"
          ]}
        />
        <TouristAttractionStructuredData
          name="あまみあまん マリンアクティビティ"
          description="奄美大島の美しい海でマリンスポーツを楽しめる観光施設"
          image="/assets/images/pages/トップページ/スライドショー/slide1.jpg"
          url="https://amamiaman.com"
          activities={[
            "シュノーケリング",
            "シーカヤック", 
            "グラスボート"
          ]}
        />
        <div className="app">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
