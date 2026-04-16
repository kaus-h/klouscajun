import Link from 'next/link'
import { Calendar, Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const currentLocation = {
  name: '1328 W University Dr #104',
  address: '1328 W University Dr #104, Tempe, AZ 85281',
  status: 'Open Today',
  hours: '10:30 AM - 5:30 PM',
  mapLink: 'https://www.google.com/maps/place/1328+W+University+Dr,+Tempe,+AZ+85281',
}

const upcomingEvents = [
  {
    id: 1,
    name: 'Yilo Superstore Pop-Up',
    address: '2841 W. Thunderbird Rd',
    date: 'Saturday',
    time: '11:00 AM - 5:30 PM',
  },
  {
    id: 2,
    name: 'University Dr Location',
    address: '1328 W University Dr #104, Tempe',
    date: 'Every Other Saturday',
    time: '10:30 AM - 10:00 PM',
  },
]

export function LocationModule() {
  const weeklyHours = [
    { days: 'Monday - Thursday', hours: '10:30 AM - 5:30 PM' },
    { days: 'Friday - Saturday', hours: '11:00 AM - 5:30 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="type-kicker text-cajun-red">Find us</p>
              <h2 className="type-section-title max-w-2xl text-charcoal">
                Make the food stop easy to understand before people start scrolling.
              </h2>
              <p className="type-body max-w-xl text-charcoal/75">
                The current location needs to be immediate. The pop-up schedule should support it,
                not compete with it.
              </p>
            </div>

            <article className="border-t border-charcoal/15 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="type-kicker text-cajun-red/80">{currentLocation.status}</p>
                  <h3 className="type-section-title text-charcoal">{currentLocation.name}</h3>
                  <p className="type-body text-charcoal/75">{currentLocation.address}</p>
                </div>
                <p className="rounded-full bg-cajun-red px-4 py-2 text-sm font-semibold text-white">
                  {currentLocation.hours}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="rounded-full bg-charcoal text-cream hover:bg-charcoal-light"
                >
                  <a
                    href={currentLocation.mapLink}
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
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <article key={event.id} className="border-t border-charcoal/15 pt-5">
                  <p className="type-kicker text-cajun-red/80">{event.date}</p>
                  <h3 className="type-card-title mt-2 text-charcoal">{event.name}</h3>
                  <p className="type-meta mt-2 text-charcoal/75">{event.address}</p>
                  <p className="type-meta mt-3 text-charcoal/65">{event.time}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-charcoal p-8 text-cream">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gold" />
              <p className="type-card-title text-cream">Weekly schedule</p>
            </div>

            <div className="mt-6 space-y-4">
              {weeklyHours.map((schedule) => (
                <div
                  key={schedule.days}
                  className="flex items-center justify-between gap-4 border-t border-cream/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-2 text-sm text-cream/75">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>{schedule.days}</span>
                  </div>
                  <span
                    className={schedule.hours === 'Closed' ? 'text-sm text-cream/45' : 'text-sm font-semibold text-gold'}
                  >
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-cream/10 pt-6">
              <p className="type-meta text-cream/70">
                Hours can shift with pop-up schedules and larger events. If you&apos;re making the
                trip, call first and we&apos;ll point you the right way.
              </p>
              <Button
                asChild
                variant="link"
                className="mt-4 h-auto p-0 text-gold hover:text-gold-light"
              >
                <Link href="/find-us" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  View all locations and hours
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
