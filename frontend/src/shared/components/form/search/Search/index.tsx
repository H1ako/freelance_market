'use client'

import styles from './styles.module.scss'
import SearchResults, { Props as SearchResultsProps } from './SearchResults'
import SearchBar, { Props as SearchBarProps } from './SearchBar'

interface Props extends SearchBarProps, SearchResultsProps {}

export default function Search({
  searchQuery,
  placeholder,
  search,
  results,
}: Props) {
  return (
    <div className={styles.search}>
      <SearchBar
        searchQuery={searchQuery}
        placeholder={placeholder}
        search={search}
      />
      {/* <SearchResults results={results} /> */}
    </div>
  )
}
