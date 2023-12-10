'use client'

import QuestionAnswer from '@/features/home/components/QuestionAnswer'
import styles from './styles.module.scss'

export default function QuestionAnswerList() {
  return (
    <ul className={styles.q_a_list}>
      <QuestionAnswer title='Легко ли начать?'>
        Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
        pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
        aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
        commodo massa mollis.
      </QuestionAnswer>
      <QuestionAnswer title='Как получить первый заказ?'>
        Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
        pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
        aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
        commodo massa mollis.
      </QuestionAnswer>
    </ul>
  )
}
