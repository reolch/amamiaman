import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/snorkelling',
          '/seaKayak',
          '/glassboat',
          '/lodging',
          '/other',
          '/passion',
          '/access',
          '/contact'
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://www.marine-services-aman.com/sitemap.xml',
  }
}