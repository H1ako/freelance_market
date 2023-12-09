import FooterNavLink from '@/shared/components/FooterNavLink'
import styles from './FooterNavBlock.module.css'

export default function FooterNavBlock() {
  return (
    <nav aria-label='footer navigation' className={styles.footer__nav}>
      <ul className={styles.nav__list}>
        <FooterNavLink href='/'>Главная</FooterNavLink>
        <FooterNavLink href='/market'>Биржа</FooterNavLink>
        <FooterNavLink href='/support'>Тех. Поддержка</FooterNavLink>
      </ul>
    </nav>
  )
}
