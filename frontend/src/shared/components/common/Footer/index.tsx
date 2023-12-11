'use client'

import FooterSocialsBlock from './FooterSocialsBlock'
import FooterNavBlock from './FooterNavBlock'
import GoTopButton from '@/shared/components/ui/buttons/GoTopButton'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterSocialsBlock />
      <FooterNavBlock />
      <GoTopButton className={styles.footer__go_top_btn} />
    </footer>
  )
}
