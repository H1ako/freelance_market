import Button from '@/shared/components/ui/Button'
import AccentButton from '@/shared/components/ui/AccentButton'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero_section}>
        <h1 className={styles.hero_section__title}>Workerss</h1>
        <h2 className={styles.hero_section__subtitle}>Фриланс маркет для эффективного роста и успеха</h2>
        <div className="hero_section__buttons">
          <Button href="/login">Присоединиться</Button>
          <AccentButton href="/login">уже участник</AccentButton>
        </div>
      </section>
    </main>
  )
}
