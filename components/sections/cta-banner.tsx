import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-cajun-red">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-balance">
            Ready to Experience Authentic Cajun Flavor?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re planning a party, looking for catering, or just craving 
            real Louisiana food - we&apos;ve got you covered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-cajun-red hover:bg-cream text-lg px-8 py-6 shadow-lg font-semibold"
            >
              <Link href="/catering" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Catering
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-cajun-red text-lg px-8 py-6"
            >
              <a href="tel:+16025968036" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (602) 596-8036
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
