import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Quote, ExternalLink } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Read customer reviews of K.Lou\'s Cajun Shack & Catering. 4.9 star rating for authentic Cajun cuisine, catering services, and hospitality in Phoenix.',
}

const reviews = [
  {
    id: 1,
    name: 'Marcus T.',
    rating: 5,
    content: "Best Cajun food I've had outside of Louisiana! The crawfish was perfectly seasoned and the portions were generous. Roderick and his team are incredibly friendly and professional. This is now our go-to spot whenever we're craving authentic Cajun flavor.",
    date: '2 months ago',
    highlight: 'Authentic crawfish',
  },
  {
    id: 2,
    name: 'Jennifer R.',
    rating: 5,
    content: "We hired them for our graduation party and they exceeded all expectations. Food arrived early, stayed hot, and our guests went back for seconds and thirds. Amazing communication throughout the planning process. Couldn't have asked for a better catering experience!",
    date: '1 month ago',
    highlight: 'Catering excellence',
  },
  {
    id: 3,
    name: 'David & Lisa M.',
    rating: 5,
    content: "The fried gator was incredible - crispy on the outside, tender inside. The beignets reminded us of our trip to New Orleans. Finally, real Cajun food in Phoenix! We've been back three times since our first visit and it's consistently delicious.",
    date: '3 weeks ago',
    highlight: 'Fried gator & beignets',
  },
  {
    id: 4,
    name: 'Tamika W.',
    rating: 5,
    content: "Can't say enough good things about this business. Fair prices, authentic flavors, and the owner genuinely cares about his customers. The crawfish boil was unforgettable - reminded me of back home in Louisiana. Support this Black-owned business!",
    date: '1 month ago',
    highlight: 'Crawfish boil',
  },
  {
    id: 5,
    name: 'Robert J.',
    rating: 5,
    content: "Catered our corporate event and everyone was impressed. Professional setup, delicious food, and spotless cleanup. The jambalaya was the star of the show! Already booked them for our next company gathering. Highly recommend for any event.",
    date: '2 weeks ago',
    highlight: 'Corporate catering',
  },
  {
    id: 6,
    name: 'Angela S.',
    rating: 5,
    content: "Hard to find good Cajun food in Arizona, but K.Lou's delivers the real deal. The catfish was perfectly fried and the potato salad was homemade perfection. Great portions for the price. Will definitely be coming back regularly!",
    date: '3 months ago',
    highlight: 'Fried catfish',
  },
  {
    id: 7,
    name: 'Michael P.',
    rating: 5,
    content: "Ordered a large catering order for my daughter's birthday party. The food was absolutely amazing and everyone raved about it. Roderick was so easy to work with and made sure everything was perfect. Thank you for making her day special!",
    date: '6 weeks ago',
    highlight: 'Birthday catering',
  },
  {
    id: 8,
    name: 'Sandra K.',
    rating: 5,
    content: "The snowballs are a perfect treat on a hot Arizona day! So many flavor options and the shaved ice is so fluffy. My kids love stopping by after school. The staff is always friendly and remembers our usual orders. Love this place!",
    date: '2 weeks ago',
    highlight: 'Snowballs',
  },
  {
    id: 9,
    name: 'James & Maria L.',
    rating: 5,
    content: "We hosted a crawfish boil for our anniversary and K.Lou's made it absolutely perfect. Fresh crawfish, all the fixings, and they even helped with setup. Our guests are still talking about it! Booking again next year for sure.",
    date: '1 month ago',
    highlight: 'Anniversary event',
  },
  {
    id: 10,
    name: 'Patricia G.',
    rating: 4,
    content: "Really enjoyed the catfish and jambalaya plate. Generous portions and authentic Southern flavors. The only reason for 4 stars instead of 5 is that we had to wait a bit during a busy lunch rush, but the food was worth the wait!",
    date: '2 months ago',
    highlight: 'Catfish & jambalaya',
  },
]

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const starSize = size === 'lg' ? 'h-6 w-6' : 'h-4 w-4'
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < rating ? 'fill-gold text-gold' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const averageRating = 4.9
  const totalReviews = reviews.length
  const fiveStarCount = reviews.filter(r => r.rating === 5).length
  const fourStarCount = reviews.filter(r => r.rating === 4).length

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-charcoal text-cream">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
              TESTIMONIALS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              What Our Customers Say
            </h1>
            
            {/* Overall Rating Display */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl font-bold text-gold">{averageRating}</span>
                <div className="text-left">
                  <StarRating rating={Math.round(averageRating)} size="lg" />
                  <p className="text-cream/70 mt-1">Based on {totalReviews}+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating Breakdown */}
        <section className="bg-cream-dark py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="text-charcoal font-medium">{fiveStarCount} reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <StarRating rating={4} />
                <span className="text-charcoal font-medium">{fourStarCount} reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {reviews.map((review) => (
                <Card 
                  key={review.id} 
                  className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-cajun-red/20 mb-4" />
                    
                    <p className="text-charcoal/80 leading-relaxed mb-6">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="font-semibold text-charcoal">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <StarRating rating={review.rating} />
                        <Badge variant="secondary" className="bg-gold/20 text-charcoal text-xs">
                          {review.highlight}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Love Our Food?
            </h2>
            <p className="text-cream/80 max-w-xl mx-auto mb-8">
              We&apos;d love to hear from you! Leave us a review and let others know 
              about your K.Lou&apos;s experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-charcoal hover:bg-gold-light"
              >
                <a 
                  href="https://www.google.com/search?q=K.Lou's+Cajun+Shack+Phoenix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  Review on Google
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream text-cream hover:bg-cream hover:text-charcoal"
              >
                <a 
                  href="https://www.yelp.com/search?find_desc=K.Lou's+Cajun+Shack&find_loc=Phoenix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  Review on Yelp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-cajun-red text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Try Us?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              See why our customers keep coming back for more authentic Cajun flavor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-cajun-red hover:bg-cream font-semibold"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cajun-red"
              >
                <Link href="/catering">Book Catering</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
