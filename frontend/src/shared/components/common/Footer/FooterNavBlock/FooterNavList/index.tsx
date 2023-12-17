'use client'

import { Children, useMemo } from 'react'
import NavLink from '@/shared/components/ui/buttons/NavLink'
import styles from './styles.module.scss'

type ChildType = typeof NavLink

interface Props {
  children: React.ReactElement<ChildType> | React.ReactElement<ChildType>[]
}

export default function FooterNavList({ children }: Props) {
  const computedChildren = useMemo(
    () =>
      Children.toArray(children)?.map((link, key) => (
        <li key={key} className={styles.list__link}>
          {link}
        </li>
      )),
    [children]
  )

  return <ul className={styles.nav__list}>{computedChildren}</ul>
}
