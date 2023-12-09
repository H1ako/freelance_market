import SmallLogo from '@/shared/components/ui/SmallLogo'
import Socials from '@/shared/components/Socials'
import styles from './FooterSocialsBlock.module.css'

export default function FooterSocialsBlock() {
  return (
    <div className={styles.footer__socials_block}>
        <SmallLogo />
        <Socials />
    </div>
  )
}
