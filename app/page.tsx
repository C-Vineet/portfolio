'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { EasterEgg } from '@/components/easter-egg'
import { Home } from '@/components/pages/home'
import { Work } from '@/components/pages/work'
import { About } from '@/components/pages/about'
import { Contact } from '@/components/pages/contact'

export default function Page() {
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady) {
    return null
  }

  const renderPage = () => {
    switch (pathname) {
      case '/':
        return <Home />
      case '/work':
        return <Work />
      case '/about':
        return <About />
      case '/contact':
        return <Contact />
      default:
        if (pathname.startsWith('/work/')) {
          // Case study page
          return <Work />
        }
        return <Home />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollProgress />
      <BackToTop />
      <EasterEgg />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
