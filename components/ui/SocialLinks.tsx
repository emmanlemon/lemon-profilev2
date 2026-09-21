'use client'

import Magnet from '@/components/reactbits/Magnet'
import { socials } from '@/data/profile'
import { cn } from '@/lib/cn'

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socials.map((social) => {
        const external = !social.href.startsWith('mailto:')
        return (
          <Magnet key={social.label} padding={40} magnetStrength={4}>
            <a
              href={social.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={social.label}
              title={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted transition hover:border-accent/60 hover:text-accent"
            >
              <social.icon className="h-5 w-5" />
            </a>
          </Magnet>
        )
      })}
    </div>
  )
}
