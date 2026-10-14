import { useEffect, useRef, useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

const inputClass =
  'rounded-sm border border-white/10 bg-charcoal-900 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none'

// Accepts a plausible email address, or a phone number with at least 7 digits.
function isValidContact(value: string) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true
  const digits = value.match(/\d/g)?.length ?? 0
  return digits >= 7 && /^[+\d\s()-]+$/.test(value)
}

export function Enquiry() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const confirmationRef = useRef<HTMLDivElement>(null)

  // Move focus to the confirmation so keyboard and screen-reader users notice it.
  useEffect(() => {
    if (submitted) confirmationRef.current?.focus()
  }, [submitted])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const contact = String(data.get('contact') ?? '').trim()

    if (!name) {
      setError('Please enter your name.')
      return
    }
    if (!isValidContact(contact)) {
      setError('Please enter a valid email address or phone number.')
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
          <div
            ref={confirmationRef}
            tabIndex={-1}
            role="status"
            className="mt-8 rounded-sm border border-copper/30 bg-copper/10 p-8 text-center focus:outline-none"
          >
            <CheckCircle2 className="mx-auto h-10 w-10 text-copper" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold">Demo Enquiry Received</h3>
            <p className="mt-3 text-lg text-cream/80">
              DEMO ONLY — nothing was sent or booked. This confirms the form flow works. A real enquiry/booking service can be connected later.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-charcoal-950 transition-colors hover:bg-copper-600"
            >
              Send Another Demo Enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 rounded-sm border border-white/5 bg-charcoal-800/60 p-6 sm:p-8"
          >
            {error && (
              <p
                id="form-error"
                role="alert"
                className="mb-4 rounded-sm border border-brick/40 bg-brick/10 px-4 py-3 text-sm text-cream"
              >
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
                  autoComplete="name"
                  required
                  aria-describedby={error ? 'form-error' : undefined}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-info" className="text-sm text-cream/80">Email or Phone</label>
                <input
                  id="contact-info"
                  name="contact"
                  type="text"
                  autoComplete="email"
                  required
                  aria-describedby={error ? 'form-error' : undefined}
                  placeholder="you@example.com or +60 12-345 6789"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm text-cream/80">Preferred Date &amp; Time</label>
                <input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="e.g. Friday 8pm"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="text-sm text-cream/80">Number of Guests</label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="50"
                  placeholder="2"
                  className={inputClass}
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
                className={inputClass}
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
