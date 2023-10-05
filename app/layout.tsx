// Global Css
import './globals.css'

// Fonts
import { Figtree } from 'next/font/google'

// Components
import Sidebar from '@/components/Sidebar/Sidebar'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'RasCloud',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
