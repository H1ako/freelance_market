'use client'

import SearchResult from './SearchResult'
import styles from './styles.module.scss'

export interface Props {
  results: any
  setResults: (newResults: any) => void
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  search: (searchQuery: string) => void
  placeholder: string
}

export default function SearchResults({}: Props) {
  return (
    <ul className={styles.search__results}>
      <SearchResult />
    </ul>
  )
}
