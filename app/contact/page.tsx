import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, MapPin, Phone, Send } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { ContactForm } from '@/components/contact-form'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact K.Lou\'s Cajun Shack & Catering. Call (602) 596-8036 or send us a message. Serving Phoenix & Tempe, AZ with authentic Cajun cuisine.',
}

const operatingHours = [
  { days: 'Monday - Thursday', hours: '10:30 AM - 5:30 PM' },
  { days: 'Friday - Saturday', hours: '11:00 AM - 5:30 PM' },
  { days: 'Sunday', hours: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        <section className="relative overflow-hidden bg-cream py-16 md:py-24">
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-gold/20 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-6 h-72 w-72 rounded-full bg-cajun-red/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="type-kicker text-cajun-red">Get in touch</p>
                  <h1 className="type-page-title max-w-[11ch] text-charcoal">
                    Make it easy to ask a question, place an order, or start the quote.
                  </h1>
                  <p className="type-lead max-w-2xl text-charcoal/80">
                    Call for the fastest answer, check the current location if you&apos;re heading out,
                    or send a message if the question can wait a bit.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-charcoal text-cream hover:bg-charcoal-light"
                  >
                    <a href="tel:+16025968036" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call (602) 596-8036
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                  >
                    <Link href="/find-us">Find us today</Link>
                  </Button>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">Fastest path</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Call for quick order questions, menu availability, and same-day direction.
                    </p>
                  </div>
                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">For planning</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Use the form if you need a follow-up, catering detail, or a less urgent answer.
                    </p>
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl bg-charcoal p-6 text-cream">
                <p className="type-kicker text-gold">Hours</p>
                <div className="mt-4 space-y-3 border-t border-cream/10 pt-4 text-sm">
                  {operatingHours.map((schedule) => (
                    <div key={schedule.days} className="flex items-center justify-between gap-4">
                      <span className="text-cream/70">{schedule.days}</span>
                      <span className={schedule.hours === 'Closed' ? 'text-cream/45' : 'font-semibold text-cream'}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-cream/10 pt-4">
                  <p className="type-kicker text-gold">Service area</p>
                  <p className="type-card-title mt-2 text-cream">Phoenix &amp; Tempe</p>
                  <p className="type-meta mt-2 text-cream/70">
                    Pop-up locations shift, so the `Find Us` page and a quick call are the best
                    way to confirm where we are today.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
              <div className="space-y-8">
                <article className="border-t border-charcoal/15 pt-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cajun-red/10">
                      <Phone className="h-6 w-6 text-cajun-red" />
                    </span>
                    <div>
                      <p className="type-kicker text-cajun-red/80">Call us</p>
                      <a
                        href="tel:+16025968036"
                        className="type-card-title mt-2 block text-charcoal hover:text-cajun-red"
                      >
                        (602) 596-8036
                      </a>
                      <p className="type-meta mt-2 text-charcoal/65">
                        Best for same-day questions, menu checks, and quick orders.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="border-t border-charcoal/15 pt-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <MapPin className="h-6 w-6 text-cajun-red" />
                    </span>
                    <div>
                      <p className="type-kicker text-cajun-red/80">Current area</p>
                      <p className="type-card-title mt-2 text-charcoal">Phoenix &amp; Tempe, Arizona</p>
                      <p className="type-meta mt-2 text-charcoal/65">
                        Check our{' '}
                        <Link href="/find-us" className="text-cajun-red hover:underline">
                          Find Us
                        </Link>{' '}
                        page before you head out. Pop-up locations and hours can vary.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="border-t border-charcoal/15 pt-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal/10">
                      <Clock className="h-6 w-6 text-charcoal" />
                    </span>
                    <div>
                      <p className="type-kicker text-cajun-red/80">Response time</p>
                      <p className="type-card-title mt-2 text-charcoal">Usually within 24 hours</p>
                      <p className="type-meta mt-2 text-charcoal/65">
                        The form works best for questions that need a follow-up instead of an instant answer.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cajun-red py-16 md:py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:text-left">
              <div>
                <h2 className="type-section-title text-white">Planning an event?</h2>
                <p className="type-body mt-3 max-w-xl text-white/85">
                  If this is really a catering conversation, go straight to the dedicated inquiry
                  flow so we can answer with the right details faster.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-cajun-red hover:bg-cream"
                >
                  <Link href="/catering" className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Request catering quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
