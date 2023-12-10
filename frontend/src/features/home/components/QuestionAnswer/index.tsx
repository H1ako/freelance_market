'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

interface Props {
  title: string
  children: React.ReactNode
}

export default function QuestionAnswer({ title, children }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const toggleActivity = () => setIsActive(prevValue => !prevValue)

  return (
    <li className={styles.q_a_list__el} data-active={isActive}>
      <div className='el__question'>
        <button onClick={toggleActivity} className={styles.question__btn}>
          {title}
          <FontAwesomeIcon className={styles.btn__state_icon} icon={faPlus} />
        </button>
      </div>
      <div className='el__answer'>{children}</div>
    </li>
  )
}
