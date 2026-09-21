'use client'

import Image from 'next/image'
import { LuArrowUp } from 'react-icons/lu'
import { profile, fullName } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src={profile.logo}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="font-display font-semibold text-fg">{fullName}</span>
        </div>
        <p className="text-center">
          &copy; {year} {fullName}. Built with Next.js, Tailwind CSS and React
          Bits.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1 rounded-full px-3 py-1 transition hover:text-fg"
        >
          Back to top <LuArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
