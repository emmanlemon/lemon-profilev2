'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { LuCheck, LuChevronDown, LuExternalLink } from 'react-icons/lu'
import { SectionHeading } from '@/components/layout/SectionHeading'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import ShinyText from '@/components/reactbits/ShinyText'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { experiences, type Experience as Job } from '@/data/experience'
import { cn } from '@/lib/cn'

/** Highlights shown before the "show more" toggle keeps long roles scannable. */
const PREVIEW_COUNT = 3

function ExperienceCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false)
  const preview = job.highlights.slice(0, PREVIEW_COUNT)
  const rest = job.highlights.slice(PREVIEW_COUNT)

  return (
    <SpotlightCard>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-border bg-white">
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              fill
              sizes="56px"
              className="object-contain p-2"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">{job.position}</h3>
            <p className="text-sm text-muted">
              {job.url ? (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-fg transition hover:text-accent"
                >
                  {job.company}
                  <LuExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="text-fg">{job.company}</span>
              )}
              {job.note && <span> &middot; {job.note}</span>}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{job.period}</span>
          {job.current && (
            <span className="chip border-accent/40">
              <ShinyText
                text="Current"
                speed={2.5}
                delay={1.5}
                color="rgb(var(--accent))"
                shineColor="rgb(var(--fg))"
                className="font-semibold"
              />
            </span>
          )}
        </div>
      </header>

      <p className="mt-5 leading-relaxed text-muted">{job.summary}</p>

      <ul className="mt-4 space-y-2.5">
        {preview.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
            <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {rest.length > 0 && (
        <>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                key="more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                {rest.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.25 }}
                    className="mt-2.5 flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full text-sm font-semibold text-accent transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            {expanded ? 'Show less' : `Show ${rest.length} more`}
            <LuChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-300',
                expanded && 'rotate-180'
              )}
            />
          </button>
        </>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </SpotlightCard>
  )
}

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null)
  // The timeline line draws itself as the list scrolls into view.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 75%', 'end 70%'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  })

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          description="From on-the-job training to leading a development team, newest first. Expand a role to see everything I did there."
        />

        <ol ref={listRef} className="relative">
          <span
            aria-hidden
            className="absolute bottom-6 left-[7px] top-2 w-px bg-border md:left-[9px]"
          />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-6 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent via-accent2 to-accent md:left-[9px]"
          />

          {experiences.map((job, i) => (
            <li
              key={job.company}
              className="relative pb-10 pl-10 last:pb-0 md:pl-14"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-4 w-4 md:h-5 md:w-5"
              >
                {job.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/50" />
                )}
                <span className="absolute inset-0 rounded-full border-[3px] border-bg bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.2)]" />
              </span>

              <AnimatedContent distance={40} delay={0.05 * i}>
                <ExperienceCard job={job} />
              </AnimatedContent>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
