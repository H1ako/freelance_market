import { useRouter } from 'next/router'
import styles from './FooterNavLink.module.css'

interface Props {
  children: React.ReactNode
  href: string
}

export default function FooterNavLink({ children, href }: Props) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <li className={styles.list__link} data-active={isActive}>
      <a href={href} className={styles.link__anchor}>
        {children}
      </a>
    </li>
  )
}
