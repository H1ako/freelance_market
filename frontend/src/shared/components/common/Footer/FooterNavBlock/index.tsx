'use client'

import { useRef } from 'react'
import FooterNavList from './FooterNavList'
import NavLink from '@/shared/components/ui/buttons/NavLink'
import styles from './styles.module.scss'

export default function FooterNavBlock() {
  const navRef = useRef<HTMLElement>(null)

  const onAttention = (e: any) => {
    if (!navRef.current) return

    navRef.current.classList.remove(styles.nav_hiden_thumb)
    navRef.current?.removeEventListener(
      'transitionend',
      morphThumbToDefault,
      false
    )

    const rect = e.target.getBoundingClientRect()
    const topPosition = rect.top
    const parentTop = navRef.current.getBoundingClientRect().top
    const topFromParent = topPosition - parentTop
    const height = rect.height

    morphThumb(topFromParent, height)
  }

  const morphThumb = (thumbTop: number, thumbHeight: number) => {
    if (!navRef.current) return

    navRef.current.style.setProperty('--thumb-top', `${thumbTop}px`)
    navRef.current.style.setProperty('--thumb-height', `${thumbHeight}px`)
  }

  const hideThumb = () => {
    if (!navRef.current) return

    navRef.current.addEventListener('transitionend', morphThumbToDefault, false)
    navRef.current.classList.add(styles.nav_hiden_thumb)
  }

  const morphThumbToDefault = () => {
    if (!navRef.current) return

    morphThumb(0, 0)
    navRef.current.removeEventListener(
      'transitionend',
      morphThumbToDefault,
      false
    )
  }

  return (
    <nav
      aria-label='footer navigation'
      className={styles.footer__nav}
      ref={navRef}
    >
      <FooterNavList>
        <NavLink
          onAttention={onAttention}
          onMouseLeave={hideThumb}
          onBlur={hideThumb}
          href='/'
        >
          Главная
        </NavLink>
        <NavLink
          onAttention={onAttention}
          onMouseLeave={hideThumb}
          onBlur={hideThumb}
          href='/market'
        >
          Биржа
        </NavLink>
        <NavLink
          onAttention={onAttention}
          onMouseLeave={hideThumb}
          onBlur={hideThumb}
          href='/support'
        >
          Тех. Поддержка
        </NavLink>
      </FooterNavList>
    </nav>
  )
}
