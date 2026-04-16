import Image from 'next/image'
import Link from 'next/link'
import { PartyPopper, GraduationCap, Briefcase, Users, Star, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const eventTypes = [
  { icon: PartyPopper, label: 'Private Parties' },
  { icon: GraduationCap, label: 'Graduations' },
  { icon: Briefcase, label: 'Corporate Events' },
  { icon: Users, label: 'Family Gatherings' },
  { icon: Star, label: 'Crawfish Boils' },
  { icon: Calendar, label: 'Community Events' },
]

export function CateringSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/seafood-boil-combo.jpg"
                alt="K.Lou's Cajun Shack seafood boil catering spread"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-gold text-charcoal p-4 md:p-6 rounded-lg shadow-xl">
              <p className="font-display text-2xl md:text-3xl">30+</p>
              <p className="text-sm font-medium">Years of Flavor</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
              BRING THE BAYOU TO YOUR EVENT
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Catering That Makes{' '}
              <span className="text-gold">Memories</span>
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              We cater events of all sizes with bold flavor, dependable service, and the 
              kind of food people remember long after the party is over. From intimate 
              family gatherings to large corporate events, we bring authentic Louisiana 
              taste to every occasion.
            </p>

            {/* Event Types Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {eventTypes.map((event) => (
                <div
                  key={event.label}
                  className="flex items-center gap-3 p-3 bg-charcoal-light rounded-lg"
                >
                  <event.icon className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{event.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cajun-red hover:bg-cajun-red-light text-white"
              >
                <Link href="/catering">Request Catering Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream text-cream hover:bg-cream hover:text-charcoal"
              >
                <a href="tel:+16025968036">Call to Discuss Your Event</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
