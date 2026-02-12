'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center gap-3 transition-opacity hover:opacity-60"
          >
            <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '1rem' }}>
              VC
            </div>
            <span className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '1.125rem' }}>
              Vineet Chaudhary
            </span>
          </Link>
          
          <div className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm tracking-wide transition-all duration-300 hover:text-foreground relative ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
