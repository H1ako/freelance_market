'use client'

import { Signal } from '@preact/signals-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Input from '../../../Input'
import styles from './styles.module.scss'

interface Props {
  placeholder: string
  search: any
  searchQuery: Signal<string>
}

export default function SearchBar({ searchQuery, placeholder, search }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchQuery.value = e.target.value
  }

  return (
    <label className={styles.search__bar}>
      <FontAwesomeIcon className={styles.bar__icon} icon={faMagnifyingGlass} />
      <Input className={styles.search__input} onChange={handleChange} />
    </label>
  )
}
