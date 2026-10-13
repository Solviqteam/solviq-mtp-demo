import { MapPin, Phone, Clock } from 'lucide-react'

const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=Meat+the+Porkers%2C+9M+Jalan+Medan+Setia+1%2C+Bukit+Damansara%2C+50490+Kuala+Lumpur'

export function Locations() {
  return (
    <section id="locations" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-copper">Locations</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find <span className="text-copper">Us</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-cream/80">
            One location. Address and phone from public listings — please confirm before finalising.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-2xl">
          <div className="rounded-sm border border-white/5 bg-charcoal-800/60 p-8">
            <h3 className="text-xl sm:text-2xl font-semibold">Meat The Porkers (MTP)</h3>
            <p className="mt-1 text-sm text-cream/60">
              First floor, corner lot at Plaza Damansara, Bukit Damansara
            </p>
            <dl className="mt-6 space-y-5 text-base text-cream/80">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-copper" />
                <dd>
                  9M, Jalan Medan Setia 1,<br />
                  Bukit Damansara,<br />
                  50490 Kuala Lumpur, Malaysia
                </dd>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-copper" />
                <div>
                  <dd className="font-medium text-cream">Opening hours</dd>
                  <dd className="mt-1">
                    Mon &amp; Wed–Sun: 11:30am–3:00pm, 5:30pm–10:30pm
                    <br />
                    Tuesday: closed
                  </dd>
                  <dd className="mt-2 text-sm text-cream/50">*From a third-party listing — confirm before launch.*</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-copper" />
                <dd>
                  <a href="tel:+60199871945" className="hover:text-copper transition-colors">
                    +60 19-987 1945
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-charcoal-950 transition-colors hover:bg-copper-600"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
