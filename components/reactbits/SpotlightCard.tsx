'use client'

import React, { useRef, useState } from 'react'
import { cn } from '@/lib/cn'

interface Position {
  x: number
  y: number
}

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  /** Any CSS colour. Defaults to the theme accent at low opacity. */
  spotlightColor?: string
}

/**
 * React Bits "Spotlight Card", adapted to use the site's `.card` theme tokens.
 * https://reactbits.dev/components/spotlight-card
 */
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgb(var(--accent) / 0.22)',
  ...rest
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState<number>(0)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(0.6)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        'card relative overflow-hidden p-6 transition-colors duration-300 hover:border-accent/40 md:p-8',
        className
      )}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

export default SpotlightCard
