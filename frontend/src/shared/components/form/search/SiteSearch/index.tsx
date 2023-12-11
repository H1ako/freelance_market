'use client'

import Search from '@/shared/components/form/search/Search'

export default function SiteSearch() {
  const search = null
  const results = null

  return (
    <Search placeholder='Поиск по сайту' search={search} results={results} />
  )
}
