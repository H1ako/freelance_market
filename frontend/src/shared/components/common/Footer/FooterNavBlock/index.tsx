import FooterNavLink from './FooterNavLink'
import styles from './styles.module.scss'

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
