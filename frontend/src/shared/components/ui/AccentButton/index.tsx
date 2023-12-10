'use client'

import Button, { Props as ButtonProps } from '@/shared/components/ui/Button'
import styles from './styles.module.scss'

export default function AccentButton({
  className='',
  ...defaulProps
}: ButtonProps) {
  return (
    <Button className={`${styles.accent_btn} ${className}`} {...defaulProps} />
  )
}
