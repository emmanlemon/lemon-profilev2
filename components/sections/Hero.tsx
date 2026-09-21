'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { LuArrowRight, LuDownload, LuMapPin } from 'react-icons/lu'
import SplitText from '@/components/reactbits/SplitText'
import RotatingText from '@/components/reactbits/RotatingText'
import StarBorder from '@/components/reactbits/StarBorder'
import TiltedCard from '@/components/reactbits/TiltedCard'
import FadeContent from '@/components/reactbits/FadeContent'
import LogoLoop from '@/components/reactbits/LogoLoop'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile, fullName } from '@/data/profile'
import { techStack } from '@/data/skills'
import { useMounted } from '@/lib/useMounted'

// WebGL background, client only.
const Aurora = dynamic(() => import('@/components/reactbits/Aurora'), {
  ssr: false,
})

const darkStops = ['#22d3ee', '#818cf8', '#22d3ee']
const lightStops = ['#67e8f9', '#a5b4fc', '#67e8f9']

const stackLogos = techStack.map((skill) => {
  const Icon = skill.icon
  return {
    node: (
      <span className="flex items-center gap-2 text-muted">
        <Icon className="h-5 w-5" />
        <span className="text-sm font-medium">{skill.name}</span>
      </span>
    ),
    title: skill.name,
  }
})

/**
 * The WebGL aurora only runs where it is cheap and welcome: WebGL2 support,
 * a tablet-or-wider screen and no reduced-motion preference. Everyone else
 * gets the static CSS glow, which keeps phones fast and battery-friendly.
 */
function useAuroraEnabled() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    try {
      const wide = window.matchMedia('(min-width: 768px)').matches
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
      const canvas = document.createElement('canvas')
      setEnabled(wide && !reduced && Boolean(canvas.getContext('webgl2')))
    } catch {
      setEnabled(false)
    }
  }, [])
  return enabled
}

export function Hero() {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  const auroraEnabled = useAuroraEnabled()
  const isDark = !mounted || resolvedTheme !== 'light'

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[75vh] md:h-[90vh]"
      >
        <div className="hero-glow absolute inset-0" />
        {mounted && auroraEnabled && (
          <Aurora
            colorStops={isDark ? darkStops : lightStops}
            amplitude={1.1}
            blend={0.55}
            speed={0.6}
            lightMode={!isDark}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/30 to-bg" />
      </div>

      <div className="container grid min-h-[100svh] items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pt-28">
        <div className="max-w-2xl">
          <FadeContent duration={600}>
            <span className="eyebrow">
              {profile.currentRole} &middot; {profile.currentCompanyShort}
            </span>
          </FadeContent>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            <SplitText
              text={fullName}
              tag="span"
              className="!block w-full pb-1"
              textAlign="left"
              splitType="chars"
              delay={35}
              duration={1}
              threshold={0}
              rootMargin="0px"
              from={{ opacity: 0, y: 48 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>

          <FadeContent delay={300} duration={800}>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xl font-medium text-muted sm:text-2xl">
              <span>I&apos;m a</span>
              <RotatingText
                texts={profile.roles}
                mainClassName="overflow-hidden rounded-xl bg-accent px-3 py-1 text-bg"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2600}
              />
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StarBorder
                as="a"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                color="rgb(var(--accent))"
                speed="5s"
                backgroundColor="rgb(var(--fg))"
                textColor="rgb(var(--bg))"
                borderColor="transparent"
                className="text-sm font-semibold"
              >
                <span className="inline-flex items-center gap-2">
                  <LuDownload className="h-4 w-4" /> Download resume
                </span>
              </StarBorder>
              <a href="#projects" className="btn-ghost">
                See my work <LuArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <SocialLinks />
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <LuMapPin className="h-4 w-4" /> {profile.location}
              </span>
            </div>
          </FadeContent>
        </div>

        <FadeContent
          delay={200}
          duration={900}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full bg-accent/20 blur-3xl"
            />
            <TiltedCard
              imageSrc={profile.photo}
              altText={fullName}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.04}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold">{profile.nickname}</p>
                    <p className="text-xs text-muted">{profile.title}</p>
                  </div>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                </div>
              }
            />
          </div>
        </FadeContent>
      </div>

      <div className="container pb-10">
        <FadeContent delay={500} duration={1000}>
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Technologies I work with
          </p>
          <LogoLoop
            logos={stackLogos}
            speed={60}
            direction="left"
            logoHeight={20}
            gap={44}
            pauseOnHover
            fadeOut
            fadeOutColor="rgb(var(--bg))"
            ariaLabel="Technology stack"
          />
        </FadeContent>
      </div>
    </section>
  )
}
