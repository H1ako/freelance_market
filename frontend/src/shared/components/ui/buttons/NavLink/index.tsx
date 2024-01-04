'use client'

import Link from 'next/link'
import styles from './styles.module.scss'
import useLinkActivity from '@/shared/hooks/useLinkActivity'

export interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  onAttention?: any
  className?: string
}

export default function NavLink({
  className = '',
  onAttention = undefined,
  href,
  ...defaultProps
}: Props) {
  const { isActive } = useLinkActivity(href)

  return (
    <Link
      onMouseEnter={onAttention}
      onFocus={onAttention}
      className={`${styles.nav_link} ${className}`}
      href={href}
      aria-disabled={isActive}
      data-active={isActive}
      {...defaultProps}
    />
  )
}
