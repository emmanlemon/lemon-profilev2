'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in view so the navbar can highlight it.
 */
export function useActiveSection(
  ids: string[],
  rootMargin = '-40% 0px -55% 0px'
) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin, threshold: 0 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return active
}
