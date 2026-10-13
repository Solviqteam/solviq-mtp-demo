import { useEffect, useState } from 'react'
import { Menu, X, Utensils } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Our Story', href: '#story' },
  { name: 'Locations', href: '#locations' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-to-br from-copper to-brick">
              <Utensils className="h-5 w-5 text-cream" />
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              MTP <span className="text-copper">Concept</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-cream/80 hover:text-cream transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-charcoal-950 transition-colors hover:bg-copper-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            >
              View Menu
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-cream/80 hover:text-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-charcoal-950/98 backdrop-blur-sm border-t border-white/5">
          <div className="flex flex-col gap-6 px-4 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg text-cream hover:text-copper transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#menu"
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-copper px-6 py-3 text-base font-medium text-charcoal-950 transition-colors hover:bg-copper-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Menu
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
