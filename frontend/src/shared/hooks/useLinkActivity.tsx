'use client'

import { usePathname } from 'next/navigation'

export default function useLinkActivity(href: string) {
  const pathname = usePathname()
  const isActive = href === pathname

  return { isActive }
}
