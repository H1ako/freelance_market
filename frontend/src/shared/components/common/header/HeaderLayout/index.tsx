'use client'

import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
}

export default function HeaderLayout({ children }: Props) {
  return <header className={styles.header}>{children}</header>
}
