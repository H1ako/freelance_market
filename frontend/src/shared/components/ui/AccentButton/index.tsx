import Button, { Props as ButtonProps } from '@/shared/components/ui/Button'
import styles from './AccentButton.module.css'

export default function AccentButton({
  className='',
  ...defaulProps
}: ButtonProps) {
  return (
    <Button className={`${styles.active_btn} ${className}`} {...defaulProps} />
  )
}
