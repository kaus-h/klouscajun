import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  MapPin, Clock, Phone, Navigation, Calendar, AlertCircle 
} from 'lucide-react'
import { Navigation as SiteNavigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Find Us',
  description: 'Find K.Lou\'s Cajun Shack locations in Phoenix & Tempe, AZ. Current pop-up locations, operating hours, and upcoming events.',
}

const locations = [
  {
    id: 1,
    name: 'Hardy Dr Location',
    address: '615 S Hardy Dr',
    city: 'Tempe, AZ 85281',
    status: 'Primary Location',
    mapLink: 'https://maps.google.com/?q=615+S+Hardy+Dr+Tempe+AZ+85281',
    hours: {
      'Mon - Thu': '10:30 AM - 5:30 PM',
      'Fri - Sat': '11:00 AM - 5:30 PM',
      'Sunday': 'Closed',
    },
    isPrimary: true,
  },
  {
    id: 2,
    name: 'Yilo Superstore Pop-Up',
    address: '2841 W. Thunderbird Rd',
    city: 'Phoenix, AZ',
    status: 'Weekend Pop-Up',
    mapLink: 'https://maps.google.com/?q=2841+W+Thunderbird+Rd+Phoenix+AZ',
    hours: {
      'Saturday': '11:00 AM - 5:30 PM',
    },
    isPrimary: false,
  },
]

const operatingHours = [
  { days: 'Monday - Thursday', hours: '10:30 AM - 5:30 PM', location: 'Hardy Dr' },
  { days: 'Friday - Saturday', hours: '11:00 AM - 5:30 PM', location: 'Hardy Dr & Yilo' },
  { days: 'Sunday', hours: 'Closed', location: '' },
]

export default function FindUsPage() {
  const primaryLocation = locations.find((location) => location.isPrimary) ?? locations[0]
  const secondaryLocations = locations.filter((location) => !location.isPrimary)

  return (
    <>
      <SiteNavigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        <section className="relative overflow-hidden bg-cream py-16 md:py-24">
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-gold/20 to-transparent pointer-events-none" />
          <div className="absolute left-0 top-6 h-72 w-72 rounded-full bg-cajun-red/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="type-kicker text-cajun-red">Find us</p>
                  <h1 className="type-page-title max-w-[12ch] text-charcoal">
                    Show the current stop first so people know where to go without guessing.
                  </h1>
                  <p className="type-lead max-w-2xl text-charcoal/80">
                    K.Lou&apos;s runs from Tempe through Phoenix pop-ups, so this page needs to tell
                    people today&apos;s best answer quickly and let the rest of the schedule support it.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-charcoal text-cream hover:bg-charcoal-light"
                  >
                    <a
                      href={primaryLocation.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Navigation className="h-5 w-5" />
                      Get directions
                    </a>
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
                    <p className="type-kicker text-cajun-red/80">Current anchor</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Hardy Dr. in Tempe is the main reference point for weekday service.
                    </p>
                  </div>
                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">Before you drive</p>
                    <p className="type-card-title mt-2 text-charcoal">
                      Pop-up schedules can shift, so a quick call is still the safest move.
                    </p>
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl bg-charcoal p-6 text-cream">
                <p className="type-kicker text-gold">Today&apos;s best stop</p>
                <p className="type-card-title mt-2 text-cream">{primaryLocation.name}</p>
                <p className="type-meta mt-2 text-cream/70">
                  {primaryLocation.address}, {primaryLocation.city}
                </p>
                <div className="mt-5 space-y-3 border-t border-cream/10 pt-4 text-sm">
                  {Object.entries(primaryLocation.hours).map(([day, time]) => (
                    <div key={day} className="flex items-center justify-between gap-4">
                      <span className="text-cream/70">{day}</span>
                      <span className={time === 'Closed' ? 'text-cream/45' : 'font-semibold text-cream'}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 flex items-start gap-2 border-t border-cream/10 pt-4 text-sm text-cream/70">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  Hours and locations can vary with pop-ups and catering runs.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_320px] lg:items-start">
              <article className="border-t border-charcoal/15 pt-6">
                <div className="space-y-4">
                  <p className="type-kicker text-cajun-red">Primary location</p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="type-section-title text-charcoal">{primaryLocation.name}</h2>
                      <p className="type-body mt-2 text-charcoal/75">
                        {primaryLocation.address}, {primaryLocation.city}
                      </p>
                    </div>
                    <span className="rounded-full bg-cajun-red px-4 py-2 text-sm font-semibold text-white">
                      {primaryLocation.status}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
                  <div className="space-y-4">
                    <p className="type-body text-charcoal/75">
                      This is the clearest answer for people looking for a dependable weekday stop.
                      If there&apos;s a change in schedule, call and we&apos;ll tell you where to head.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                      <Button
                        asChild
                        className="rounded-full bg-charcoal text-cream hover:bg-charcoal-light"
                      >
                        <a
                          href={primaryLocation.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Navigation className="h-4 w-4" />
                          Get directions
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                      >
                        <a href="tel:+16025968036" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Call ahead
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t border-charcoal/15 pt-4">
                    <p className="type-kicker text-cajun-red/80">Hours</p>
                    <div className="mt-4 space-y-3 text-sm">
                      {Object.entries(primaryLocation.hours).map(([day, time]) => (
                        <div key={day} className="flex items-center justify-between gap-4">
                          <span className="text-charcoal/60">{day}</span>
                          <span className={time === 'Closed' ? 'text-charcoal/40' : 'font-semibold text-charcoal'}>
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <div className="space-y-8">
                {secondaryLocations.map((location) => (
                  <article key={location.id} className="border-t border-charcoal/15 pt-5">
                    <p className="type-kicker text-cajun-red/80">{location.status}</p>
                    <h3 className="type-card-title mt-2 text-charcoal">{location.name}</h3>
                    <p className="type-meta mt-2 text-charcoal/70">
                      {location.address}, {location.city}
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-charcoal/65">
                      {Object.entries(location.hours).map(([day, time]) => (
                        <div key={day} className="flex items-center justify-between gap-4">
                          <span>{day}</span>
                          <span className="font-semibold text-charcoal">{time}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}

                <div className="rounded-3xl bg-cream-dark p-6">
                  <p className="type-kicker text-cajun-red">Need certainty?</p>
                  <p className="type-meta mt-3 text-charcoal/70">
                    A quick phone call is still the best way to confirm the active stop before you
                    head over.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream-dark py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
              <div className="space-y-4">
                <p className="type-kicker text-cajun-red">Weekly schedule</p>
                <h2 className="type-section-title text-charcoal">
                  Keep the ongoing schedule visible, but secondary to the active location.
                </h2>
                <p className="type-body text-charcoal/75">
                  This section supports repeat customers and catering clients checking general service
                  windows throughout the week.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_320px]">
                <div className="rounded-3xl bg-white p-6 md:p-8">
                  {operatingHours.map((schedule, index) => (
                    <div
                      key={schedule.days}
                      className={`flex items-center justify-between gap-4 py-4 ${
                        index !== operatingHours.length - 1 ? 'border-b border-charcoal/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-cajun-red" />
                        <div>
                          <p className="font-medium text-charcoal">{schedule.days}</p>
                          {schedule.location && (
                            <p className="text-sm text-charcoal/50">{schedule.location}</p>
                          )}
                        </div>
                      </div>
                      <span className={schedule.hours === 'Closed' ? 'text-charcoal/40' : 'font-semibold text-charcoal'}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-charcoal p-8 text-cream">
                  <p className="type-kicker text-gold">Service area</p>
                  <h3 className="type-card-title mt-2 text-cream">
                    Serving Phoenix, Tempe, and catering deliveries throughout the Valley.
                  </h3>
                  <p className="type-meta mt-3 text-cream/75">
                    If your event sits outside the usual area, reach out and we&apos;ll tell you what&apos;s
                    possible.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button
                      asChild
                      className="rounded-full bg-gold text-charcoal hover:bg-gold-light"
                    >
                      <Link href="/catering" className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Book catering
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="link"
                      className="h-auto justify-start p-0 text-cream hover:text-gold"
                    >
                      <a href="tel:+16025968036" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call (602) 596-8036
                      </a>
                    </Button>
                  </div>
                </div>
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
