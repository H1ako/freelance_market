'use client'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import NavPanelList from '../NavPanelList'
import NavPanelItem from '../NavPanelItem'
import NavPanelItemOptions from '../NavPanelItemOptions'
import NavPanelItemOption from '../NavPanelItemOption'
import styles from './styles.module.scss'

interface Props {}

export default function NavPanel({}: Props) {
  return (
    <nav aria-label='Mobile Navigation Panel' className={styles.nav_panel}>
      <NavPanelList>
        <NavPanelItem title={'Главная'} icon={faHouse}>
          <NavPanelItemOptions>
            <NavPanelItemOption
              icon={faHouse}
              title={'Главная'}
              onClick={() => {}}
            />
          </NavPanelItemOptions>
        </NavPanelItem>
      </NavPanelList>
    </nav>
  )
}
