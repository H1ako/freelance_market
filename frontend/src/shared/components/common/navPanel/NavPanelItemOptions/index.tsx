'use client'

import styles from './styles.module.scss'

interface Props {
}

export default function NavPanelItemOptions({}: Props) {
  return (
    <li className={styles.list__item}>
      <button className={styles.item__btn}>
      </button>
    </li>
  )
}
