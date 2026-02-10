'use client'

import { motion, useScroll, useTransform } from 'motion/react'

export function FloatingBadge() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <motion.div
      style={{ y, rotate }}
      className="fixed right-12 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none z-10"
    >
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[8px] fill-muted-foreground" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
            <textPath href="#circlePath" startOffset="0">
              UX DIRECTOR • DESIGN LEADER • SYSTEMS THINKER • 
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl">
            ✨
          </div>
        </div>
      </div>
    </motion.div>
  )
}
