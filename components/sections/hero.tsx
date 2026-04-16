import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PHONE_LINK = 'tel:+16025968036'

export function Hero() {
  return (
    <section className="bg-charcoal min-h-[calc(100svh-120px)] md:min-h-[85vh] flex">
      <div className="container mx-auto px-4 py-12 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[inherit]">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-8 lg:py-16">
            {/* Section Label */}
            <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-6">
              Phoenix Pop-Ups, Catering, and Crawfish Season
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-[1.1] mb-6">
              Louisiana flavor that feels worth finding.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-cream max-w-xl mb-8 leading-relaxed">
              K.Lou&apos;s Cajun Shack & Catering brings authentic Cajun and Creole comfort 
              food to Arizona through catering, pop-ups, and specialty boils. From fried 
              catfish and jambalaya to crawfish, gator, and snowballs, every plate is built 
              to feel generous, memorable, and worth calling about.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-cajun-red hover:bg-cajun-red-light text-white text-base px-8 py-6 rounded-full shadow-lg"
              >
                <Link href="/catering">
                  Book Catering
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-cajun-red-dark hover:bg-cajun-red text-white text-base px-8 py-6 rounded-full"
              >
                <a href={PHONE_LINK} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="w-full sm:w-auto text-cream hover:text-gold px-0"
              >
                <Link href="/find-us" className="flex items-center gap-2">
                  See current location
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-charcoal-light text-cream text-sm rounded-full border border-charcoal-light">
                Authentic Cajun & Creole cooking
              </span>
              <span className="px-4 py-2 bg-charcoal-light text-cream text-sm rounded-full border border-charcoal-light">
                Phoenix / Tempe pop-ups
              </span>
              <span className="px-4 py-2 bg-charcoal-light text-cream text-sm rounded-full border border-charcoal-light">
                Catering and crawfish boil bookings
              </span>
            </div>
          </div>

          {/* Right Content - Image & Info Card */}
          <div className="relative flex flex-col gap-6 lg:pl-8">
            {/* Food Image */}
            <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/catfish-plate.jpg"
                alt="Southern fried catfish plate with fries and hush puppies"
                fill
                priority
                loading="eager"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Info Card */}
            <div className="bg-cream rounded-lg p-6 shadow-xl">
              <p className="text-cajun-red font-semibold text-xs tracking-[0.15em] uppercase mb-2">
                Crowd Favorites
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 leading-tight">
                Catfish, jambalaya, crawfish, and craveable plates.
              </h2>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cajun-red text-white text-xs font-semibold rounded">
                  Black-owned
                </span>
                <span className="px-3 py-1 bg-cajun-red text-white text-xs font-semibold rounded">
                  Family-run
                </span>
                <span className="px-3 py-1 bg-cajun-red text-white text-xs font-semibold rounded">
                  Phoenix / Tempe
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-2 text-charcoal text-sm">
                <li>Private parties, graduations, and office lunches.</li>
                <li>Seasonal crawfish boils and pop-up menus worth chasing down.</li>
                <li>Warm hospitality and generous portions that feel like a real spread.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
