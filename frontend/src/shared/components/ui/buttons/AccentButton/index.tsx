'use client'

import Button, {
  Props as ButtonProps,
} from '@/shared/components/ui/buttons/Button'
import styles from './styles.module.scss'

export interface Props extends ButtonProps {}

export default function AccentButton({
  className = '',
  ...defaulProps
}: Props) {
  return (
    <Button className={`${styles.accent_btn} ${className}`} {...defaulProps} />
  )
}
