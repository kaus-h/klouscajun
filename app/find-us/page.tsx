import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  MapPin, Clock, Phone, Navigation, Calendar, AlertCircle 
} from 'lucide-react'
import { Navigation as SiteNavigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
  return (
    <>
      <SiteNavigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-charcoal text-cream">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
              FIND US
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Visit Us Today
            </h1>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg">
              Catch us at our regular locations or check our pop-up schedule. 
              We&apos;re bringing authentic Cajun flavor to the Phoenix/Tempe area!
            </p>
          </div>
        </section>

        {/* Notice Banner */}
        <section className="bg-gold py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 text-charcoal">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="font-medium text-sm md:text-base">
                Hours and locations may vary. Call ahead to confirm: 
                <a href="tel:+16025968036" className="underline ml-1 font-semibold">
                  (602) 596-8036
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Our Locations
              </h2>
              <p className="text-muted-foreground">
                Find us at these spots in the Phoenix/Tempe area
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {locations.map((location) => (
                <Card 
                  key={location.id} 
                  className={`bg-white border-0 shadow-lg overflow-hidden ${
                    location.isPrimary ? 'ring-2 ring-cajun-red' : ''
                  }`}
                >
                  <CardHeader className={`p-6 ${location.isPrimary ? 'bg-cajun-red text-white' : 'bg-charcoal text-cream'}`}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-serif text-xl flex items-center gap-3">
                        <MapPin className="h-5 w-5" />
                        {location.name}
                      </CardTitle>
                      <Badge className={location.isPrimary ? 'bg-white text-cajun-red' : 'bg-gold text-charcoal'}>
                        {location.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-charcoal">{location.address}</p>
                        <p className="text-muted-foreground">{location.city}</p>
                      </div>

                      <div>
                        <p className="font-semibold text-charcoal mb-2 flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gold" />
                          Hours
                        </p>
                        {Object.entries(location.hours).map(([day, time]) => (
                          <div key={day} className="flex justify-between text-sm py-1">
                            <span className="text-muted-foreground">{day}</span>
                            <span className="text-charcoal font-medium">{time}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                          asChild
                          className="flex-1 bg-charcoal hover:bg-charcoal-light text-white"
                        >
                          <a
                            href={location.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Navigation className="h-4 w-4" />
                            Get Directions
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                        >
                          <a href="tel:+16025968036" className="flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4" />
                            Call Ahead
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Hours Overview */}
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Weekly Schedule
                </h2>
                <p className="text-cream/70">
                  Our general operating hours. Call to confirm specific location availability.
                </p>
              </div>

              <Card className="bg-charcoal-light border-charcoal-light">
                <CardContent className="p-6">
                  {operatingHours.map((schedule, index) => (
                    <div
                      key={schedule.days}
                      className={`flex items-center justify-between py-4 ${
                        index !== operatingHours.length - 1 ? 'border-b border-charcoal' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-gold" />
                        <span className="font-medium">{schedule.days}</span>
                      </div>
                      <div className="text-right">
                        <p className={schedule.hours === 'Closed' ? 'text-cream/50' : 'text-gold font-semibold'}>
                          {schedule.hours}
                        </p>
                        {schedule.location && (
                          <p className="text-sm text-cream/50">{schedule.location}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-cajun-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-cajun-red" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Serving the Phoenix & Tempe Area
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We operate primarily in the Phoenix and Tempe areas, with catering 
                delivery available throughout the Valley. Contact us for events 
                outside our typical service area.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-cajun-red hover:bg-cajun-red-light text-white"
                >
                  <Link href="/catering" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Catering
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                >
                  <a href="tel:+16025968036" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    (602) 596-8036
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
