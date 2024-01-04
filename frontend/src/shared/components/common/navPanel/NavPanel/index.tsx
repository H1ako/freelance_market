'use client'

import {
  faChartLine,
  faComments,
  faHouse,
  faRightToBracket,
  faStore,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
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
        <NavPanelItem href='/' title='Главная' icon={faHouse} />
        <NavPanelItem href='/market' title='Биржа' icon={faStore}>
          <NavPanelItemOptions>
            <NavPanelItemOption
              icon={faHouse}
              title={'Главная'}
              onClick={() => {}}
            />
          </NavPanelItemOptions>
        </NavPanelItem>
        <NavPanelItem href='/stats' title='Статистика' icon={faChartLine} />
        <NavPanelItem href='/chats' title='Чаты' icon={faComments} />
        <NavPanelItem href='/profile' title='Профиль' icon={faUser}>
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
