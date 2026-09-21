'use client'

import BlurText from '@/components/reactbits/BlurText'
import FadeContent from '@/components/reactbits/FadeContent'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

/** Consistent intro block used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div
      className={cn(
        'mb-12 max-w-2xl md:mb-16',
        centered && 'mx-auto text-center'
      )}
    >
      <FadeContent duration={600}>
        <span className="eyebrow">{eyebrow}</span>
      </FadeContent>
      <BlurText
        tag="h2"
        text={title}
        delay={70}
        animateBy="words"
        className={cn(
          'mt-4 text-3xl font-semibold leading-tight md:text-5xl',
          centered && 'justify-center'
        )}
      />
      {description && (
        <FadeContent delay={150} duration={800}>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </FadeContent>
      )}
    </div>
  )
}
