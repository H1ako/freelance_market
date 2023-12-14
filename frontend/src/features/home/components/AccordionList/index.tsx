'use client'

import styles from './styles.module.scss'
import { Children } from 'react'
import Accordion from '../Accordion/index'

type ChildType = typeof Accordion

interface Props {
  children: React.ReactElement<ChildType> | React.ReactElement<ChildType>[]
}

export default function AccordionList({ children }: Props) {
  return (
    <ul className={styles.accordion_list}>
      {Children.toArray(children)?.map((accordion, key) => (
        <li key={key} className={styles.accordion_list__el}>
          {accordion}
        </li>
      ))}
    </ul>
  )
}
