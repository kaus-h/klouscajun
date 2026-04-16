import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-cajun-red font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
              30 years of Louisiana flavor, now in Arizona
            </h2>
            
            <div className="space-y-4 text-charcoal leading-relaxed">
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
              <span className="px-4 py-2 bg-cajun-red/10 text-cajun-red text-sm font-medium rounded-full">
                Black-owned
              </span>
              <span className="px-4 py-2 bg-cajun-red/10 text-cajun-red text-sm font-medium rounded-full">
                Family-run
              </span>
              <span className="px-4 py-2 bg-cajun-red/10 text-cajun-red text-sm font-medium rounded-full">
                30+ Years Experience
              </span>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-full"
            >
              <Link href="/about" className="flex items-center gap-2">
                Learn Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/beignets.jpg"
                alt="Fresh beignets from K.Lou's Cajun Shack"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
