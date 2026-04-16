import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Phone, AlertCircle } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
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
  return (
    <>
      <Navigation />
      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-charcoal text-cream overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/jambalaya-combo.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4">
            <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              Taste the Bayou
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-cream/80 max-w-2xl text-lg">
              Authentic Louisiana Cajun & Creole cuisine made with love and served 
              with real Southern hospitality.
            </p>
            
            {/* Hours Badge */}
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gold/20 rounded-full">
              <Clock className="h-5 w-5 text-gold" />
              <span className="text-gold font-medium">Open Today: 11 AM - 7 PM</span>
            </div>
          </div>
        </section>

        {/* Menu Disclaimer */}
        <section className="bg-cream py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 text-charcoal/70 text-sm">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <p>Menu availability may vary by pop-up location, season, or catering event. Call ahead to confirm.</p>
            </div>
          </div>
        </section>

        {/* Featured Plates Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <p className="text-cajun-red font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
                Featured Plates
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">
                Our signature dishes
              </h2>
              <p className="text-charcoal/70">The plates that keep customers coming back</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {featuredPlates.map((item) => (
                <Card key={item.id} className="overflow-hidden bg-white border-0 shadow-md">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-cajun-red text-white font-bold px-4 py-2 rounded-full text-xl shadow-lg">
                      ${item.price}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-xs font-semibold rounded ${
                            tag === 'Signature'
                              ? 'bg-cajun-red text-white'
                              : tag === 'Seasonal'
                              ? 'bg-charcoal text-white'
                              : 'bg-gold text-charcoal'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                      {item.name}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Snowballs Section */}
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="mb-10">
                <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
                  Frozen Treats
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                  New Orleans Style Snowballs
                </h2>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-3xl font-bold text-gold">$6</span>
                  <span className="text-cream/70">1 flavor included | Add-on flavors +$2</span>
                </div>
              </div>

              <Card className="bg-charcoal-light border-charcoal-light overflow-hidden">
                <div className="relative h-48 md:h-64">
                  <Image
                    src="/images/beignets.jpg"
                    alt="Fresh beignets - a New Orleans classic treat"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-gold mb-4">Available Flavors:</h3>
                  <div className="flex flex-wrap gap-2">
                    {snowballFlavors.map((flavor) => (
                      <span
                        key={flavor}
                        className="px-3 py-1 border border-cream/30 text-cream text-sm rounded-full"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Drinks Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">
                  Drinks
                </h2>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                {drinks.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal">{item.name}</h3>
                      <p className="text-charcoal/70 text-sm">{item.description}</p>
                    </div>
                    <span className="text-xl font-bold text-cajun-red">${item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Also Available Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
                Also Seen at Pop-Ups & Catering
              </h2>
              <p className="text-charcoal/70 mb-8">
                We often feature these items at events and catering. Ask about availability!
              </p>
              <div className="flex flex-wrap gap-3">
                {additionalItems.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-cream rounded-full text-charcoal font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-cajun-red text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-white/80 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
                Ready to Order?
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Visit us or book catering for your next event
              </h2>
              <p className="text-white/90 mb-8">
                Visit us at our current location or call ahead for large orders. 
                Planning an event? Let us cater your next celebration!
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-charcoal font-semibold rounded-full"
                >
                  <Link href="/catering">Book Catering</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-cajun-red rounded-full"
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
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
