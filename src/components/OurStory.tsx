import { motion } from 'framer-motion'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'

export function OurStory() {
  return (
    <section id="story" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm uppercase tracking-wider text-copper">Our Story</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Fire, Smoke & <span className="text-copper">Heart</span>
            </h2>
            <p className="mt-6 text-lg text-cream/80 leading-relaxed">
              Concept copy only. This section is a placeholder to showcase editorial storytelling. Real history, origins and team details will be added once verified from Meat the Porkers Group.
            </p>
            <p className="mt-4 text-lg text-cream/80 leading-relaxed">
              The vision shown here: a modern pork-focused restaurant that puts fire and craft front and centre, keeping things casual, generous and shareable.
            </p>
            <p className="mt-6 text-sm text-cream/50">Independent concept demo by Solviq — not affiliated with Meat the Porkers Group.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/5">
              <PhotoPlaceholder
                label="Interior photography"
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
