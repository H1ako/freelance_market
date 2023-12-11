'use client'

import styles from './styles.module.scss'

interface Props {
  placeholder: string
  search: any
}

export default function SearchBar({ placeholder, search }: Props) {
  return (
    <div className={styles.search__bar}>
    </div>
  )
}
