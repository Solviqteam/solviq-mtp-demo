import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

export function Enquiry() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (!data.name || !data.email) {
      setError('Please fill in your name and email or phone.')
      return
    }
    setError(null)
    setSubmitted(true)
    form.reset()
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-charcoal-900/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-copper">Contact</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Let's Talk <span className="text-copper">Tables</span>
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            This is a demo enquiry form. Submissions are NOT sent to the restaurant or to Solviq.
          </p>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-sm border border-copper/30 bg-copper/10 p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-copper" />
            <h3 className="mt-4 text-xl font-semibold">Demo Enquiry Received</h3>
            <p className="mt-3 text-lg text-cream/80">
              DEMO ONLY — nothing was sent or booked. This confirms the form flow works. A real enquiry/booking service can be connected later.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-charcoal-950 transition-colors hover:bg-copper-600"
            >
              Send Another Demo Enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-sm border border-white/5 bg-charcoal-800/60 p-6 sm:p-8"
          >
            {error && (
              <p role="alert" className="mb-4 rounded-sm border border-brick/40 bg-brick/10 px-4 py-3 text-sm text-cream">
                {error}
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-cream/80">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-sm border border-white/10 bg-charcoal-900 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-cream/80">Email or Phone</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="you@example.com"
                  className="rounded-sm border border-white/10 bg-charcoal-900 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm text-cream/80">Preferred Date & Time</label>
                <input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="e.g. Friday 8pm"
                  className="rounded-sm border border-white/10 bg-charcoal-900 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="text-sm text-cream/80">Number of Guests</label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="2"
                  className="rounded-sm border border-white/10 bg-charcoal-900 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-cream/80">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any requests, allergies, celebration notes."
                className="rounded-sm border border-white/10 bg-charcoal-900 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-copper px-6 py-3 text-base font-medium text-charcoal-950 transition-colors hover:bg-copper-600"
            >
              Send Demo Enquiry
            </button>
            <p className="mt-4 text-xs text-cream/50">
              Demo only — this form does not submit anywhere. No reservation is created.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
