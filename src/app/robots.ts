import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === 'production'

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/thank-you/'],
    },
    sitemap: 'https://thekccf.org/sitemap.xml',
  }
}
