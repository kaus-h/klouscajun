import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  MapPin,
  Navigation as NavigationIcon,
  Utensils,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const todayPopUp = {
  label: "Today's Pop-Up",
  address: '1314 W University Dr #104',
  city: 'Tempe',
  note: 'Updated weekly',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=1314+W+University+Dr+%23104+Tempe+AZ',
}

const actionBlocks = [
  {
    icon: Utensils,
    kicker: 'Eat Today',
    title: 'Pull up for lunch, dinner, or a snowball stop.',
    body: 'Rotating pop-ups across Phoenix & Tempe with comfort food that hits every time.',
    href: '/find-us',
  },
  {
    icon: CalendarDays,
    kicker: 'Plan Ahead',
    title: 'Catering, family spreads, and crawfish season.',
    body: "From small gatherings to big boils, K.Lou's has you covered.",
    href: '/catering',
  },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-cream">
      <Image
        src="/images/hero-cajun-food.jpg"
        alt="Cajun spread with crawfish, fried catfish, jambalaya, shrimp and beignets"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover object-[52%_center] md:object-[72%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,10,9,0.97)_0%,rgba(10,10,9,0.86)_34%,rgba(10,10,9,0.48)_62%,rgba(10,10,9,0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,10,9,0.32)_0%,rgba(10,10,9,0.08)_42%,rgba(10,10,9,0.88)_100%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex min-h-[calc(100svh-104px)] flex-col justify-end gap-8 py-10 md:min-h-[calc(100svh-118px)] md:justify-center md:py-16 lg:max-w-[58rem] xl:max-w-[62rem]">
          <div className="space-y-6 pt-10 md:pt-0">
            <div className="space-y-4">
              <p className="type-kicker text-cajun-red-light md:text-gold">
                Phoenix pop-ups. Family meals. Catering that hits.
              </p>
              <h1 className="type-hero max-w-[9.5ch] text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)] md:max-w-[17ch] xl:max-w-[18ch]">
                Real <span className="text-gold">Louisiana</span>{' '}flavor in Phoenix &amp; Tempe.
              </h1>
              <div className="hidden h-px w-72 bg-gold/65 md:block" />
              <p className="type-lead max-w-[23rem] text-cream/88 md:max-w-[46rem]">
                From fried catfish and jambalaya to crawfish boils, fried gator, and snowballs,
                K.Lou&apos;s brings bold Cajun comfort food to the Valley through pop-ups,
                family meals, and catering worth planning around.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-md bg-cajun-red px-8 text-base font-semibold text-white hover:bg-cajun-red-light sm:w-auto"
              >
                <Link href="/catering" className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5" />
                  Book Catering
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-md border-gold bg-charcoal/45 px-8 text-base font-semibold text-cream hover:bg-gold hover:text-charcoal sm:w-auto"
              >
                <Link href="/menu" className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5" />
                  View Menu
                </Link>
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="h-auto w-fit justify-start px-0 text-base text-cream hover:text-gold"
              >
                <Link href="/find-us" className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="border-b border-gold pb-1">Find Today&apos;s Location</span>
                  <ArrowRight className="h-5 w-5 text-gold" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <a
              href={todayPopUp.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid min-w-0 gap-4 rounded-lg border border-cream/20 bg-charcoal/70 p-5 shadow-2xl shadow-black/25 outline-none transition-colors hover:border-gold/70 focus-visible:ring-2 focus-visible:ring-gold md:grid-cols-[auto_1fr_auto] md:items-center md:p-6"
              aria-label={`Get directions to ${todayPopUp.address}, ${todayPopUp.city}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold md:h-16 md:w-16">
                <MapPin className="h-7 w-7" />
              </span>
              <span className="min-w-0">
                <span className="type-kicker block text-gold">{todayPopUp.label}</span>
                <span className="type-card-title mt-1 block break-words text-cream">
                  {todayPopUp.address} <span className="text-cream/55">-</span> {todayPopUp.city}
                </span>
                <span className="type-meta mt-1 block text-cream/65">{todayPopUp.note}</span>
              </span>
              <span className="flex items-center gap-2 text-gold">
                <NavigationIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="hidden font-semibold md:inline">Directions</span>
              </span>
            </a>

            <div className="grid overflow-hidden rounded-lg border border-cream/15 bg-charcoal/62 md:grid-cols-2">
              {actionBlocks.map((block, index) => (
                <Link
                  key={block.kicker}
                  href={block.href}
                  className={`group grid min-w-0 gap-4 p-5 outline-none transition-colors hover:bg-cream/[0.04] focus-visible:ring-2 focus-visible:ring-gold md:grid-cols-[64px_1fr] md:p-6 ${
                    index > 0 ? 'border-t border-cream/15 md:border-t-0 md:border-l' : ''
                  }`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold md:h-16 md:w-16">
                    <block.icon className="h-7 w-7" />
                  </span>
                  <span className="min-w-0">
                    <span className="type-kicker block text-cajun-red-light">{block.kicker}</span>
                    <span className="type-card-title mt-2 block text-cream">{block.title}</span>
                    <span className="type-meta mt-2 block text-cream/70">{block.body}</span>
                    <span className="mt-3 inline-flex items-center gap-2 text-gold md:hidden">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
