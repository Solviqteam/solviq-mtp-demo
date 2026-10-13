import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'

const slots = [
  'Signature dish photography',
  'Sharing plates photography',
  'Interior photography',
  'Drinks photography',
]

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-copper">Gallery</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            A Look at <span className="text-copper">the Vibe</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-cream/80">
            Photo slots reserved below. To be replaced with approved food and venue photography — no third-party images used.
          </p>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map((label) => (
            <PhotoPlaceholder
              key={label}
              label={label}
              className="aspect-[4/5] rounded-sm border border-white/5"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
