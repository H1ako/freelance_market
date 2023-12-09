import styles from './Social.module.css'

interface Props {
  children?: React.ReactNode
  url: string
  name: string
  className?: string
}

export default function Social({
  url,
  name,
  children = null,
  className = '',
}: Props) {
  return (
    <li className={styles.socials__social}>
      <a
        href={url}
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
