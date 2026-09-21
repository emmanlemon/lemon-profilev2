'use client'

import { useTheme } from 'next-themes'
import { LuSun, LuMoon } from 'react-icons/lu'
import { useMounted } from '@/lib/useMounted'
import { cn } from '@/lib/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()
  const isDark = mounted ? resolvedTheme === 'dark' : true

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-fg transition hover:border-accent/60 hover:text-accent',
        className
      )}
    >
      {isDark ? <LuSun className="h-4 w-4" /> : <LuMoon className="h-4 w-4" />}
    </button>
  )
}
