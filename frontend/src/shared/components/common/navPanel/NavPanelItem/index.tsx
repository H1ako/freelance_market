'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  children: React.ReactNode
  title: string
}

export default function NavPanelItem({ icon, children }: Props) {
  return (
    <div className={styles.item__wrapper}>
      <button className={styles.item__btn}>
        <FontAwesomeIcon icon={icon} className={styles.item__icon} />
      </button>
      {children}
    </div>
  )
}
