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
            Verified location data not available in this concept. Use placeholders only. Do not assume accuracy.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-white/5 bg-charcoal-800/60 p-8">
            <h3 className="text-xl sm:text-2xl font-semibold">Branch 01 — *Placeholder*</h3>
            <dl className="mt-6 space-y-4 text-base text-cream/80">
              <div>
                <dt className="font-medium text-cream">Address</dt>
                <dd className="mt-1">*To be verified — provide actual address.*</dd>
              </div>
              <div>
                <dt className="font-medium text-cream">Opening Hours</dt>
                <dd className="mt-1">*Unverified — provide actual hours.*</dd>
              </div>
              <div>
                <dt className="font-medium text-cream">Phone</dt>
                <dd className="mt-1">*Unverified — provide actual number.*</dd>
              </div>
              <div>
                <dt className="font-medium text-cream">Directions</dt>
                <dd className="mt-1">*Map link only when exact location confirmed.*</dd>
              </div>
            </dl>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-sm border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-white/10"
            >
              Enquire About This Location
            </a>
          </div>

          <div className="rounded-sm border border-white/5 bg-charcoal-800/60 p-8">
            <h3 className="text-xl sm:text-2xl font-semibold">Branch 02 — *Placeholder*</h3>
            <dl className="mt-6 space-y-4 text-base text-cream/80">
              <div>
                <dt className="font-medium text-cream">Address</dt>
                <dd className="mt-1">*To be verified — provide actual address.*</dd>
              </div>
              <div>
                <dt className="font-medium text-cream">Opening Hours</dt>
                <dd className="mt-1">*Unverified — provide actual hours.*</dd>
              </div>
              <div>
                <dt className="font-medium text-cream">Phone</dt>
                <dd className="mt-1">*Unverified — provide actual number.*</dd>
              </div>
              <div>
                <dt className="font-medium text-cream">Directions</dt>
                <dd className="mt-1">*Map link only when exact location confirmed.*</dd>
              </div>
            </dl>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-sm border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-white/10"
            >
              Enquire About This Location
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
