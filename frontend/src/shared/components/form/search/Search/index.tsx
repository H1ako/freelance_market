'use client'

import styles from './styles.module.scss'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'

interface Props {
  placeholder: string
  search: any
  results: any
}

export default function Search({ placeholder, search, results }: Props) {
  return (
    <div className={styles.search}>
      <SearchBar placeholder={placeholder} search={search} />
      <SearchResults results={results} />
    </div>
  )
}
