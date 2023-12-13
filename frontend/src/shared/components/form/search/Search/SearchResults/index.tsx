'use client'

import SearchResult from './SearchResult'
import styles from './styles.module.scss'

export interface Props {
  results: any
  setResults: (newResults: any) => void
}

export default function SearchResults({}: Props) {
  return (
    <ul className={styles.search__results}>
      <SearchResult />
    </ul>
  )
}
