import Link from 'next/link'
import { MapPin, Clock, Calendar, Navigation, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const currentLocation = {
  name: '615 S Hardy Dr',
  address: '615 S Hardy Dr, Tempe, AZ 85281',
  status: 'Open Today',
  hours: '10:30 AM - 5:30 PM',
  mapLink: 'https://maps.google.com/?q=615+S+Hardy+Dr+Tempe+AZ+85281',
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
    name: 'Hardy Dr Location',
    address: '615 S Hardy Dr, Tempe',
    date: 'Mon - Thu',
    time: '10:30 AM - 5:30 PM',
  },
]

export function LocationModule() {
  return (
    <section className="py-16 md:py-24 bg-charcoal-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4 leading-tight">
            Where to get your fix
          </h2>
          <p className="text-cream/90 max-w-xl">
            Catch us at our regular locations or check our upcoming pop-up events.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl">
          {/* Current Location Card */}
          <Card className="lg:col-span-2 bg-charcoal border-charcoal-medium shadow-xl shadow-black/30 overflow-hidden">
            <CardHeader className="bg-cajun-red text-white p-6">
              <div className="flex items-center justify-between">
                <CardTitle className="font-serif text-2xl flex items-center gap-3">
                  <MapPin className="h-6 w-6" />
                  Current Location
                </CardTitle>
                <span className="px-3 py-1 bg-gold text-charcoal font-semibold text-sm rounded shadow-md">
                  {currentLocation.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cream mb-2">
                {currentLocation.name}
              </h3>
              <p className="text-cream/80 mb-4">
                {currentLocation.address}
              </p>
              <div className="flex items-center gap-2 text-cream mb-6">
                <Clock className="h-5 w-5 text-gold" />
                <span className="font-medium">{currentLocation.hours}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-gold hover:bg-gold-light text-charcoal rounded-full shadow-lg shadow-gold/30"
                >
                  <a
                    href={currentLocation.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-cream text-cream hover:bg-cream hover:text-charcoal rounded-full"
                >
                  <a href="tel:+16025968036" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Ahead
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-charcoal border-charcoal-medium shadow-xl shadow-black/30">
            <CardHeader className="bg-charcoal-medium text-cream p-6">
              <CardTitle className="font-serif text-xl flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gold" />
                Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`p-4 ${
                    index !== upcomingEvents.length - 1 ? 'border-b border-charcoal-medium' : ''
                  }`}
                >
                  <p className="font-semibold text-cream">{event.name}</p>
                  <p className="text-sm text-cream/70">{event.address}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="px-2 py-0.5 bg-gold/20 text-gold text-xs font-medium rounded">
                      {event.date}
                    </span>
                    <span className="text-cream/70">{event.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Button
            asChild
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal rounded-full"
          >
            <Link href="/find-us">View All Locations & Hours</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
