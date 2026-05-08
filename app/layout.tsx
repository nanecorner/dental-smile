import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Dental Smile | Clínica Dental',
  description: 'Tu sonrisa, nuestra prioridad. Clínica dental con más de 15 años de experiencia ofreciendo tratamientos de calidad.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-smile.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon-smile.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
