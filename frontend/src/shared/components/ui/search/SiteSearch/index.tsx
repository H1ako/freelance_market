'use client'

import { useState } from 'react'
import Search from '../Search'

export default function SiteSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [results, setResults] = useState<any>([])

  const search = (query: string) => {
    console.log(query)
  }

  return (
    <Search
      search={search}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      results={results}
      placeholder='Поиск по сайту'
    />
  )
}
