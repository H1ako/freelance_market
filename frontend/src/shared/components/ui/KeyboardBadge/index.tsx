'use client'

import { Kbd } from '@mantine/core'
import styles from './styles.module.scss'

export interface Props {
  keys: string[] | string
  className?: string
}

export default function KeyboardBadge({ keys, className = '' }: Props) {
  return (
    <div className={`${styles.key_badge} ${className}`}>
      {Array.isArray(keys) ? (
        keys.map((key, index) => (
          <>
            <Kbd className={styles.key_badge__key} key={key}>
              {key}
            </Kbd>
            {index < keys.length - 1 && '+'}
          </>
        ))
      ) : (
        <>
          <Kbd className={styles.key_badge__key}>{keys}</Kbd>
        </>
      )}
    </div>
  )
}
