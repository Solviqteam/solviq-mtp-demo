import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { menuItems } from '@/data/menu'

const featured = menuItems.filter((i) => i.featured)

export function SignatureDishes() {
  return (
    <section id="signature" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-sm uppercase tracking-wider text-copper">Signature Dishes</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Built to <span className="text-copper">Share</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-cream/80">
              Conceptual showcase of standout plates. Names and descriptions are illustrative only and can be replaced with verified menu details.
            </p>
          </div>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-copper-600"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featured.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-sm border border-white/5 bg-charcoal-800/60"
            >
              <PhotoPlaceholder
                label={`${item.name} photo`}
                className="aspect-[4/5]"
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-medium text-copper">{item.price}</span>
                </div>
                <p className="mt-3 text-base text-cream/80 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
