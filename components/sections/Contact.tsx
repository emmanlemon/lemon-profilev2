'use client'

import { LuMail, LuDownload } from 'react-icons/lu'
import FadeContent from '@/components/reactbits/FadeContent'
import GradientText from '@/components/reactbits/GradientText'
import Magnet from '@/components/reactbits/Magnet'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile } from '@/data/profile'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card relative overflow-hidden p-8 text-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />

          <FadeContent duration={600}>
            <span className="eyebrow">Contact</span>
          </FadeContent>

          <FadeContent delay={100} duration={800}>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              <GradientText
                colors={[
                  'rgb(var(--accent))',
                  'rgb(var(--accent2))',
                  'rgb(var(--accent))',
                ]}
                animationSpeed={6}
                className="!cursor-default"
              >
                Let&apos;s build something together.
              </GradientText>
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted md:text-lg">
              I&apos;m fairly introverted, but I reply to messages for as long
              as my social battery lasts. Work, code, movies or anything cool:
              my inbox is open.
            </p>
          </FadeContent>

          <FadeContent delay={250} duration={800}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnet padding={60} magnetStrength={5}>
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <LuMail className="h-4 w-4" /> {profile.email}
                </a>
              </Magnet>
              <Magnet padding={60} magnetStrength={5}>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <LuDownload className="h-4 w-4" /> Download resume
                </a>
              </Magnet>
            </div>
            <SocialLinks className="mt-8 justify-center" />
          </FadeContent>
        </div>
      </div>
    </section>
  )
}
