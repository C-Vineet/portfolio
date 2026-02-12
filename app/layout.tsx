import type { Metadata, Viewport } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const crimsonText = Crimson_Text({
  variable: '--font-serif',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vineet Chaudhary - Design Director & Strategic Design Leader',
  description: 'Transforming complex enterprise challenges into elegant, user-centered solutions. UX Director with 15+ years leading design teams.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${crimsonText.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
