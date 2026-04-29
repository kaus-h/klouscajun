import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertCircle, Clock, MapPin, Phone } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = 
{
  title: 'Menu',
  description: 'Explore our authentic Cajun menu featuring boiled crawfish, fried gator, catfish & jambalaya, snowballs and more. Prices and menu items for K.Lou\'s Cajun Shack.',
}

// Menu Data
const featuredPlates = [
  {
    id: 1,
    name: 'Boiled Crawfish Plate',
    price: 20,
    description: 'Louisiana-style boiled crawfish served with potatoes and sausage. Our signature dish and seasonal favorite (available February - August).',
    image: '/images/shrimp-boil.jpg',
    tags: ['Signature', 'Seasonal'],
  },
  {
    id: 2,
    name: 'Cajun Fried Gator Plate',
    price: 18,
    description: 'Crispy fried alligator bites seasoned with our special Cajun blend. Served with potato salad and your choice of sweet peas or green beans.',
    image: '/images/jambalaya-combo.jpg',
    tags: ['Fan Favorite'],
  },
  {
    id: 3,
    name: 'Southern Fried Catfish & Jambalaya Plate',
    price: 15,
    description: 'Golden fried catfish fillets paired with our house-made jambalaya. Includes potato salad and your choice of sweet peas or green beans.',
    image: '/images/catfish-plate.jpg',
    tags: ['Fan Favorite'],
  },
]

const snowballFlavors = [
  'Zyher', 'Wedding Cake', "Tiger's Blood", 'Strawberry', 'Spearmint',
  'Watermelon', 'Cotton Candy (Pink)', 'Cotton Candy (Blue)', 'Hurricane',
  'Strawberry Cheesecake', 'Root Beer', 'Margarita', 'Bubble Gum',
  'Lemonade', 'Passion Fruit', 'Pina Colada', 'Mai Tai', 'Mojito', 'Granny Smith Apple',
]

const drinks = [
  {
    id: 1,
    name: 'Bottled Smart Water',
    price: 3,
    description: '20 fl oz bottle. Buy 2 for $6.',
  },
]

// Additional items sometimes available
const additionalItems = [
  'Jambalaya', 'Shrimp Boils', 'Gumbo', 'Po\'Boys', 'Beignets', 
  'Hush Puppies', 'Onion Rings', 'Corn on the Cob',
]

export default function MenuPage() {
  const [signaturePlate, ...secondaryPlates] = featuredPlates

  return (
    <>
      <Navigation />
      <main className="pb-20 lg:pb-0">
        <section className="relative overflow-hidden bg-cream pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-gold/20 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cajun-red/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_360px] lg:items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="type-kicker text-cajun-red">Taste the bayou</p>
                  <h1 className="type-page-title max-w-[12ch] text-charcoal">
                    Cajun plates, snowballs, and seasonal favorites.
                  </h1>
                  <p className="type-lead max-w-2xl text-charcoal/80">
                    Authentic Louisiana Cajun and Creole plates, seasonal crawfish, snowballs, and
                    pop-up favorites that still feel generous when they travel to a bigger event.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-charcoal text-cream hover:bg-charcoal-light"
                  >
                    <Link href="/find-us">Find today&apos;s location</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                  >
                    <a href="tel:+16025968036" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call ahead
                    </a>
                  </Button>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">Most asked about</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Crawfish, catfish, jambalaya, po-boys, and whatever people heard was running this week.
                    </p>
                  </div>
                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">Heads up</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Menu availability shifts by pop-up, season, and catering schedule.
                    </p>
                    <p className="type-meta mt-2 text-charcoal/65">
                      Call if you&apos;re making the trip for a specific plate or looking for a large pickup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal shadow-2xl shadow-charcoal/15">
                  <Image
                    src="/images/jambalaya-combo.jpg"
                    alt="Jambalaya combo with corn, sausage, and fried shrimp"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 34vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                <aside className="rounded-3xl bg-charcoal p-6 text-cream">
                  <div className="flex items-center gap-2 text-gold">
                    <Clock className="h-4 w-4" />
                    <span className="type-kicker text-gold">Hours</span>
                  </div>
                  <div className="mt-4 space-y-3 border-t border-cream/10 pt-4 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-cream/70">Mon - Thu</span>
                      <span className="font-semibold text-cream">10:30 AM - 5:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-cream/70">Fri - Sat</span>
                      <span className="font-semibold text-cream">11:00 AM - 5:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-cream/70">Sunday</span>
                      <span className="text-cream/45">Closed</span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-cream/10 pt-4">
                    <p className="type-kicker text-gold">Current stop</p>
                    <p className="type-card-title mt-2 text-cream">1314 W University Dr #104</p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-cream/70">
                      <MapPin className="h-4 w-4 text-gold" />
                      Tempe, AZ 85281
                    </p>
                    <p className="mt-4 flex items-start gap-2 text-sm text-cream/70">
                      <AlertCircle className="h-4 w-4 shrink-0 text-gold" />
                      Menu and hours can shift with pop-ups and larger catering events.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <p className="type-kicker text-cajun-red">Featured plates</p>
                <h2 className="type-section-title max-w-2xl text-charcoal">
                  Lead with the plates people actually mention when they call.
                </h2>
                <p className="type-body max-w-xl text-charcoal/75">
                  The menu doesn&apos;t need to feel like an index. One strong signature plate, then
                  supporting favorites that show the range.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
              <article className="grid gap-6 border-t border-charcoal/15 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.95fr)] lg:items-start">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {signaturePlate.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          tag === 'Signature'
                            ? 'bg-cajun-red text-white'
                            : tag === 'Seasonal'
                              ? 'bg-charcoal text-cream'
                              : 'bg-gold text-charcoal'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="type-section-title text-charcoal">{signaturePlate.name}</h3>
                  <p className="type-body max-w-xl text-charcoal/75">{signaturePlate.description}</p>
                  <p className="text-4xl font-semibold tracking-tight text-cajun-red">
                    ${signaturePlate.price}
                  </p>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-charcoal">
                  <Image
                    src={signaturePlate.image}
                    alt={signaturePlate.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 28vw"
                  />
                </div>
              </article>

              <div className="border-t border-charcoal/15 pt-6">
                <div className="space-y-6">
                  {secondaryPlates.map((item) => (
                    <article
                      key={item.id}
                      className="grid gap-4 border-b border-charcoal/10 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[152px_1fr]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 152px"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="type-card-title text-charcoal">{item.name}</h3>
                          <span className="text-xl font-semibold text-cajun-red">${item.price}</span>
                        </div>
                        <p className="type-meta text-charcoal/75">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream-dark py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="space-y-5">
                <p className="type-kicker text-cajun-red">Frozen treats</p>
                <h2 className="type-section-title max-w-xl text-charcoal">
                  New Orleans style snowballs deserve their own breathing room.
                </h2>
                <p className="type-body max-w-xl text-charcoal/75">
                  A light, fluffy Arizona cooldown with rotating flavors people come back for when
                  the weather turns brutal.
                </p>
                <div className="border-t border-charcoal/15 pt-5">
                  <p className="text-4xl font-semibold tracking-tight text-cajun-red">$6</p>
                  <p className="type-meta mt-2 text-charcoal/65">
                    One flavor included. Add-on flavors are +$2.
                  </p>
                </div>
                <p className="flex items-start gap-2 text-sm text-charcoal/65">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-cajun-red" />
                  Flavors can rotate, so call if you&apos;re chasing a specific one.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 md:p-8">
                <h3 className="type-card-title text-charcoal">Available flavors</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {snowballFlavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="rounded-full border border-charcoal/10 bg-cream px-4 py-2 text-sm font-medium text-charcoal"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
              <div className="space-y-4">
                <p className="type-kicker text-cajun-red">Drinks and extras</p>
                <h2 className="type-section-title text-charcoal">
                  Drinks, rotating sides, and pop-up extras.
                </h2>
                <p className="type-body text-charcoal/75">
                  The core plates anchor the menu, while extras can shift by season, event, and
                  what is running that week.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.45fr)]">
                <div className="border-t border-charcoal/15 pt-5">
                  <h3 className="type-card-title text-charcoal">Drinks</h3>
                  <div className="mt-5 space-y-4">
                    {drinks.map((item) => (
                      <div key={item.id} className="flex items-start justify-between gap-4">
                        <div>
                          <p className="type-card-title text-charcoal">{item.name}</p>
                          <p className="type-meta mt-1 text-charcoal/65">{item.description}</p>
                        </div>
                        <span className="text-xl font-semibold text-cajun-red">${item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-charcoal/15 pt-5">
                  <h3 className="type-card-title text-charcoal">Also ask about</h3>
                  <p className="type-meta mt-2 text-charcoal/65">
                    These show up at pop-ups and catering runs throughout the season.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {additionalItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-charcoal"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cajun-red py-16 md:py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="space-y-4">
                <p className="type-kicker text-white/75">Ready to order?</p>
                <h2 className="type-section-title max-w-2xl text-white">
                  Find the stop, call ahead, or start the catering conversation.
                </h2>
                <p className="type-body max-w-xl text-white/85">
                  Call ahead for a large pickup, find the current location, or move straight into a
                  catering quote if this needs to feed a room.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-white text-cajun-red hover:bg-cream"
                >
                  <Link href="/catering">Book Catering</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-2 border-white text-white hover:bg-white hover:text-cajun-red"
                >
                  <a href="tel:+16025968036" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call (602) 596-8036
                  </a>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-white hover:text-cream"
                >
                  <Link href="/find-us">See locations and hours</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
