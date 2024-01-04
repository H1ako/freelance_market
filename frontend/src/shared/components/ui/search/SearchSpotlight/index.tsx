'use client'

import { useMemo } from 'react'
import debounce from 'lodash.debounce'
import SearchSpotlightBar from '../SearchSpotlightBar'
import SearchResults from '../SearchResults'
import SearchResult from '../SearchResult'
import SearchSpotlightRoot from '../SearchSpotlightRoot'

export interface Props {
  results: any
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  search: (searchQuery: string) => void
  placeholder: string
}

const data = [
  'Home',
  'About us',
  'Contacts',
  'Blog',
  'Careers',
  'Terms of service',
]

export default function SearchSpotlight({
  results,
  searchQuery,
  setSearchQuery,
  search,
  placeholder,
}: Props) {
  const debouncedSearch = useMemo(() => debounce(search, 300), [search])
  const items = data.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase().trim())
  )

  const onSearch = (e: React.ChangeEvent) => {
    debouncedSearch(searchQuery)
  }

  return (
    <SearchSpotlightRoot
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <SearchSpotlightBar onChange={onSearch} placeholder={placeholder} />
      <SearchResults>
        {items.map(item => (
          <SearchResult key={item} title={item} />
        ))}
      </SearchResults>
    </SearchSpotlightRoot>
  )
}
