'use client'

import Image from 'next/image'
import styles from './styles.module.scss'
import coinImage from '@/features/home/assets/images/coin.png'

export default function EasterEggBlock() {
  return (
    <section className={styles.easter_egg_section}>
      <h2 className='easter_egg_section__quote'>Все зависит только от тебя</h2>
      <button className={styles.easter_egg_section__btn}>
        <Image
          width="512"
          height="512"
          className={styles.btn__coin}
          src={coinImage}
          alt='Coin'
        />
      </button>
    </section>
  )
}
