'use client'

import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
  href: string
}

export default function FooterNavLink({ children, href }: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className={styles.list__link} data-active={isActive}>
      <a href={href} className={styles.link__anchor}>
        {children}
      </a>
    </li>
  )
}
