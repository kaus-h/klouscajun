import type { Metadata, Viewport } from 'next'
import { Eczar, Work_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

const eczar = Eczar({
  subsets: ['latin'],
  variable: '--font-eczar',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "K.Lou's Cajun Shack & Catering | Authentic Louisiana Food in Phoenix",
    template: "%s | K.Lou's Cajun Shack & Catering"
  },
  description: "Authentic Cajun & Creole cuisine in Phoenix/Tempe, AZ. Catering, crawfish boils, fried catfish, jambalaya & more. Family-run, Black-owned. Call (602) 596-8036.",
  keywords: ['Cajun catering Phoenix', 'Cajun food truck Phoenix', 'authentic Louisiana food Arizona', 'crawfish boil catering Arizona', 'Cajun food Tempe', 'fried catfish Phoenix', 'jambalaya catering Arizona', 'snowballs Phoenix', 'Cajun pop-up Arizona'],
  authors: [{ name: "K.Lou's Cajun Shack & Catering" }],
  creator: "K.Lou's Cajun Shack & Catering",
  publisher: "K.Lou's Cajun Shack & Catering",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://klouscajun.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "K.Lou's Cajun Shack & Catering | Authentic Louisiana Food in Phoenix",
    description: "Authentic Cajun & Creole cuisine in Phoenix/Tempe, AZ. Catering, crawfish boils, fried catfish, jambalaya & more.",
    url: 'https://klouscajun.com',
    siteName: "K.Lou's Cajun Shack & Catering",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "K.Lou's Cajun Shack & Catering",
    description: "Authentic Cajun & Creole cuisine in Phoenix/Tempe, AZ.",
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B0000' },
    { media: '(prefers-color-scheme: dark)', color: '#2B2B2B' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${eczar.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: "K.Lou's Cajun Shack & Catering, LLC",
              image: 'https://klouscajun.com/og-image.jpg',
              '@id': 'https://klouscajun.com',
              url: 'https://klouscajun.com',
              telephone: '+1-602-596-8036',
              servesCuisine: ['Cajun', 'Creole', 'Southern', 'Seafood'],
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tempe',
                addressRegion: 'AZ',
                addressCountry: 'US',
              },
              areaServed: ['Phoenix, AZ', 'Tempe, AZ'],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '10:30',
                  closes: '17:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Friday', 'Saturday'],
                  opens: '11:00',
                  closes: '17:30',
                },
              ],
              sameAs: [],
              hasMenu: 'https://klouscajun.com/menu',
              acceptsReservations: true,
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
