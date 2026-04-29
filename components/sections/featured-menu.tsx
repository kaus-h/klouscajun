import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredItems = [
  {
    id: 1,
    name: 'Boiled Crawfish Plate',
    price: 20,
    image: '/images/shrimp-boil.jpg',
    description: 'Comes with potatoes and sausage.',
    note: 'Seasonal favorite',
  },
  {
    id: 2,
    name: 'Cajun Fried Gator Plate',
    price: 18,
    image: '/images/fried-gator.jpg',
    description: 'Comes with potato salad and sweet peas or green beans.',
    note: 'Ask what is running today',
  },
  {
    id: 3,
    name: 'Southern Fried Catfish & Jambalaya Plate',
    price: 15,
    image: '/images/catfish-plate.jpg',
    description: 'Comes with potato salad and sweet peas or green beans.',
    note: 'Pop-up staple',
  },
  {
    id: 4,
    name: 'Snowballs',
    price: 6,
    image: null,
    description: 'One flavor included. Additional flavors +$2.',
    note: 'Arizona cooldown',
  },
  {
    id: 5,
    name: 'Bottled Smart Water',
    price: 3,
    image: '/images/jambalaya-combo.jpg',
    description: '20 fl oz. 2 for $6.',
    note: 'Simple and cold',
  },
]

export function FeaturedMenu() {
  const [signatureDish, ...secondaryDishes] = featuredItems

  return (
    <section className="bg-cream-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="type-kicker text-cajun-red">Menu favorites</p>
            <h2 className="type-section-title max-w-2xl text-charcoal">
              The plates people ask about before they even get in line.
            </h2>
            <p className="type-body max-w-xl text-charcoal/75">
              Crawfish, gator, catfish, jambalaya, snowballs, and the essentials that make a
              pop-up stop feel like a full spread.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="self-start rounded-md border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
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
              <p className="type-kicker text-cajun-red/80">{signatureDish.note}</p>
              <h3 className="type-section-title text-charcoal">{signatureDish.name}</h3>
              <p className="type-body max-w-xl text-charcoal/75">{signatureDish.description}</p>
              <p className="text-4xl font-semibold text-cajun-red">${signatureDish.price}</p>
              <p className="type-meta text-charcoal/65">
                Crawfish availability can shift with the season, so call ahead if this is the plate
                you&apos;re making the trip for.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal shadow-xl shadow-charcoal/10">
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
                  {item.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 160px"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-gold/35 bg-charcoal p-4 text-center text-cream">
                      <div>
                        <p className="type-kicker text-gold">Cool down</p>
                        <p className="mt-2 text-2xl font-semibold leading-none">19 flavors</p>
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="type-kicker text-cajun-red/75">{item.note}</p>
                        <h3 className="type-card-title mt-1 text-charcoal">{item.name}</h3>
                      </div>
                      <span className="text-xl font-semibold text-cajun-red">${item.price}</span>
                    </div>
                    <p className="type-meta text-charcoal/75">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <p className="type-meta mt-8 max-w-2xl border-t border-charcoal/15 pt-5 text-charcoal/65">
          Menu availability and locations may vary by pop-up, season, and catering schedule.
        </p>
      </div>
    </section>
  )
}
