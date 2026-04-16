import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
              30 years of Louisiana flavor, now in Arizona
            </h2>
            
            <div className="space-y-4 text-cream/90 leading-relaxed">
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
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-6 mb-8">
              <span className="px-4 py-2 bg-cajun-red text-white text-sm font-medium rounded-full shadow-md shadow-cajun-red/30">
                Black-owned
              </span>
              <span className="px-4 py-2 bg-cajun-red text-white text-sm font-medium rounded-full shadow-md shadow-cajun-red/30">
                Family-run
              </span>
              <span className="px-4 py-2 bg-gold text-charcoal text-sm font-medium rounded-full shadow-md shadow-gold/30">
                30+ Years Experience
              </span>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal rounded-full"
            >
              <Link href="/about" className="flex items-center gap-2">
                Learn Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-charcoal-medium">
              <Image
                src="/images/beignets.jpg"
                alt="Fresh beignets from K.Lou's Cajun Shack"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
