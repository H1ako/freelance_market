import '../shared/assets/styles/normalize.scss'
import '../shared/assets/styles/fonts.scss'
import '../shared/assets/styles/variables.scss'
import '../shared/assets/styles/globals.scss'
import '@mantine/core/styles.layer.css';
import type { Metadata } from 'next'
import SiteSeachHeader from '@/shared/components/common/header/SiteSeachHeader'
import Footer from '@/shared/components/common/Footer'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

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
      <head>
        {/* <ColorSchemeScript /> */}
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark'>
          <SiteSeachHeader />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
