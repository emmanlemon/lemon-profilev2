'use client'

import { SectionHeading } from '@/components/layout/SectionHeading'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import CountUp from '@/components/reactbits/CountUp'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { profile, stats, highlights } from '@/data/profile'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="Turning ideas into dependable software."
          description={`A quick look at who I am and what I do day to day at ${profile.currentCompanyShort}.`}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <AnimatedContent distance={40} duration={0.8}>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {profile.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <AnimatedContent
                key={stat.label}
                distance={40}
                delay={0.1 * i}
                className="h-full"
              >
                <div className="card h-full p-6">
                  <div className="font-display text-4xl font-semibold md:text-5xl">
                    <CountUp to={stat.value} duration={1.6} />
                    {stat.suffix}
                  </div>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimatedContent
                key={item.title}
                distance={40}
                delay={0.1 * i}
                className="h-full"
              >
                <SpotlightCard className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </SpotlightCard>
              </AnimatedContent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
