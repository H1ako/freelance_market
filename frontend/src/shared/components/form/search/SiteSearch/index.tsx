'use client'

import { signal, useSignal } from '@preact/signals-react'
import Search from '../Search'

// const results = signal<number>(0)
// const searchQuery = signal<string>('')

export default function SiteSearch() {
  const results = useSignal<number>(0)
  const searchQuery = useSignal<string>('')

  const search = (query: string) => {}

  return (
    <Search
      searchQuery={searchQuery}
      placeholder='Поиск по сайту'
      search={search}
      results={results}
    />
  )
}
