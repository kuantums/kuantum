import '@/style/globals.css'
import { Providers } from './providers'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Kuantum',
  description: 'Bakul Pasar Is Powerfull',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
