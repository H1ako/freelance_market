import SmallLogo from '@/shared/components/ui/SmallLogo'
import Socials from '@/shared/components/ui/Socials'
import Social from '@/shared/components/ui/Socials/Social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.scss'

export default function FooterTopBlock() {
  return (
    <div className={styles.footer__top_block}>
      <SmallLogo />
      <Socials>
        <Social showName={false} href='#' name='Discrod'>
          <FontAwesomeIcon icon={faDiscord} />
        </Social>
        <Social showName={false} href='#' name='Vkontakte'>
          <FontAwesomeIcon icon={faVk} />
        </Social>
        <Social showName={false} href='#' name='Telegram'>
          <FontAwesomeIcon icon={faTelegram} />
        </Social>
      </Socials>
    </div>
  )
}
