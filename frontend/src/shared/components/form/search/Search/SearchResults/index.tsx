'use client'

import SearchResult from './SearchResult'
import styles from './styles.module.scss'

interface Props {
}

export default function SearchResults({  }: Props) {
  return (
    <ul className={styles.search__results}>
      <SearchResult />
    </ul>
  )
}
