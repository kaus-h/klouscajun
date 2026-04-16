import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about K.Lou\'s Cajun Shack & Catering. Get answers about our menu, catering services, locations, hours, and more.',
}

const faqCategories = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What type of food does K.Lou\'s serve?',
        answer: 'We serve authentic Louisiana Cajun and Creole cuisine, including boiled crawfish, fried catfish, jambalaya, gator, po\'boys, beignets, and New Orleans-style snowballs. All our recipes are traditional family recipes passed down through generations.',
      },
      {
        question: 'Is K.Lou\'s a Black-owned business?',
        answer: 'Yes! K.Lou\'s Cajun Shack & Catering is proudly Black-owned and family-run. Owner Roderick M. has over 30 years of experience cooking authentic Cajun cuisine.',
      },
      {
        question: 'Where are you located?',
        answer: 'We operate primarily in the Phoenix and Tempe, Arizona area. Our main location is at 615 S Hardy Dr in Tempe, and we also do pop-ups at various locations including Yilo Superstore on Thunderbird Rd. Check our Find Us page for current locations and hours.',
      },
      {
        question: 'What are your hours of operation?',
        answer: 'Our typical hours are Monday-Thursday 10:30 AM - 5:30 PM, Friday-Saturday 11:00 AM - 5:30 PM, and we\'re closed on Sundays. Hours may vary by location and event, so we recommend calling ahead to confirm at (602) 596-8036.',
      },
    ],
  },
  {
    category: 'Menu & Food',
    questions: [
      {
        question: 'What is your most popular dish?',
        answer: 'Our most popular items are the Boiled Crawfish Plate (seasonal), Cajun Fried Gator, and our Southern Fried Catfish & Jambalaya combo. Our snowballs are also a huge hit, especially during the hot Arizona summers!',
      },
      {
        question: 'When is crawfish season?',
        answer: 'Crawfish season typically runs from February through August. We use fresh Louisiana crawfish during the season, and availability may vary. Call ahead to confirm crawfish availability.',
      },
      {
        question: 'Do you have vegetarian options?',
        answer: 'While our menu is primarily meat and seafood focused, we do offer sides like potato salad, sweet peas, green beans, corn, and our famous snowballs. Please let us know about any dietary restrictions when ordering.',
      },
      {
        question: 'Do you offer gluten-free options?',
        answer: 'Some of our items can be prepared to accommodate dietary needs. Please call us directly to discuss your specific requirements and we\'ll do our best to accommodate you.',
      },
      {
        question: 'What flavors of snowballs do you have?',
        answer: 'We offer over 19 flavors including Wedding Cake, Tiger\'s Blood, Strawberry, Spearmint, Watermelon, Cotton Candy (Pink & Blue), Hurricane, Strawberry Cheesecake, Root Beer, Margarita, Bubble Gum, Lemonade, Passion Fruit, Pina Colada, Mai Tai, Mojito, and Granny Smith Apple. One flavor is included at $6, with additional flavors for $2 each.',
      },
    ],
  },
  {
    category: 'Ordering & Payment',
    questions: [
      {
        question: 'Do you take phone orders?',
        answer: 'Yes! We encourage calling ahead for orders, especially for large groups. Call us at (602) 596-8036 to place your order.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, all major credit cards, and most mobile payment options. Please check with us at the time of ordering for the most current payment options.',
      },
      {
        question: 'Can I place a large order for a group?',
        answer: 'Absolutely! We love serving groups. For large orders, please call at least 24 hours in advance so we can ensure we have everything ready for you. For very large orders or events, consider our catering services.',
      },
    ],
  },
  {
    category: 'Catering Services',
    questions: [
      {
        question: 'Do you offer catering?',
        answer: 'Yes! We cater events of all sizes, from intimate family gatherings to large corporate events. Our catering services include pickup, delivery, and full on-site catering with setup and service.',
      },
      {
        question: 'How far in advance should I book catering?',
        answer: 'We recommend booking at least 1-2 weeks in advance for most events. For large events, weddings, or during crawfish season, we suggest 3-4 weeks notice. However, we\'ll always try to accommodate last-minute requests when possible.',
      },
      {
        question: 'What is the minimum order for catering?',
        answer: 'Minimum orders vary depending on the type of service and menu selected. Contact us with your event details and we\'ll provide a custom quote. We work with various budgets and group sizes.',
      },
      {
        question: 'Do you cater crawfish boils?',
        answer: 'Yes! Crawfish boil catering is one of our specialty services (available February-August during crawfish season). We bring fresh Louisiana crawfish, all the fixings, and can provide everything from simple drop-off to full-service on-site boils.',
      },
      {
        question: 'What areas do you serve for catering?',
        answer: 'We primarily serve the Phoenix and Tempe metropolitan area. For events outside our typical service area, please contact us to discuss availability and any additional delivery fees.',
      },
      {
        question: 'How do I get a catering quote?',
        answer: 'You can request a catering quote by filling out our online catering form, calling us at (602) 596-8036, or sending us a message through our contact page. We\'ll respond within 24 hours with a custom quote for your event.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-charcoal text-cream">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-gold" />
            </div>
            <h1 className="type-page-title mb-4">
              Frequently Asked Questions
            </h1>
            <p className="type-lead text-cream/80 mx-auto">
              Got questions? We&apos;ve got answers. If you don&apos;t find what 
              you&apos;re looking for, feel free to give us a call.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Phone className="h-5 w-5 text-gold" />
              <a href="tel:+16025968036" className="text-gold font-semibold hover:underline">
                (602) 596-8036
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.category} className={categoryIndex > 0 ? 'mt-12' : ''}>
                  <h2 className="type-card-title text-charcoal mb-6 pb-2 border-b-2 border-cajun-red">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${categoryIndex}-${index}`}
                        className="bg-white rounded-lg shadow-sm border-0 px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-cajun-red hover:no-underline py-4">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-charcoal/80 leading-relaxed pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="type-section-title mb-4">
              Still Have Questions?
            </h2>
            <p className="text-cream/80 max-w-xl mx-auto mb-8">
              We&apos;re here to help! Give us a call or send us a message and 
              we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-charcoal hover:bg-gold-light font-semibold"
              >
                <a href="tel:+16025968036" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (602) 596-8036
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream text-cream hover:bg-cream hover:text-charcoal"
              >
                <Link href="/contact">Send a Message</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Catering CTA */}
        <section className="py-16 md:py-20 bg-cajun-red text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="type-section-title mb-4">
              Ready to Book Catering?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Let us bring authentic Cajun flavor to your next event. Get a custom 
              quote today!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cajun-red hover:bg-cream font-semibold"
            >
              <Link href="/catering">Request Catering Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
