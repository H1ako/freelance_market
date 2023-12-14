'use client'

import Image from 'next/image'
import styles from './styles.module.scss'
import coinImage from '@/features/home/assets/images/coin.png'
import BgImage from '@/features/home/assets/images/gradient-bg.svg'

export default function EasterEggBlock() {
  return (
    <section className={styles.easter_egg_section}>
      <Image
        width='390'
        height='610'
        className={styles.easter_egg_section__bg}
        src={BgImage}
        alt='BG'
      />
      <h3 className={styles.easter_egg_section__quote}>
        Все зависит только от тебя
      </h3>
      <button className={styles.easter_egg_section__btn}>
        <Image
          width='512'
          height='512'
          className={styles.btn__coin}
          src={coinImage}
          alt='Coin'
        />
      </button>
    </section>
  )
}
