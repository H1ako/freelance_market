'use client'

import { useMemo } from 'react'
import { Signal } from '@preact/signals-react'
import debounce from 'lodash.debounce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Input from '../../../Input'
import styles from './styles.module.scss'

export interface Props {
  placeholder: string
  search: (searchQuery: string) => void
  searchQuery: Signal<string>
}

export default function SearchBar({ searchQuery, placeholder, search }: Props) {
  const debounceSearch = useMemo(() => debounce(search, 300), [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchQuery.value = e.target.value

    debounceSearch(searchQuery.value)
  }

  return (
    <label className={styles.search__bar}>
      <FontAwesomeIcon className={styles.bar__icon} icon={faMagnifyingGlass} />
      <Input
        value={searchQuery.value}
        className={styles.search__input}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  )
}
