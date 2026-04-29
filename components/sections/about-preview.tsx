import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const storyPoints = [
  '30 years of Louisiana cooking experience',
  'Black-owned and family-run',
  'Built on generous portions and genuine hospitality',
]

export function AboutPreview() {
  return (
    <section className="bg-charcoal py-16 md:py-24 text-cream">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-charcoal-light">
              <Image
                src="/images/beignets.jpg"
                alt="Fresh beignets from K.Lou's Cajun Shack"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 36vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="type-kicker text-gold">Our story</p>
              <h2 className="type-section-title max-w-2xl text-cream">
                Louisiana roots, Arizona regulars, and a reputation built one plate at a time.
              </h2>
            </div>

            <div className="space-y-4 text-cream/80">
              <p className="type-body">
                K.Lou&apos;s Cajun Shack &amp; Catering grew from owner Roderick M.&apos;s deep family
                connection to Cajun and Creole cooking. The recipes, portions, and hospitality all
                come from doing it the way it was taught at home.
              </p>
              <p className="type-body">
                That foundation is what lets the brand work for both family dinners and polished
                event catering. It doesn&apos;t feel fabricated because it isn&apos;t.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {storyPoints.map((point) => (
                <div key={point} className="border-t border-cream/15 pt-4">
                  <p className="type-meta text-cream/75">{point}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="rounded-md border-gold text-gold hover:bg-gold hover:text-charcoal"
            >
              <Link href="/about" className="flex items-center gap-2">
                Learn the full story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
