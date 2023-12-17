'use client'

import FooterNavList from './FooterNavList'
import NavLink from '@/shared/components/ui/buttons/NavLink'
import styles from './styles.module.scss'

export default function FooterNavBlock() {
  return (
    <nav aria-label='footer navigation' className={styles.footer__nav}>
      <FooterNavList>
        <NavLink href='/'>Главная</NavLink>
        <NavLink href='/market'>Биржа</NavLink>
        <NavLink href='/support'>Тех. Поддержка</NavLink>
      </FooterNavList>
    </nav>
  )
}
