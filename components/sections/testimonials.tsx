import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Sajani J.',
    location: 'Henderson, NV',
    rating: 5,
    content: "Had Jambalaya catered for a party. Delivery was early, which was great! Food was delicious, everybody was going back for seconds and thirds. The communication was phenomenal. He made a jambalaya just how we wanted it. Prices are very fair as well.",
    date: 'Mar 20, 2025',
  },
  {
    id: 2,
    name: 'LaNesa M.',
    location: 'Phoenix, AZ',
    rating: 5,
    content: 'Good food and great service. The catfish is yummy and the cabbage hit the spot. Definitely coming back!',
    date: 'May 20, 2024',
  },
  {
    id: 3,
    name: 'Jamie S.',
    location: 'Hemet, CA',
    rating: 5,
    content: "The food is incredible. It's hard to find Cajun food in Phoenix and even more difficult to find good Cajun food in the west. The owner is amazingly kind and welcoming. This is a great family business.",
    date: 'Jan 5, 2024',
  },
  {
    id: 4,
    name: 'Karen J.',
    location: 'City of Commerce, CA',
    rating: 5,
    content: "Easily the best Cajun food I've had in valley! 100% recommend, they're super friendly and attentive! Will definitely be back for more!",
    date: 'Mar 31, 2023',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-gold text-gold' : 'fill-charcoal-medium text-charcoal-medium'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [featuredTestimonial, ...supportingTestimonials] = testimonials

  return (
    <section className="bg-cream-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div className="space-y-6 border-t border-charcoal/15 pt-6">
            <div className="space-y-4">
              <p className="type-kicker text-cajun-red">What customers are saying</p>
              <h2 className="type-section-title max-w-2xl text-charcoal">
                Real reviews from people who came for the food and stayed for the way they were treated.
              </h2>
              <div className="flex items-center gap-3">
                <StarRating rating={featuredTestimonial.rating} />
                <span className="type-meta text-charcoal/65">4.5 stars on Yelp</span>
              </div>
            </div>

            <blockquote className="space-y-5">
              <p className="type-lead text-charcoal">
                &ldquo;{featuredTestimonial.content}&rdquo;
              </p>
              <footer className="border-t border-charcoal/10 pt-4">
                <p className="type-card-title text-charcoal">{featuredTestimonial.name}</p>
                <p className="type-meta mt-1 text-charcoal/65">
                  {featuredTestimonial.location} • {featuredTestimonial.date}
                </p>
              </footer>
            </blockquote>
          </div>

          <div className="space-y-6">
            {supportingTestimonials.map((testimonial) => (
              <article key={testimonial.id} className="border-t border-charcoal/15 pt-5">
                <div className="flex items-center gap-3">
                  <StarRating rating={testimonial.rating} />
                  <span className="type-meta text-charcoal/55">{testimonial.date}</span>
                </div>
                <p className="type-meta mt-3 text-base leading-relaxed text-charcoal/75">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <p className="type-card-title mt-4 text-charcoal">{testimonial.name}</p>
                <p className="type-meta mt-1 text-charcoal/60">{testimonial.location}</p>
              </article>
            ))}

            <Button
              asChild
              variant="outline"
              className="rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
            >
              <Link href="/reviews" className="flex items-center gap-2">
                Read more reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
