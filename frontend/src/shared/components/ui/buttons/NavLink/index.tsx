'use client'

import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

export interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

export default function NavLink({
  className = '',
  href,
  ...defaultProps
}: Props) {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <a
      className={`${styles.nav_link} ${className}`}
      href={href}
      aria-disabled={isActive}
      data-active={isActive}
      {...defaultProps}
    />
  )
}
