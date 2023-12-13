'use client'

import styles from './styles.module.scss'
import SearchResults, { Props as SearchResultsProps } from './SearchResults'
import SearchBar, { Props as SearchBarProps } from './SearchBar'

interface Props extends SearchBarProps, SearchResultsProps {}

export default function Search({
  searchQuery,
  setSearchQuery,
  placeholder,
  search,
  results,
  setResults,
}: Props) {
  return (
    <search className={styles.search}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder={placeholder}
        search={search}
      />
      <SearchResults results={results} setResults={setResults} />
    </search>
  )
}
