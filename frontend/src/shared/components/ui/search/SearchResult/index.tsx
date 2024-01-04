'use client'

import Image from 'next/image'
import { Spotlight } from '@mantine/spotlight'
import styles from './styles.module.scss'

export interface Props {
  image?: string
  title: string
  description?: string
}

export default function SearchResult({
  title,
  image = '',
  description = '',
}: Props) {
  return (
    <Spotlight.Action className={styles.actions__action} highlightQuery={true}>
      {image && (
        <Image
          className={styles.action__icon}
          src={image}
          alt={title}
          width={50}
          height={50}
        />
      )}
      <div className={styles.action__info}>
        <h5 className={styles.action__title}>{title}</h5>
        {description && <p>{description}</p>}
      </div>
      {/* {item.new && <Badge variant='default'>new</Badge>} */}
    </Spotlight.Action>
  )
}
