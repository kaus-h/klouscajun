import Link from 'next/link'
import { MapPin, Clock, Calendar, Navigation, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
            FIND US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
            Where to Get Your Fix
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Catch us at our regular locations or check our upcoming pop-up events.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Current Location Card */}
          <Card className="lg:col-span-2 bg-white border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-cajun-red text-white p-6">
              <div className="flex items-center justify-between">
                <CardTitle className="font-serif text-2xl flex items-center gap-3">
                  <MapPin className="h-6 w-6" />
                  Current Location
                </CardTitle>
                <Badge className="bg-white text-cajun-red font-semibold">
                  {currentLocation.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-2">
                {currentLocation.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {currentLocation.address}
              </p>
              <div className="flex items-center gap-2 text-charcoal mb-6">
                <Clock className="h-5 w-5 text-gold" />
                <span className="font-medium">{currentLocation.hours}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-charcoal hover:bg-charcoal-light text-white"
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
                  className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
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
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader className="bg-charcoal text-white p-6">
              <CardTitle className="font-serif text-xl flex items-center gap-3">
                <Calendar className="h-5 w-5" />
                Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`p-4 ${
                    index !== upcomingEvents.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <p className="font-semibold text-charcoal">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.address}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Badge variant="secondary" className="bg-gold/20 text-charcoal">
                      {event.date}
                    </Badge>
                    <span className="text-muted-foreground">{event.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-cajun-red text-cajun-red hover:bg-cajun-red hover:text-white"
          >
            <Link href="/find-us">View All Locations & Hours</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
