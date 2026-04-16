import type { Metadata } from 'next'
import Image from 'next/image'
import { 
  PartyPopper, GraduationCap, Briefcase, Users, Heart, 
  Calendar, Truck, MapPin, Phone, Star, CheckCircle 
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { CateringForm } from '@/components/catering-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Catering Services',
  description: 'Cajun catering in Phoenix & Tempe for birthdays, graduations, corporate events, crawfish boils & more. Get a quote from K.Lou\'s Cajun Shack & Catering.',
}

const eventTypes = [
  { icon: PartyPopper, label: 'Private Parties', description: 'Birthdays, anniversaries & celebrations' },
  { icon: GraduationCap, label: 'Graduations', description: 'Celebrate the milestone with bold flavor' },
  { icon: Briefcase, label: 'Corporate Events', description: 'Office lunches & company gatherings' },
  { icon: Users, label: 'Family Gatherings', description: 'Reunions & holiday celebrations' },
  { icon: Heart, label: 'Weddings', description: 'Rehearsal dinners & receptions' },
  { icon: Calendar, label: 'Community Events', description: 'Festivals, fundraisers & more' },
]

const serviceOptions = [
  { 
    icon: MapPin, 
    title: 'Pickup', 
    description: 'Order ahead and pick up at our location. Perfect for smaller events.' 
  },
  { 
    icon: Truck, 
    title: 'Delivery', 
    description: 'We deliver to your event location throughout the Phoenix/Tempe area.' 
  },
  { 
    icon: Users, 
    title: 'On-Site Catering', 
    description: 'Full-service catering with setup, serving, and cleanup.' 
  },
]

const cateringTestimonials = [
  {
    name: 'Jennifer R.',
    event: 'Graduation Party',
    content: 'They exceeded all expectations. Food arrived early, stayed hot, and our guests went back for seconds and thirds. Amazing communication!',
    rating: 5,
  },
  {
    name: 'Robert J.',
    event: 'Corporate Event',
    content: 'Everyone was impressed. Professional setup, delicious food, and spotless cleanup. The jambalaya was the star of the show!',
    rating: 5,
  },
  {
    name: 'Tamika W.',
    event: 'Crawfish Boil',
    content: 'Fair prices, authentic flavors, and the owner genuinely cares about his customers. The crawfish boil was unforgettable.',
    rating: 5,
  },
]

export default function CateringPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-charcoal text-cream overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/shrimp-boil.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
              CATERING SERVICES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              Let Us Cater Your{' '}
              <span className="text-gold">Next Event</span>
            </h1>
            <p className="text-cream/90 max-w-2xl mx-auto text-lg leading-relaxed">
              We cater events of all sizes with bold Cajun flavor, dependable service, 
              and the kind of food people remember long after the party is over.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-cajun-red hover:bg-cajun-red-light text-white"
              >
                <a href="#catering-form">Get a Quote</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream text-cream hover:bg-cream hover:text-charcoal"
              >
                <a href="tel:+16025968036" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (602) 596-8036
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Perfect For Any Occasion
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From intimate family gatherings to large corporate events, we bring 
                authentic Louisiana flavor to every celebration.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {eventTypes.map((event) => (
                <Card key={event.label} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-cajun-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <event.icon className="h-7 w-7 text-cajun-red" />
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">{event.label}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Options Section */}
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Flexible Service Options
              </h2>
              <p className="text-cream/70 max-w-xl mx-auto">
                Choose the service level that works best for your event and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {serviceOptions.map((option) => (
                <div key={option.title} className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-cream/70 text-sm">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crawfish Boil Section */}
        <section className="py-16 md:py-20 bg-cajun-red text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <p className="text-white/70 font-display text-sm tracking-wider mb-2">
                  SIGNATURE EXPERIENCE
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Crawfish Boil Reservations
                </h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Host an authentic Louisiana crawfish boil at your next event! Our crawfish 
                  boils are a signature experience that brings the bayou to Arizona. Perfect 
                  for parties of all sizes.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>Seasonal availability: February - August</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>Fresh Louisiana crawfish</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>Traditional boil with corn, potatoes & sausage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>All supplies & setup included</span>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-cajun-red hover:bg-cream font-semibold"
                >
                  <a href="#catering-form">Reserve Your Crawfish Boil</a>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/seafood-boil-combo.jpg"
                  alt="Louisiana seafood boil with shrimp, corn, potatoes and sausage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-cream-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                What Our Catering Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {cateringTestimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? 'fill-gold text-gold'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-charcoal/80 mb-4 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="text-sm">
                      <p className="font-semibold text-charcoal">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Catering Form Section */}
        <section id="catering-form" className="py-16 md:py-20 bg-cream scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                  Get Your Catering Quote
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your event and we&apos;ll create a custom menu and quote for you.
                </p>
              </div>

              <CateringForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
