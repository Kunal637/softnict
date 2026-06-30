import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans'
})

export const metadata = {
  title: 'Softnict | AI-Powered Software Agency',
  description: 'Softnict builds intelligent software products — AI integrations, custom ML systems, and data-driven automation for modern businesses.',
}

// Prevents flash of wrong theme on load
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('softnict-theme');
    var theme = stored || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
