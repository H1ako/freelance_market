'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import PureButton from '@/shared/components/ui/buttons/PureButton'
import useLinkActivity from '@/shared/hooks/useLinkActivity'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  title: string
  children?: React.ReactNode
  href: string
}

export default function NavPanelItem({ icon, title, href, children }: Props) {
  const { isActive } = useLinkActivity(href)

  return (
    <div className={styles.item__wrapper}>
      <PureButton
        disabled={isActive}
        href={href}
        label={title}
        className={`${styles.wrapper__btn} ${
          isActive ? styles.btn_active : ''
        }`}
      >
        <FontAwesomeIcon icon={icon} className={styles.btn__icon} />
      </PureButton>
      {children}
    </div>
  )
}
