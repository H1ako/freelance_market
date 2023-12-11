'use client'

import styles from './styles.module.scss'

interface Props {
  placeholder: string
  search: any
  results: any
}

export default function Search({ placeholder, search, results }: Props) {
  return <div className={styles.search}></div>
}
