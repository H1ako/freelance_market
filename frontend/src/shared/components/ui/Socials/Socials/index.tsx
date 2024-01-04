import { Children } from 'react'
import Social from '../Social'
import styles from './styles.module.scss'

type ChildType = typeof Social

interface Props {
  children: React.ReactElement<ChildType> | React.ReactElement<ChildType>[]
}

export default function Socials({ children }: Props) {
  return (
    <ul className={styles.socials}>
      {Children.toArray(children).map((social, key) => (
        <li key={key} className={styles.socials__social}>
          {social}
        </li>
      ))}
    </ul>
  )
}
