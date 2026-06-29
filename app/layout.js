import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-space-grotesk'
})

export const metadata = {
  title: 'Softnict | AI-Powered Software Solutions',
  description: 'Softnict builds intelligent software products — AI integrations, custom ML systems, and data-driven automation for modern businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-space-grotesk antialiased`}>
        {children}
      </body>
    </html>
  )
}
