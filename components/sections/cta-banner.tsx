import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-cajun-red to-cajun-red-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cajun-red-light/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
            Book the Next Gathering
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Ready to experience authentic Cajun flavor?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl">
            Book catering for your next event, lock in a crawfish boil, or call us to find 
            out where we&apos;ll be next.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-charcoal text-base px-8 py-6 rounded-full shadow-xl shadow-black/30 font-semibold"
            >
              <Link href="/catering">
                Book Catering
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-cajun-red text-base px-8 py-6 rounded-full shadow-lg"
            >
              <a href="tel:+16025968036" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
