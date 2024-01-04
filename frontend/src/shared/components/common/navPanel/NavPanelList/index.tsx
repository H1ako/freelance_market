'use client'

import { Children } from 'react'
import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
}

export default function NavPanelList({ children }: Props) {
  return (
    <ul className={styles.nav_panel__items}>
      {Children.toArray(children).map((child, key) => (
        <li key={key} className={styles.list__item}>
          {child}
        </li>
      ))}
    </ul>
  )
}
