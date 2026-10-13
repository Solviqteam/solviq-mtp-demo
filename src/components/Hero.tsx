import { ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
          alt="Mouth-watering slow-roasted pork dish - conceptual demo image"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-sm border border-copper/40 bg-copper/10 px-3 py-1 text-xs font-medium text-copper backdrop-blur-sm">
            Concept Demo • Premium Pork Dining
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
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
              Find a Location
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
