import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const cateringFeatures = [
  'Private parties & celebrations',
  'Graduation parties',
  'Corporate lunches & events',
  'Family gatherings',
  'Seasonal crawfish boils',
  'Community events',
]

export function CateringSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-charcoal-light text-cream border-t border-charcoal-medium">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-charcoal-medium">
              <Image
                src="/images/shrimp-boil.jpg"
                alt="K.Lou's Cajun Shack shrimp boil catering spread"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              Catering Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Bring the bayou to your next event
            </h2>
            <p className="text-cream/90 text-lg leading-relaxed mb-8">
              We cater events of all sizes with bold flavor, dependable service, and the 
              kind of food people remember long after the party is over. From intimate 
              family gatherings to large corporate events.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {cateringFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-cajun-red rounded-full flex items-center justify-center shadow-md shadow-cajun-red/30">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-cream">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-charcoal rounded-full shadow-lg shadow-gold/30"
              >
                <Link href="/catering">Request Catering Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream text-cream hover:bg-cream hover:text-charcoal rounded-full"
              >
                <a href="tel:+16025968036">Call to Discuss</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
