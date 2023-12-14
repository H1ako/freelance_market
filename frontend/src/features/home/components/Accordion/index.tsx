'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

interface Props {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const toggleActivity = () => setIsActive(prevValue => !prevValue)

  return (
    <div className={styles.accordion} data-active={isActive}>
      <div className={styles.accordion__title}>
        <button onClick={toggleActivity} className={styles.title__btn}>
          {title}
          <FontAwesomeIcon className={styles.btn__state_icon} icon={faPlus} />
        </button>
      </div>
      <div className={styles.accordion__content}>
        <p>{children}</p>
      </div>
    </div>
  )
}
