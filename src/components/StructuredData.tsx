// SEO構造化データコンポーネント
import Script from 'next/script';

interface LocalBusinessProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  url: string;
  openingHours: string[];
  priceRange: string;
  services: { name: string; url: string }[];
}

export function LocalBusinessStructuredData({
  name,
  description,
  address,
  telephone,
  url,
  openingHours,
  priceRange,
  services
}: LocalBusinessProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "telephone": telephone,
    "url": url,
    "openingHours": openingHours,
    "priceRange": priceRange,
    "serviceType": services.map(service => service.name),
    "areaServed": "奄美大島",
    "knowsAbout": ["マリンスポーツ", "シュノーケリング", "シーカヤック", "グラスボート", "宿泊施設", "マリンサービスあまん", "奄美大島シュノーケル", "加計呂麻島カヤック", "奄美大島南部ダイビング"],
    "alternateName": ["マリンサービスあまん", "ヤマハタマリンサービス"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "マリンアクティビティサービス",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "url": service.url,
          "provider": {
            "@type": "LocalBusiness",
            "name": name
          }
        }
      }))
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.3",
      "longitude": "129.5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "田中様"
        },
        "reviewBody": "奄美大島でのシュノーケリング体験が最高でした。スタッフの方も親切でとても楽しい時間を過ごせました。"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "佐藤様"
        },
        "reviewBody": "シーカヤックでマングローブの森を探検。自然の雄大さに感動しました。"
      }
    ]
  };

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

interface TouristAttractionProps {
  name: string;
  description: string;
  image: string;
  url: string;
  activities: { name: string; url: string }[];
}

export function TouristAttractionStructuredData({
  name,
  description,
  image,
  url,
  activities
}: TouristAttractionProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": name,
    "description": description,
    "image": image,
    "url": url,
    "touristType": ["家族連れ", "カップル", "友人グループ", "個人旅行者"],
    "availableLanguage": ["日本語"],
    "isAccessibleForFree": false,
    "publicAccess": true,
    "hasMap": url + "/access",
    "potentialAction": activities.map(activity => ({
      "@type": "Action",
      "name": activity.name,
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": activity.url,
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      }
    }))
  };

  return (
    <Script
      id="tourist-attraction-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

interface ServiceProps {
  name: string;
  description: string;
  providerName: string;
  offers: {
    price: string;
    priceCurrency: string;
  }[];
}

export function ServiceStructuredData({ name, description, providerName, offers }: ServiceProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": providerName
    },
    "offers": offers.map(offer => ({
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": offer.priceCurrency
    }))
  };

  return (
    <Script
      id={`${name}-service-structured-data`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}