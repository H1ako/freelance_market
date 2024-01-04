'use client'

import PureButton, { Props as PureButtonProps } from '../PureButton'
import styles from './styles.module.scss'

export interface Props extends PureButtonProps {}

export default function Button({ className = '', ...defaultProps }: Props) {
  return (
    <PureButton className={`${styles.button} ${className}`} {...defaultProps} />
  )
}
