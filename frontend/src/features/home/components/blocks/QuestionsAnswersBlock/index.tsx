'use client'

import QuestionAnswerList from '../../QuestionAnswerList'
import styles from './styles.module.scss'

export default function QuestionsAnswersBlock() {
  return (
    <section className={styles.q_a_section}>
      <h2 className={styles.hero_section__title}>
        Вопросы & Ответы
      </h2>
      <QuestionAnswerList />
    </section>
  )
}
