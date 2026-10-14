import { useEffect, useState } from 'react'
import { Menu, X, Utensils } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#story' },
  { name: 'Locations', href: '#locations' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMenu = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close if the window is resized up to the desktop layout.
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const handleResize = () => {
      if (desktop.matches) setIsMobileMenuOpen(false)
    }

    window.addEventListener('keydown', handleKey)
    desktop.addEventListener('change', handleResize)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
      desktop.removeEventListener('change', handleResize)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
          isScrolled || isMobileMenuOpen
            ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-to-br from-copper to-brick">
                <Utensils className="h-5 w-5 text-cream" aria-hidden="true" />
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
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-charcoal-950 transition-colors hover:bg-copper-600"
              >
                View Menu
              </a>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 text-cream/80 hover:text-cream"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/*
        The overlay is a sibling of <header>, not a child. A child of an element
        with backdrop-filter gets sized against that element instead of the
        viewport, which collapsed the menu to ~1px tall once the page was scrolled.
      */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 bottom-0 top-20 z-[45] overflow-y-auto border-t border-white/5 bg-charcoal-950"
        >
          <div className="flex flex-col gap-6 px-4 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg text-cream hover:text-copper transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#menu"
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-copper px-6 py-3 text-base font-medium text-charcoal-950 transition-colors hover:bg-copper-600"
              onClick={closeMenu}
            >
              View Menu
            </a>
          </div>
        </div>
      )}
    </>
  )
}
