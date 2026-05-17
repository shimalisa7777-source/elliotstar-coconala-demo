import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '店舗・サロン向けスマホ対応HP制作サンプル｜Elliot Star',
  description: 'Instagram・LINE・Googleマップへの導線を整理した、店舗・サロン向け1ページホームページ制作サンプルです。Elliot Starによる制作デモサイトです。',
  keywords: ['ホームページ制作', 'サロン', '店舗', 'スマホ対応', 'LP制作', '1ページHP', 'Web導線'],
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: '店舗・サロン向けスマホ対応HP制作サンプル｜Elliot Star',
    description: 'Instagram・LINE・Googleマップへの導線を整理した、店舗・サロン向け1ページホームページ制作サンプルです。',
    siteName: 'Elliot Star デモサイト',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: '店舗・サロン向けスマホ対応ホームページ制作サンプル | Elliot Star',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '店舗・サロン向けスマホ対応HP制作サンプル｜Elliot Star',
    description: 'Instagram・LINE・Googleマップへの導線を整理した、店舗・サロン向け1ページホームページ制作サンプルです。',
    images: ['/opengraph-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#2d2a26',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className={`${notoSerifJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}