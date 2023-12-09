import Social from '@/shared/components/Social'
import styles from './Socials.module.css'

export default function Socials() {
  return (
    <ul className={styles.socials}>
        <Social url="#" name="Discrod">Discrod</Social>
        <Social url="#" name="Vkontakte">Vkontakte</Social>
        <Social url="#" name="Telegram">Telegram</Social>
    </ul>
  )
}
