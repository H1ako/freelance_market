'use client'

import { Spotlight } from '@mantine/spotlight'
import styles from './styles.module.scss'

export interface Props {
  children: React.ReactNode
  searchQuery: string
  setSearchQuery: (newSearchQuery: string) => void
}

export default function SearchSpotlightRoot({
  children,
  searchQuery,
  setSearchQuery,
}: Props) {
  return (
    <Spotlight.Root
      query={searchQuery}
      classNames={{
        overlay: styles.search_spotlight__overlay,
        inner: styles.search_spotlight__inner,
        content: styles.inner__content,
      }}
      onQueryChange={setSearchQuery}
      withinPortal={false}
      className={styles.search_spotlight}
      scrollable={true}
      shortcut={['mod + K', 'mod + P', '/']}
    >
      {children}
    </Spotlight.Root>
  )
}
