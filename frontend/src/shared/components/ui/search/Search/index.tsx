'use client'

import { useState } from 'react'
import SearchResults, { Props as SearchResultsProps } from './SearchResults'
import SearchBar, { Props as SearchBarProps } from './SearchBar'
import styles from './styles.module.scss'

interface Props extends SearchBarProps, SearchResultsProps {}

export default function Search({
  searchQuery,
  setSearchQuery,
  placeholder,
  search,
  results,
  setResults,
}: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const openSearch = () => setIsActive(true)

  return (
    <search className={styles.search}>
      <SearchBar
        openSearch={openSearch}
        searchQuery={searchQuery}
        placeholder={placeholder}
      />
      <SearchResults
        placeholder={placeholder}
        results={results}
        setResults={setResults}
        search={search}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </search>
  )
}
