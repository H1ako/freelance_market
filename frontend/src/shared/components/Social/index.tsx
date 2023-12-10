import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
  href: string
  name: string
  className?: string
}

export default function Social({
  href,
  name,
  children = null,
  className = '',
}: Props) {
  return (
    <li className={styles.socials__social}>
      <a
        href={href}
        no-referrerPolicy=''
        aria-label={name}
        className={`${styles.social__button} ${className}`}
      >
        {children}
        {name}
      </a>
    </li>
  )
}
