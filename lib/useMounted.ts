'use client'

import { useEffect, useState } from 'react'

/** True once the component has mounted on the client. Avoids hydration mismatches for theme-dependent UI. */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}
