'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LuMenu, LuX } from 'react-icons/lu'
import { navItems } from '@/data/nav'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/lib/useActiveSection'
import { cn } from '@/lib/cn'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = ['home', ...navItems.map((item) => item.id)]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <nav
          aria-label="Primary"
          className={cn(
            'mt-3 flex items-center justify-between rounded-full px-3 py-2 transition-all duration-300 md:mt-4 md:px-4',
            scrolled || open ? 'glass shadow-card' : 'border border-transparent'
          )}
        >
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-display text-sm font-semibold"
          >
            <Image
              src={profile.logo}
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />
            <span>
              {profile.nickname}
              <span className="text-accent">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/15"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost hidden !px-4 !py-1.5 text-xs lg:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-fg lg:hidden"
            >
              {open ? (
                <LuX className="h-4 w-4" />
              ) : (
                <LuMenu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container lg:hidden"
          >
            <div className="glass mt-2 rounded-3xl p-3 shadow-card">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-2xl px-4 py-3 text-base font-medium transition-colors',
                        active === item.id
                          ? 'bg-accent/15 text-fg'
                          : 'text-muted hover:text-fg'
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-2 w-full"
              >
                Download resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
