import '../shared/assets/styles/normalize.scss'
import '../shared/assets/styles/fonts.scss'
import '../shared/assets/styles/variables.scss'
import '../shared/assets/styles/globals.scss'
import type { Metadata } from 'next'
import Footer from '../shared/components/Footer'
import SiteSearchBlock from '@/shared/components/blocks/SiteSearchBlock'

export const metadata: Metadata = {
  title: 'Workerss',
  description: 'Workerss. A freelance market',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <SiteSearchBlock />
        {children}
        <Footer />
      </body>
    </html>
  )
}
