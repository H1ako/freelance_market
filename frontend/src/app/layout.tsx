import type { Metadata } from 'next'
import '../shared/assets/styles/normalize.css'
import '../shared/assets/styles/globals.css'

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
      <body>{children}</body>
    </html>
  )
}
