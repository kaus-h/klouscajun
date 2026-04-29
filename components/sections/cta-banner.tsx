import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="bg-cream-dark py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="space-y-4">
            <p className="type-kicker text-cajun-red">Choose the fast path</p>
            <h2 className="type-section-title max-w-xl text-charcoal">
              Hungry today or planning ahead? Start in the right place.
            </h2>
            <p className="type-body max-w-xl text-charcoal/75">
              Find the current stop, check the menu, or start a catering quote without digging
              around for the next move.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-charcoal p-8 text-cream">
              <p className="type-kicker text-gold">Eat today</p>
              <h3 className="type-card-title mt-2 text-cream">Need the current stop, menu, or a quick call?</h3>
              <p className="type-meta mt-3 text-cream/75">
                Get location details fast, check the menu, and call ahead before you drive over.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="rounded-md bg-gold text-charcoal hover:bg-gold-light">
                  <Link href="/find-us">Find us today</Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="h-auto justify-start p-0 text-cream hover:text-gold"
                >
                  <Link href="/menu" className="flex items-center gap-2">
                    View the menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-cajun-red p-8 text-white">
              <p className="type-kicker text-white/75">Book catering</p>
              <h3 className="type-card-title mt-2 text-white">
                Planning a graduation, party, or client event?
              </h3>
              <p className="type-meta mt-3 text-white/85">
                Start the quote, talk through service options, or lock in a crawfish boil while the
                calendar is still open.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="rounded-md bg-white text-cajun-red hover:bg-cream">
                  <Link href="/catering">Request a quote</Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="h-auto justify-start p-0 text-white hover:text-cream"
                >
                  <a href="tel:+16025968036" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call (602) 596-8036
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
