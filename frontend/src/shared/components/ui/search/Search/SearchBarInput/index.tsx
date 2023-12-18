'use client'

import { useMemo } from 'react'
import debounce from 'lodash.debounce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Input from '@/shared/components/form/Input'
import styles from './styles.module.scss'

export interface Props {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  search: (searchQuery: string) => void
  placeholder: string
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  placeholder,
  search,
}: Props) {
  const debouncedSearch = useMemo(() => debounce(search, 300), [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)

    debouncedSearch(e.target.value)
  }

  return (
    <label className={styles.search__bar}>
      <span className={styles.bar__icon}>
        <FontAwesomeIcon className={styles.icon__svg} icon={faMagnifyingGlass} />
      </span>
      <Input
        value={searchQuery}
        className={styles.bar__input}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  )
}
