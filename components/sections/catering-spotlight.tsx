import Image from 'next/image'
import Link from 'next/link'
import { Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const cateringFeatures = [
  'Private parties and celebrations',
  'Graduation parties',
  'Corporate lunches and events',
  'Family gatherings',
  'Seasonal crawfish boils',
  'Community events',
]

const hostingNotes = [
  {
    title: 'For family gatherings',
    description:
      'Big portions, familiar comfort, and the kind of menu that feels generous when people go back for seconds.',
  },
  {
    title: 'For polished client events',
    description:
      'Straightforward planning, dependable arrival, and food that still feels personal.',
  },
]

export function CateringSpotlight() {
  return (
    <section className="bg-charcoal py-16 md:py-24 text-cream">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-6">
            <p className="type-kicker text-gold">Catering services</p>
            <h2 className="type-section-title max-w-xl text-cream">
              Bring the bayou to the event with food people remember.
            </h2>
            <p className="type-body max-w-xl text-cream/80">
              K.Lou&apos;s caters the parties people care about: graduation spreads, office lunches,
              family tables, and seasonal crawfish boils that people plan early for. The food is
              memorable, and the communication stays direct.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {cateringFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3 border-t border-cream/15 pt-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-4 w-4 text-gold" strokeWidth={3} />
                  </span>
                  <span className="type-meta text-cream/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="rounded-md bg-gold text-charcoal hover:bg-gold-light"
              >
                <Link href="/catering">Request a quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md border-cream text-cream hover:bg-cream hover:text-charcoal"
              >
                <a href="tel:+16025968036" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call to discuss
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-charcoal-light">
              <Image
                src="/images/shrimp-boil.jpg"
                alt="K.Lou's Cajun Shack shrimp boil catering spread"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {hostingNotes.map((note) => (
                <article key={note.title} className="border-t border-cream/15 pt-5">
                  <p className="type-kicker text-gold/90">{note.title}</p>
                  <p className="type-meta mt-3 text-cream/75">{note.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
