import { useState } from 'react'
import { motion } from 'framer-motion'
import { menuItems } from '@/data/menu'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'signature', label: 'Signature' },
  { id: 'mains', label: 'Mains' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' },
] as const

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]['id']>('all')

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="relative py-20 sm:py-28 bg-charcoal-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-copper">Menu</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What We're <span className="text-copper">Smoking</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-cream/80">
            Concept menu only. Prices and items are illustrative and unverified. Actual menu will be updated when provided by the client.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center rounded-sm px-4 py-2 text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'bg-copper text-charcoal-950'
                  : 'border border-white/10 bg-white/5 text-cream/80 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col overflow-hidden rounded-sm border border-white/5 bg-charcoal-800/60"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} — conceptual demo image`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-medium text-copper">{item.price}</span>
                </div>
                <p className="mt-3 text-base text-cream/80 leading-relaxed flex-1">{item.description}</p>
                <p className="mt-4 text-xs text-cream/50">*Illustrative demo content — not verified.*</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-cream/60">
          Dietary and allergen information not shown — unverified. Concept only.
        </p>
      </div>
    </section>
  )
}
