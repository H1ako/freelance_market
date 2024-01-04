'use client'

import Link from 'next/link'
import { Tooltip } from '@mantine/core'
import styles from './styles.module.scss'

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  disabled?: boolean
  href?: string
  label?: string
}

export default function PureButton({
  className = '',
  href = undefined,
  disabled = false,
  label = '',
  ...defaultProps
}: Props) {
  const getContent = () => {
    if (href !== undefined) {
      return (
        <Link
          href={href}
          className={`${styles.pure_button} ${className}`}
          aria-disabled={disabled}
          aria-label={label}
          {...defaultProps}
        />
      )
    }

    return (
      <button
        className={`${styles.pure_button} ${className}`}
        aria-label={label}
        aria-disabled={disabled}
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
