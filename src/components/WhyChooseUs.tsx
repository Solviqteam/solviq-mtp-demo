import { Flame, Users, Clock, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const points = [
  {
    icon: Flame,
    title: 'Fire & Smoke',
    description: 'Conceptual focus on slow-cooking and fire-kissed flavours. Unverified.',
  },
  {
    icon: Users,
    title: 'Made to Share',
    description: 'Big plates built for groups — concept selling point only.',
  },
  {
    icon: Clock,
    title: 'Time & Craft',
    description: 'Low-and-slow approach shown conceptually. Details pending verification.',
  },
  {
    icon: Heart,
    title: 'Proper Hospitality',
    description: 'Welcoming, relaxed service vibe — illustrative concept only.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-charcoal-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-copper">Why Choose Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Case For <span className="text-copper">MTP</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-cream/80">
            Conceptual selling points only. None of the claims below are verified against Meat the Porkers Group.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-sm border border-white/5 bg-charcoal-800/60 p-6"
            >
              <point.icon className="h-8 w-8 text-copper" />
              <h3 className="mt-4 text-lg sm:text-xl font-semibold">{point.title}</h3>
              <p className="mt-3 text-base text-cream/80 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
