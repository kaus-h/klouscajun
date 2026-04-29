import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Quote, Star } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'

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
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`${starSize} ${
            index < rating ? 'fill-gold text-gold' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const averageRating = 4.9
  const totalReviews = reviews.length
  const fiveStarCount = reviews.filter((review) => review.rating === 5).length
  const fourStarCount = reviews.filter((review) => review.rating === 4).length
  const [primaryReview, ...remainingReviews] = reviews
  const longformReviews = remainingReviews.slice(0, 4)
  const sidebarReviews = remainingReviews.slice(4)

  return (
    <>
      <Navigation />
      <main className="pb-20 lg:pb-0">
        <section className="relative overflow-hidden bg-cream py-16 md:py-24">
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-gold/20 to-transparent pointer-events-none" />
          <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-cajun-red/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="type-kicker text-cajun-red">Testimonials</p>
                  <h1 className="type-page-title max-w-[17ch] text-charcoal">
                    Real words from people who came hungry and left happy.
                  </h1>
                  <p className="type-lead max-w-2xl text-charcoal/80">
                    The strongest reviews say the same thing in different ways: authentic food,
                    generous portions, friendly service, and catering people trust with real events.
                  </p>
                </div>

                <div className="flex flex-wrap items-end gap-5 border-t border-charcoal/15 pt-5">
                  <div>
                    <p className="text-5xl font-semibold tracking-tight text-cajun-red md:text-6xl">
                      {averageRating}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <StarRating rating={Math.round(averageRating)} size="lg" />
                    <p className="type-meta text-charcoal/65">
                      Based on {totalReviews} featured reviews on this page
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-charcoal/70">
                  <div className="flex items-center gap-2">
                    <StarRating rating={5} />
                    <span>{fiveStarCount} five-star reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={4} />
                    <span>{fourStarCount} four-star reviews</span>
                  </div>
                </div>
              </div>

              <article className="rounded-3xl bg-white p-8 shadow-xl shadow-charcoal/5">
                <Quote className="h-10 w-10 text-cajun-red/20" />
                <p className="type-lead mt-6 text-charcoal">
                  &ldquo;{primaryReview.content}&rdquo;
                </p>
                <div className="mt-6 border-t border-charcoal/10 pt-4">
                  <div className="flex items-center gap-3">
                    <StarRating rating={primaryReview.rating} />
                    <span className="type-meta text-charcoal/55">{primaryReview.date}</span>
                  </div>
                  <p className="type-card-title mt-4 text-charcoal">{primaryReview.name}</p>
                  <p className="type-meta mt-1 text-charcoal/60">{primaryReview.highlight}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="space-y-8">
                {longformReviews.map((review) => (
                  <article key={review.id} className="border-t border-charcoal/15 pt-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <StarRating rating={review.rating} />
                      <span className="type-meta text-charcoal/55">{review.date}</span>
                      <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-charcoal/75">
                        {review.highlight}
                      </span>
                    </div>
                    <p className="type-body mt-4 text-charcoal/75">
                      &ldquo;{review.content}&rdquo;
                    </p>
                    <p className="type-card-title mt-4 text-charcoal">{review.name}</p>
                  </article>
                ))}
              </div>

              <aside className="space-y-8">
                <div className="rounded-3xl bg-charcoal p-8 text-cream">
                  <h2 className="type-card-title text-cream">Leave a review</h2>
                  <p className="type-meta mt-3 text-cream/75">
                    Loved the food or the catering experience? Help the next customer feel more
                    confident before they call.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-gold text-charcoal hover:bg-gold-light"
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
                      className="rounded-full border-cream text-cream hover:bg-cream hover:text-charcoal"
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

                <div className="space-y-6">
                  {sidebarReviews.map((review) => (
                    <article key={review.id} className="border-t border-charcoal/15 pt-5">
                      <p className="type-kicker text-cajun-red/80">{review.highlight}</p>
                      <p className="type-meta mt-3 text-charcoal/70">
                        &ldquo;{review.content}&rdquo;
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="type-card-title text-charcoal">{review.name}</p>
                        <StarRating rating={review.rating} />
                      </div>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-cajun-red py-16 md:py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:text-left">
              <div>
                <h2 className="type-section-title text-white">Ready to try us?</h2>
                <p className="type-body mt-3 max-w-xl text-white/85">
                  Use the menu if you&apos;re looking for today&apos;s food. Jump to catering if you need
                  to feed a room and want that same trust to carry through the event.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-cajun-red hover:bg-cream"
                >
                  <Link href="/menu">View menu</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white text-white hover:bg-white hover:text-cajun-red"
                >
                  <Link href="/catering">Book catering</Link>
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
