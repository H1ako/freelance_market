import styles from './Button.module.css'

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string | undefined
}

export default function Button({
  className = '',
  href = undefined,
  ...defaultProps
}: Props) {
  if (href !== undefined) {
    return (
      <a
        href={href}
        className={`${styles.button} ${className}`}
        {...defaultProps}
      />
    )
  }
  return (
    <button className={`${styles.button} ${className}`} {...defaultProps} />
  )
}
