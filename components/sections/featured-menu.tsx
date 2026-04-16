import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredItems = [
  {
    id: 1,
    name: 'Southern Fried Catfish Plate',
    image: '/images/catfish-plate.jpg',
    description: '5pc catfish with homemade Cajun seasoned fries and 2 hush puppies',
  },
  {
    id: 2,
    name: 'Jambalaya Combo',
    image: '/images/jambalaya-combo.jpg',
    description: 'Jambalaya with corn, sausage, and fried shrimp',
  },
  {
    id: 3,
    name: 'Shrimp Po-Boy',
    image: '/images/crawfish-poboy.jpg',
    description: 'Crispy fried shrimp on fresh French bread with all the fixings',
  },
]

export function FeaturedMenu() {
  const [signatureDish, ...secondaryDishes] = featuredItems

  return (
    <section className="bg-cream-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="type-kicker text-cajun-red">Signature dishes</p>
            <h2 className="type-section-title max-w-2xl text-charcoal">
              The plates people talk about after the pop-up wraps up.
            </h2>
            <p className="type-body max-w-xl text-charcoal/75">
              No filler grid of menu items here. These are the plates regulars mention by name
              when they call ahead or bring K.Lou&apos;s into an event.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="self-start rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
          >
            <Link href="/menu" className="flex items-center gap-2">
              View full menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <article className="grid gap-6 border-t border-charcoal/15 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.95fr)]">
            <div className="space-y-4">
              <p className="type-kicker text-cajun-red/80">Most requested plate</p>
              <h3 className="type-section-title text-charcoal">{signatureDish.name}</h3>
              <p className="type-body max-w-xl text-charcoal/75">{signatureDish.description}</p>
              <p className="type-meta text-charcoal/65">
                Crispy, generous, and instantly recognizable. It carries the same energy whether
                you&apos;re grabbing dinner or feeding a party.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-charcoal shadow-xl shadow-charcoal/10">
              <Image
                src={signatureDish.image}
                alt={signatureDish.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 28vw"
              />
            </div>
          </article>

          <div className="border-t border-charcoal/15 pt-6">
            <div className="space-y-6">
              {secondaryDishes.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-4 border-b border-charcoal/10 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[160px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 160px"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="type-card-title text-charcoal">{item.name}</h3>
                    <p className="type-meta text-charcoal/75">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
