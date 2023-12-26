import Link from 'next/link'
import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
  href: string
  name: string
  className?: string
  showName?: boolean
}

export default function Social({
  href,
  name,
  children = null,
  className = '',
  showName = true,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={name}
      referrerPolicy='no-referrer'
      className={`${styles.social} ${className}`}
    >
      {children}
      {showName && <span className={styles.social__name}>{name}</span>}
    </Link>
  )
}
