export function Footer() {
  return (
    // Extra bottom padding keeps the last line clear of the fixed demo banner.
    <footer className="relative border-t border-white/5 bg-charcoal-900 pt-16 pb-28 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold">MTP <span className="text-copper">Concept</span></h2>
            <p className="mt-3 text-sm text-cream/70">
              Independent concept demo by Solviq. Not affiliated with or endorsed by Meat the Porkers Group.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-cream">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li><a href="#menu" className="hover:text-copper">View Menu</a></li>
              <li><a href="#story" className="hover:text-copper">Our Story</a></li>
              <li><a href="#gallery" className="hover:text-copper">Gallery</a></li>
              <li><a href="#locations" className="hover:text-copper">Locations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-cream">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li>Email: not listed yet</li>
              <li>
                Phone:{' '}
                <a href="tel:+60199871945" className="hover:text-copper">+60 19-987 1945</a>{' '}
                (public listing, unverified)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-cream">Demo Notice</h3>
            <p className="mt-3 text-sm text-cream/70">
              This is a concept website for demonstration only. No booking, ordering or live data is connected.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © 2026 Independent concept demo by Solviq.
          </p>
          <p className="text-xs text-cream/50">
            Build a website like this for your business?{' '}
            <a href="mailto:solviq.team@outlook.com" className="text-copper hover:text-copper-600">solviq.team@outlook.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
