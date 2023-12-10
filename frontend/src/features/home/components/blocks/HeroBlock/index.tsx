'use client'

import Button from '@/shared/components/ui/Button'
import AccentButton from '@/shared/components/ui/AccentButton'
import styles from './styles.module.scss'

export default function HeroBlock() {
  return (
    <section className={styles.hero_section}>
      <h1 className={styles.hero_section__title}>Workerss</h1>
      <h4 className={styles.hero_section__subtitle}>
        Фриланс маркет для эффективного роста и успеха
      </h4>
      <div className={styles.hero_section__buttons}>
        <AccentButton href='/login'>Присоединиться</AccentButton>
        <Button href='/login'>Уже участник</Button>
      </div>
    </section>
  )
}
