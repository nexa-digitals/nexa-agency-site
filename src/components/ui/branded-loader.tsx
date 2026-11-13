import React from 'react'

interface BrandedLoaderProps {
  size?: number
  label?: string
}

// A branded loader that uses the Nexa logo with subtle pulse and rotate animations.
// It automatically switches between light and dark variants using Tailwind's dark classes.
export default function BrandedLoader({ size = 64, label }: BrandedLoaderProps) {
  const dimension = `${size}px`
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className="relative"
        style={{ width: dimension, height: dimension }}
        aria-label={label || 'Loading'}
      >
        {/* rotating glow ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
        <div className="absolute inset-2 rounded-full border-2 border-primary/20 animate-spin-slower"></div>
        {/* logo */}
        <img
          src="/brand/Nexa.png"
          alt="Nexa Digital"
          className="absolute inset-0 m-auto h-full w-full object-contain drop-shadow-sm dark:hidden animate-pulse"
        />
        <img
          src="/brand/Nexa_dark.png"
          alt="Nexa Digital"
          className="absolute inset-0 m-auto hidden h-full w-full object-contain drop-shadow-sm dark:block animate-pulse"
        />
      </div>
      {label && <div className="text-sm text-muted-foreground">{label}</div>}
    </div>
  )
}

// Local utility animations
// Tailwind custom utilities can be added via arbitrary values; we use built-ins here with custom names via classes.
// Ensure these keyframes exist through Tailwind's default spin; we just vary durations with utility classes.
declare global {
  // Extend class names for readability only (no runtime impact)
  interface HTMLElementTagNameMap { }
}


