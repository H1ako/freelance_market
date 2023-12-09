import FooterSocialsBlock from '@/shared/components/blocks/FooterSocialsBlock'
import FooterNavBlock from '@/shared/components/blocks/FooterNavBlock'
import GoTopButton from '@/shared/components/ui/GoTopButton'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
      <FooterSocialsBlock />
      <FooterNavBlock />
      <GoTopButton />
    </footer>
  )
}
