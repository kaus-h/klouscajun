import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PHONE_LINK = 'tel:+16025968036'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-gold/20 to-transparent pointer-events-none" />
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-cajun-red/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="type-kicker text-cajun-red">
                Phoenix pop-ups, family meals, and catering worth planning around
              </p>
              <h1 className="type-hero text-charcoal max-w-[11ch]">
                Louisiana flavor that feels like a real welcome.
              </h1>
              <p className="type-lead max-w-2xl text-charcoal/80">
                K.Lou&apos;s Cajun Shack &amp; Catering brings authentic Cajun and Creole comfort
                food to Arizona through pop-ups, catering, and seasonal boils. The food is bold,
                the portions are generous, and the service feels personal.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-cajun-red hover:bg-cajun-red-light text-white rounded-full px-8"
              >
                <Link href="/catering">Book Catering</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-charcoal hover:bg-charcoal-light text-cream rounded-full px-8"
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
                className="justify-start px-0 text-charcoal hover:text-cajun-red"
              >
                <Link href="/find-us" className="flex items-center gap-2">
                  Find today&apos;s location
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="border-t border-charcoal/15 pt-4">
                <p className="type-kicker text-cajun-red/80">Eat Today</p>
                <h2 className="type-card-title text-charcoal mt-2">
                  Pull up for lunch, dinner, or a snowball stop.
                </h2>
                <p className="type-meta text-charcoal/70 mt-2">
                  Hardy Dr. in Tempe anchors the week, with Saturday pop-ups and rotating menu
                  favorites worth calling ahead for.
                </p>
              </div>
              <div className="border-t border-charcoal/15 pt-4">
                <p className="type-kicker text-cajun-red/80">Plan Ahead</p>
                <h2 className="type-card-title text-charcoal mt-2">
                  Feed the whole room without losing the neighborhood feel.
                </h2>
                <p className="type-meta text-charcoal/70 mt-2">
                  Private parties, corporate lunches, graduation spreads, and crawfish boils all
                  get the same direct communication and generous setup.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal shadow-2xl shadow-charcoal/20">
              <Image
                src="/images/catfish-plate.jpg"
                alt="Southern fried catfish plate with fries and hush puppies"
                fill
                priority
                loading="eager"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
            </div>

            <div className="absolute left-4 top-4 max-w-xs rounded-2xl bg-white/95 p-4 shadow-lg shadow-charcoal/10 backdrop-blur">
              <p className="type-kicker text-cajun-red">Today in Tempe</p>
              <p className="type-card-title text-charcoal mt-2">1328 W University Dr #104</p>
              <div className="mt-3 space-y-2 text-sm text-charcoal/75">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cajun-red" />
                  Tempe, AZ 85281
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-cajun-red" />
                  Mon-Thu 10:30 AM - 5:30 PM
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-0 max-w-sm rounded-3xl bg-charcoal p-6 text-cream shadow-2xl shadow-charcoal/30 sm:right-6">
              <p className="type-kicker text-gold">Crowd Favorites</p>
              <h2 className="type-card-title mt-2 text-cream">
                Catfish, jambalaya, crawfish, and plates that feel like a real spread.
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream/80">
                <li>Black-owned and family-run with 30 years of Louisiana cooking experience.</li>
                <li>Pop-ups for quick local meals and polished catering for bigger occasions.</li>
                <li>Crawfish season and specialty boils that give people a reason to call early.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
