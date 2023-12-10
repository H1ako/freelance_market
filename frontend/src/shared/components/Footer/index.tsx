'use client'

import FooterSocialsBlock from '@/shared/components/blocks/FooterSocialsBlock'
import FooterNavBlock from '@/shared/components/blocks/FooterNavBlock'
import GoTopButton from '@/shared/components/ui/GoTopButton'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer>
      <FooterSocialsBlock />
      <FooterNavBlock />
      <GoTopButton />
    </footer>
  )
}
