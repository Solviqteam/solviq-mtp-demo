import { ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'

export function Hero() {
  return (
    <section id="home" className="relative min-h-svh flex items-center">
      <PhotoPlaceholder
        label="Hero food photography"
        showLabel={false}
        className="absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent"
      />

      {/* relative + z-10: positioned overlays above would otherwise paint over this text */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            Bold Flavours.{' '}
            <span className="text-copper">Slow-Roasted</span>{' '}
            to Perfection.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cream/80 leading-relaxed">
            A modern take on fire-kissed pork. Big plates, punchy sides, and a laid-back space designed for sharing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-copper px-6 py-3 text-base font-medium text-charcoal-950 transition-colors hover:bg-copper-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            >
              Explore the Menu
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#locations"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-cream transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            >
              <MapPin className="h-4 w-4" />
              Find Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
