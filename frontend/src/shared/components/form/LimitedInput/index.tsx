'use client'

import Input, { Props as InputProps } from '../Input'
import styles from './styles.module.scss'

interface Props extends Omit<InputProps, 'type' | 'maxLength'> {
  value: string
  setValue: (newValue: string) => void
  max: number
  className?: string
}

export default function LimitedInput({
  value,
  setValue,
  max,
  className = '',
  ...defaultProps
}: Props) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > max) {
      return
    }

    setValue(e.target.value)
  }

  return (
    <div className={`${styles.limited_input} ${className}`}>
      <Input
        value={value}
        onChange={changeHandler}
        type='text'
        maxLength={max}
        {...defaultProps}
      />
      <p className={styles.limited_input__limits}>
        {value.length}/{max}
      </p>
    </div>
  )
}
