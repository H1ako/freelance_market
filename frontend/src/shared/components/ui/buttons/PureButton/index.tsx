'use client'

import Link from 'next/link'
import { Tooltip } from '@mantine/core'
import styles from './styles.module.scss'

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string
  label?: string
}

export default function PureButton({
  className = '',
  href = undefined,
  label = '',
  ...defaultProps
}: Props) {
  const getContent = () => {
    if (href !== undefined) {
      return (
        <Link
          href={href}
          className={`${styles.pure_button} ${className}`}
          aria-label={label}
          {...defaultProps}
        />
      )
    }

    return (
      <button
        aria-label={label}
        className={`${styles.pure_button} ${className}`}
        {...defaultProps}
      />
    )
  }

  const content = getContent()

  return label ? (
    <Tooltip
      className={styles.pure_button__tip}
      zIndex={999999}
      offset={16}
      label={label}
    >
      {content}
    </Tooltip>
  ) : (
    <>{content}</>
  )
}
