'use client'

import FooterTopBlock from './FooterTopBlock'
import FooterNavBlock from './FooterNavBlock';
import GoTopButton from '@/shared/components/ui/buttons/GoTopButton'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterTopBlock />
      <FooterNavBlock />
      <GoTopButton className={styles.footer__go_top_btn} />
    </footer>
  )
}
