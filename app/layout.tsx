import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import ClickSpark from '@/components/reactbits/ClickSpark'
import { profile, fullName } from '@/data/profile'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const title = `${fullName} | ${profile.title}`

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s | ${fullName}`,
  },
  description: profile.tagline,
  openGraph: {
    title,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: fullName,
    type: 'profile',
    images: [{ url: profile.photo, width: 1280, height: 1280, alt: fullName }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: profile.tagline,
    images: [profile.photo],
  },
  icons: { icon: profile.logo },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#08090e' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_ANALYTICS_ID

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable}`}
    >
      <body>
        <ThemeProvider>
          <ClickSpark
            sparkColor="rgb(34 211 238)"
            sparkSize={10}
            sparkRadius={18}
            sparkCount={8}
            duration={450}
          >
            {children}
          </ClickSpark>
        </ThemeProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  )
}
