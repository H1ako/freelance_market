'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  title: string
  onClick: () => void
}

export default function NavPanelItemOption({}: Props) {
  return (
    <li className={styles.list__item}>
      <button className={styles.item__btn}></button>
    </li>
  )
}
