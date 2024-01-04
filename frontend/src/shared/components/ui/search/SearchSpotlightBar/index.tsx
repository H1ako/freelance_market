'use client'

import { Spotlight } from '@mantine/spotlight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

export interface Props {
  placeholder: string
  onChange?: (e: React.ChangeEvent) => void
}

export default function SearchSpotlightBar({ placeholder, onChange }: Props) {
  return (
    <Spotlight.Search
      onChange={onChange}
      placeholder={placeholder}
      leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      className={styles.content__search}
      classNames={{
        input: styles.search__input,
        section: styles.search__icon,
      }}
    />
  )
}
