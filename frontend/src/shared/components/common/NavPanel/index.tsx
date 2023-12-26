'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

interface Props {}

export default function NavPanel({}: Props) {
  return (
    <nav aria-label='Mobile Navigation Panel' className={styles.nav_panel}>
      <ul className={styles.nav_panel__list}>
        <li className={styles.list__item}>
          <FontAwesomeIcon icon={faHouse} className={styles.item__icon} />
          <h6 className={styles.item__title}>Главная</h6>
        </li>
      </ul>
    </nav>
  )
}
