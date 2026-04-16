import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
              OUR STORY
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              30 Years of{' '}
              <span className="text-cajun-red">Louisiana Flavor</span>
            </h2>
            
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                K.Lou&apos;s Cajun Shack & Catering was born from a deep love of authentic 
                Louisiana cuisine and a passion for bringing that flavor to Arizona. Owner 
                Roderick M. brings over 30 years of experience cooking traditional Cajun 
                and Creole dishes the way his family taught him.
              </p>
              <p>
                What started as cooking for friends and family has grown into a beloved 
                food truck and catering service that serves the Phoenix and Tempe 
                communities. We believe in using quality ingredients, generous portions, 
                and treating every customer like family.
              </p>
              <p>
                As a Black-owned, family-run business, we take pride in every dish we 
                serve. Whether you&apos;re stopping by our pop-up for lunch or hiring us 
                for your next big event, you&apos;ll taste the difference that passion 
                and experience make.
              </p>
            </div>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-cajun-red text-cajun-red hover:bg-cajun-red hover:text-white"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn Our Full Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/shrimp-poboy.jpg"
                alt="Authentic Cajun shrimp po-boy from K.Lou's"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-cajun-red text-white p-4 md:p-6 rounded-lg shadow-xl">
              <p className="font-display text-lg md:text-xl">Family-Run</p>
              <p className="text-sm opacity-90">Since Day One</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
