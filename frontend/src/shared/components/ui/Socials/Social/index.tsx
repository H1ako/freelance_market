'use client'

import PureButton from '../../buttons/PureButton'
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
    <PureButton
      href={href}
      label={name}
      className={`${styles.social} ${className}`}
    >
      {children}
      {showName && <span className={styles.social__name}>{name}</span>}
    </PureButton>
  )
}
