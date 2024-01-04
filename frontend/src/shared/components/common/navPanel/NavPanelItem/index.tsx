'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import PureButton from '@/shared/components/ui/buttons/PureButton'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  title: string
  children: React.ReactNode
  href?: string
}

export default function NavPanelItem({ icon, title, href, children }: Props) {
  return (
    <div className={styles.item__wrapper}>
      <PureButton href={href} label={title} className={styles.wrapper__btn}>
        <FontAwesomeIcon icon={icon} className={styles.btn__icon} />
      </PureButton>
      {children}
    </div>
  )
}
