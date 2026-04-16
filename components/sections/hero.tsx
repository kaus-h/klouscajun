import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PHONE_LINK = 'tel:+16025968036'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seafood-boil-combo.jpg"
          alt="Authentic Cajun seafood boil with shrimp, sausage, corn, and potatoes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-gold font-display text-lg md:text-xl tracking-wider mb-4 animate-fade-in">
            AUTHENTIC LOUISIANA FLAVOR IN ARIZONA
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 text-balance">
            Real Cajun Food.{' '}
            <span className="text-gold">Real Hospitality.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            K.Lou&apos;s Cajun Shack & Catering brings authentic Cajun and Creole comfort 
            food to Arizona through catering, pop-ups, and specialty boils. From fried 
            catfish and jambalaya to crawfish, gator, and snowballs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-cajun-red hover:bg-cajun-red-light text-white text-lg px-8 py-6 shadow-lg"
            >
              <Link href="/catering" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Catering
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-cream text-cream hover:bg-cream hover:text-charcoal text-lg px-8 py-6"
            >
              <a href={PHONE_LINK} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto text-gold hover:bg-gold/10 text-lg px-8 py-6"
            >
              <Link href="/find-us" className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                See Current Location
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cream/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
