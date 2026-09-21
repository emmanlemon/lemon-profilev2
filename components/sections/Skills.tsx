'use client'

import type { CSSProperties } from 'react'
import { SectionHeading } from '@/components/layout/SectionHeading'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for."
          description="Grouped by where they sit in the stack. Hover a chip to see its brand colour."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const GroupIcon = group.icon
            return (
              <AnimatedContent
                key={group.title}
                distance={40}
                delay={0.08 * i}
                className="h-full"
              >
                <SpotlightCard className="h-full">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                      <GroupIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{group.title}</h3>
                      <p className="text-sm text-muted">{group.description}</p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon
                      const style = {
                        '--brand': skill.color ?? 'rgb(var(--accent))',
                      } as CSSProperties
                      return (
                        <li
                          key={skill.name}
                          style={style}
                          className="group chip py-1.5 text-sm text-fg/80 transition hover:border-[color:var(--brand)] hover:text-fg"
                        >
                          <Icon className="h-4 w-4 transition-colors group-hover:text-[color:var(--brand)]" />
                          {skill.name}
                        </li>
                      )
                    })}
                  </ul>
                </SpotlightCard>
              </AnimatedContent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
