'use client'

import Image from 'next/image'
import { LuAward } from 'react-icons/lu'
import { SectionHeading } from '@/components/layout/SectionHeading'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { certificates } from '@/data/certificates'

export function Awards() {
  return (
    <section id="awards" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Awards & certificates"
          title="Recognition along the way."
          description="A few milestones I'm proud of, from campus competitions to my current team."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {certificates.map((item, i) => (
            <AnimatedContent
              key={item.title}
              distance={40}
              delay={0.08 * i}
              className="h-full"
            >
              <SpotlightCard className="h-full !p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-fg/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    <LuAward className="h-4 w-4 text-accent" />
                    {item.issuer} &middot; {item.date}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
