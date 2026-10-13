import { useEffect, useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2110&auto=format&fit=crop',
    alt: 'Conceptual dessert and drink imagery — demo',
  },
  {
    src: 'https://images.unsplash.com/photo-1504064533723-38ce730fd1d5?q=80&w=2070&auto=format&fit=crop',
    alt: 'Conceptual food styling imagery — demo',
  },
  {
    src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Conceptual sharing plate — demo',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Conceptual restaurant interior — demo',
  },
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    []
  )
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  )

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, close, next, prev])

  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-copper">Gallery</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            A Look at <span className="text-copper">the Vibe</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-cream/80">
            Placeholder imagery for demonstration. To be replaced with verified food and venue photography.
          </p>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/90 p-4"
          onClick={close}
          role="dialog"
          aria-label="Image lightbox"
          aria-modal="true"
        >
          <div className="relative max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-h-[80vh] w-full rounded-sm border border-white/10 object-contain"
            />
            <button
              onClick={close}
              className="absolute -top-4 -right-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal-800 text-cream border border-white/10 hover:text-copper"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute top-1/2 -left-14 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal-800 text-cream border border-white/10 hover:text-copper"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute top-1/2 -right-14 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal-800 text-cream border border-white/10 hover:text-copper"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
