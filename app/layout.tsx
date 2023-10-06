// Global Css
import './globals.css'

// Fonts
import { Figtree } from 'next/font/google'

// Supabase
import SupabaseProvider from '@/providers/SupabaseProvider'


// Components
import Sidebar from '@/components/Sidebar/Sidebar'
import UserProvider from '@/providers/UserProvider'
import Modalproviders from '@/providers/ModalProviders'


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
        <SupabaseProvider>
          <UserProvider>
            <Modalproviders />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}