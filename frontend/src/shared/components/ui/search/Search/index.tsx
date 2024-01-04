'use client'

import SearchSpotlight, {
  Props as SearchSpotlightProps,
} from '../SearchSpotlight'
import { spotlight } from '@mantine/spotlight'
import SearchBar from '../SearchBar'
import styles from './styles.module.scss'

interface Props extends SearchSpotlightProps {}

export default function Search({
  searchQuery,
  setSearchQuery,
  placeholder,
  search,
  results,
}: Props) {
  const openSearch = () => spotlight.open()

  return (
    <search className={styles.search}>
      <SearchBar
        openSearch={openSearch}
        searchQuery={searchQuery}
        placeholder={placeholder}
      />
      <SearchSpotlight
        placeholder={placeholder}
        results={results}
        search={search}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </search>
  )
}
