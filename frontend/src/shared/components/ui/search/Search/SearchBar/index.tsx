'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import KeyboardBadge from '@/shared/components/ui/KeyboardBadge'
import styles from './styles.module.scss'

export interface Props {
  placeholder: string
  searchQuery: string
  openSearch: () => void
}

export default function SearchBar({ searchQuery, placeholder, openSearch }: Props) {
  const value = searchQuery.length ? searchQuery : placeholder
  const isActive = !!searchQuery.length

  return (
    <button className={styles.search__bar} onClick={openSearch}>
      <span className={styles.bar__icon}>
        <FontAwesomeIcon
          className={styles.icon__svg}
          icon={faMagnifyingGlass}
        />
      </span>
      <p className={styles.bar__input} data-active={isActive}>
        {value}
      </p>
      <KeyboardBadge className={styles.bar__badge} keys={['Ctrl', 'K']} />
    </button>
  )
}
