'use client'

import styles from './styles.module.scss'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export default function Input({ className = '', ...defaultProps }: Props) {
  return <input className={`${styles.input} ${className}`} {...defaultProps} />
}
