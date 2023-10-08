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
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'


const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'RasCloud',
  description: 'Listen to music',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <Modalproviders />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}