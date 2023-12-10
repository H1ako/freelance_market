'use client'

import HeroBlock from '@/features/home/components/blocks/HeroBlock'
import QuestionsAnswersBlock from '@/features/home/components/blocks/QuestionsAnswersBlock'
import EasterEggBlock from '@/features/home/components/blocks/EasterEggBlock'
import styles from './styles.module.scss'

export default function HomeLayout() {
  return (
    <main className={styles.main}>
      <HeroBlock />
      <QuestionsAnswersBlock />
      <EasterEggBlock />
    </main>
  )
}
