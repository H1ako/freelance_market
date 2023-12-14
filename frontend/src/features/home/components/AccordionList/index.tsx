'use client'

import Accordion from '@/features/home/components/Accordion'
import styles from './styles.module.scss'

export default function AccordionList() {
  return (
    <ul className={styles.accordion_list}>
      <li className={styles.accordion_list__el}>
        <Accordion title='Легко ли начать?'>
          Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
          pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
          aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
          commodo massa mollis.
        </Accordion>
      </li>
      <li className={styles.accordion_list__el}>
        <Accordion title='Легко ли начать?'>
          Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
          pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
          aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
          commodo massa mollis.
        </Accordion>
      </li>
      <li className={styles.accordion_list__el}>
        <Accordion title='Легко ли начать?'>
          Paragraph: Lorem ipsum dolor sit amet consectetur. In eu elit netus
          pretium urna purus rutrum habitant cras. Vitae enim id nec sit sed
          aliquam vitae in. Commodo congue sed vitae fames. Eleifend felis augue
          commodo massa mollis.
        </Accordion>
      </li>
    </ul>
  )
}
