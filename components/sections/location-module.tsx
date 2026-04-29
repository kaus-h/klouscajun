import Link from 'next/link'
import { Calendar, Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const currentLocation = {
  name: "Today's Pop-Up",
  address: '1314 W University Dr #104, Tempe, AZ',
  status: 'Call Ahead to Confirm',
  hours: 'Updated weekly',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=1314+W+University+Dr+%23104+Tempe+AZ',
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
    name: 'University Dr Stop',
    address: '1314 W University Dr #104, Tempe',
    date: 'Schedule varies',
    time: 'Call ahead for the latest hours',
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
                Check the active stop first, then plan your next visit.
              </h2>
              <p className="type-body max-w-xl text-charcoal/75">
                Pop-up locations can shift with catering runs and seasonal events, so the fastest
                move is to check the featured stop and call ahead before you drive.
              </p>
            </div>

            <article className="border-t border-charcoal/15 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="type-kicker text-cajun-red/80">{currentLocation.status}</p>
                  <h3 className="type-section-title text-charcoal">{currentLocation.name}</h3>
                  <p className="type-body text-charcoal/75">{currentLocation.address}</p>
                </div>
                <p className="rounded-md bg-cajun-red px-4 py-2 text-sm font-semibold text-white">
                  {currentLocation.hours}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="rounded-md bg-charcoal text-cream hover:bg-charcoal-light"
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
                  className="rounded-md border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
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

          <aside className="rounded-lg bg-charcoal p-8 text-cream">
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
                Pop-up hours can shift with catering and larger events. If you&apos;re making the
                trip, call first and we&apos;ll point you toward the active stop.
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
