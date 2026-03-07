import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat'
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Softnict | Data-Driven. AI-Powered.',
  description: 'Softnict delivers AI-powered data solutions for businesses. Intelligent insights, automation, and predictive analytics.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  )
}
