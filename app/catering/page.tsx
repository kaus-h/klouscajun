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

const planningNotes = [
  'Tell us the date, guest count, and whether this needs pickup, delivery, or on-site setup.',
  'If you already know the plates people are asking for, include them in the notes.',
  'For crawfish boils and seasonal menus, earlier inquiries give you the best chance at the date you want.',
]

export default function CateringPage() {
  const [featuredTestimonial, ...supportingTestimonials] = cateringTestimonials

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        <section className="relative overflow-hidden bg-cream py-16 md:py-24">
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-gold/20 to-transparent pointer-events-none" />
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cajun-red/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="type-kicker text-cajun-red">Catering services</p>
                  <h1 className="type-page-title max-w-[12ch] text-charcoal">
                    Feed the event without losing the family-run feel.
                  </h1>
                  <p className="type-lead max-w-2xl text-charcoal/80">
                    K.Lou&apos;s caters celebrations, office lunches, community events, and crawfish
                    boils with direct communication, dependable timing, and food people actually
                    remember.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-cajun-red text-white hover:bg-cajun-red-light"
                  >
                    <a href="#catering-form">Get a quote</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                  >
                    <a href="tel:+16025968036" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      (602) 596-8036
                    </a>
                  </Button>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">For family tables</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Big portions, familiar comfort, and the kind of spread people circle back to.
                    </p>
                  </div>
                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">For polished events</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Clear planning, dependable arrival, and food that still feels personal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal shadow-2xl shadow-charcoal/15">
                  <Image
                    src="/images/shrimp-boil.jpg"
                    alt="Shrimp boil catering spread from K.Lou's Cajun Shack"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 36vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                <aside className="rounded-3xl bg-charcoal p-6 text-cream">
                  <p className="type-kicker text-gold">What people care about</p>
                  <div className="mt-4 space-y-4 border-t border-cream/10 pt-4">
                    <div>
                      <p className="type-card-title text-cream">Flexible service</p>
                      <p className="type-meta mt-2 text-cream/70">
                        Pickup, delivery, or on-site catering depending on the size and setup.
                      </p>
                    </div>
                    <div>
                      <p className="type-card-title text-cream">Seasonal boil bookings</p>
                      <p className="type-meta mt-2 text-cream/70">
                        Crawfish reservations run February through August and should be planned early.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
              <div className="space-y-4">
                <p className="type-kicker text-cajun-red">Occasions</p>
                <h2 className="type-section-title max-w-xl text-charcoal">
                  Group the reasons people hire you instead of repeating six identical cards.
                </h2>
                <p className="type-body max-w-xl text-charcoal/75">
                  These are the event types that come up most often, from graduation parties and
                  family gatherings to office lunches and community events.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {eventTypes.map((event) => (
                  <article key={event.label} className="border-t border-charcoal/15 pt-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cajun-red/10">
                        <event.icon className="h-6 w-6 text-cajun-red" />
                      </span>
                      <div>
                        <h3 className="type-card-title text-charcoal">{event.label}</h3>
                        <p className="type-meta mt-2 text-charcoal/70">{event.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-charcoal py-16 md:py-20 text-cream">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="space-y-4">
                <p className="type-kicker text-gold">Service options</p>
                <h2 className="type-section-title max-w-xl text-cream">
                  The service model should read like a plan, not a row of icons.
                </h2>
                <p className="type-body max-w-xl text-cream/75">
                  Choose the level that fits the event and budget, then use the inquiry form to tell
                  us what kind of setup you need.
                </p>
              </div>

              <div className="space-y-6">
                {serviceOptions.map((option, index) => (
                  <article
                    key={option.title}
                    className="grid gap-4 border-t border-cream/15 pt-5 sm:grid-cols-[56px_minmax(0,1fr)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <option.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold tracking-[0.14em] text-gold/75">
                          0{index + 1}
                        </span>
                        <h3 className="type-card-title text-cream">{option.title}</h3>
                      </div>
                      <p className="type-meta text-cream/70">{option.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cajun-red py-16 md:py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:items-center">
              <div className="space-y-6">
                <p className="type-kicker text-white/75">Signature experience</p>
                <h2 className="type-section-title max-w-xl text-white">
                  Crawfish boil reservations are the big seasonal moment.
                </h2>
                <p className="type-body max-w-xl text-white/85">
                  Host an authentic Louisiana crawfish boil at your next event! Our crawfish 
                  boils are a signature experience that brings the bayou to Arizona. Perfect 
                  for parties of all sizes.
                </p>
                <div className="space-y-3">
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
                  className="rounded-full bg-white text-cajun-red hover:bg-cream"
                >
                  <a href="#catering-form">Reserve your crawfish boil</a>
                </Button>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-black/20">
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

        <section className="bg-cream-dark py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
              <div className="space-y-6 border-t border-charcoal/15 pt-6">
                <p className="type-kicker text-cajun-red">Client feedback</p>
                <h2 className="type-section-title max-w-2xl text-charcoal">
                  The quote process matters, but the event-day follow-through is what people remember.
                </h2>
                <blockquote className="space-y-5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < featuredTestimonial.rating
                            ? 'fill-gold text-gold'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="type-lead text-charcoal">
                    &ldquo;{featuredTestimonial.content}&rdquo;
                  </p>
                  <footer className="border-t border-charcoal/10 pt-4">
                    <p className="type-card-title text-charcoal">{featuredTestimonial.name}</p>
                    <p className="type-meta mt-1 text-charcoal/60">{featuredTestimonial.event}</p>
                  </footer>
                </blockquote>
              </div>

              <div className="space-y-6">
                {supportingTestimonials.map((testimonial) => (
                  <article key={testimonial.name} className="border-t border-charcoal/15 pt-5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-4 w-4 ${
                            index < testimonial.rating
                              ? 'fill-gold text-gold'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="type-meta mt-3 text-base leading-relaxed text-charcoal/75">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <p className="type-card-title mt-4 text-charcoal">{testimonial.name}</p>
                    <p className="type-meta mt-1 text-charcoal/60">{testimonial.event}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="catering-form" className="bg-cream py-16 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="type-kicker text-cajun-red">Inquiry form</p>
                  <h2 className="type-section-title max-w-xl text-charcoal">
                    Give us the planning basics and we&apos;ll shape the quote from there.
                  </h2>
                  <p className="type-body text-charcoal/75">
                    Tell us about the date, headcount, service type, and any must-have menu items.
                    We&apos;ll follow up with next steps and a custom quote.
                  </p>
                </div>

                <div className="space-y-4">
                  {planningNotes.map((note) => (
                    <div key={note} className="flex items-start gap-3 border-t border-charcoal/15 pt-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cajun-red" />
                      <p className="type-meta text-charcoal/70">{note}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-charcoal/15 pt-4">
                  <p className="type-kicker text-cajun-red/80">Need a faster answer?</p>
                  <a href="tel:+16025968036" className="type-card-title mt-2 block text-charcoal hover:text-cajun-red">
                    Call (602) 596-8036
                  </a>
                </div>
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
