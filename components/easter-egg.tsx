'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function EasterEgg() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="fixed bottom-4 left-4 text-xs text-muted-foreground hover:text-foreground transition-colors opacity-30 hover:opacity-100"
        style={{ fontSize: '0.625rem' }}
      >
        ✨ Click for a surprise
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShow(false)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 10 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="text-center space-y-6 p-12 bg-background border-4 border-foreground max-w-lg"
            >
              <div className="text-6xl">🎨</div>
              <h2 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '2rem', 
                  fontWeight: 400 
                }}
              >
                You found it!
              </h2>
              <p className="text-muted-foreground" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Thanks for exploring my portfolio! I believe great design should have moments of delight. 
                <br /><br />
                Let's create something amazing together.
              </p>
              <div className="text-4xl">✨</div>
              <button
                onClick={() => setShow(false)}
                className="px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                style={{ fontSize: '0.938rem', fontWeight: 500 }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
