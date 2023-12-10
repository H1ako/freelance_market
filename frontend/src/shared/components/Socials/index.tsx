import Social from '@/shared/components/Social'
import styles from './styles.module.scss'

export default function Socials() {
  return (
    <ul className={styles.socials}>
        <Social href="#" name="Discrod">Discrod</Social>
        <Social href="#" name="Vkontakte">Vkontakte</Social>
        <Social href="#" name="Telegram">Telegram</Social>
    </ul>
  )
}
