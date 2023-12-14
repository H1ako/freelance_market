'use client'

import AccordionList from '../../AccordionList'
import Accordion from '../../Accordion'
import styles from './styles.module.scss'

export default function QuestionsAnswersBlock() {
  return (
    <section className={styles.q_a_section}>
      <h2 className={styles.hero_section__title}>Вопросы & Ответы</h2>
      <AccordionList>
        <Accordion title='Легко ли начать?'>
          Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
          pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
          aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
          commodo massa mollis.
        </Accordion>
        <Accordion title='Легко ли начать?'>
          Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
          pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
          aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
          commodo massa mollis.
        </Accordion>
        <Accordion title='Легко ли начать?'>
          Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
          pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
          aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
          commodo massa mollis.
        </Accordion>
      </AccordionList>
    </section>
  )
}
