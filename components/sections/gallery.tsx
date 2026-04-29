"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: '/images/shrimp-boil.jpg',
    alt: 'Louisiana-style shrimp boil with corn and potatoes',
    caption: 'Shrimp Boil',
  },
  {
    id: 2,
    src: '/images/jambalaya-combo.jpg',
    alt: 'Jambalaya with corn, sausage, and fried shrimp',
    caption: 'Jambalaya Combo',
  },
  {
    id: 3,
    src: '/images/catfish-plate.jpg',
    alt: 'Southern fried catfish with fries and hush puppies',
    caption: 'Catfish Plate',
  },
  {
    id: 4,
    src: '/images/beignets.jpg',
    alt: 'Fresh beignets dusted with powdered sugar',
    caption: 'Beignets',
  },
  {
    id: 5,
    src: '/images/crawfish-poboy.jpg',
    alt: 'Crispy shrimp po-boy sandwich',
    caption: 'Shrimp Po-Boy',
  },
  {
    id: 6,
    src: '/images/crawfish-poboy.jpg',
    alt: 'Cajun crawfish po-boy sandwich',
    caption: 'Crawfish Po-Boy',
  },
  {
    id: 7,
    src: '/images/seafood-boil-combo.jpg',
    alt: 'Seafood boil with shrimp, sausage, corn, and potatoes',
    caption: 'Seafood Boil Combo',
  },
]

const layoutClasses = [
  'col-span-2 md:col-span-7',
  'col-span-1 md:col-span-5',
  'col-span-1 md:col-span-4',
  'col-span-1 md:col-span-4',
  'col-span-2 md:col-span-4',
  'col-span-1 md:col-span-5',
  'col-span-1 md:col-span-7',
]

const aspectClasses = [
  'aspect-[4/3] md:aspect-[16/11]',
  'aspect-[4/3] md:aspect-[4/5]',
  'aspect-square md:aspect-[5/4]',
  'aspect-square md:aspect-[5/4]',
  'aspect-[4/3] md:aspect-[16/11]',
  'aspect-[4/3] md:aspect-[4/5]',
  'aspect-[4/3] md:aspect-[16/11]',
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="type-kicker text-cajun-red">Eat with your eyes</p>
            <h2 className="type-section-title max-w-2xl text-charcoal">
              Catfish, beignets, boils, and plates worth leaning over the table for.
            </h2>
            <p className="type-body max-w-xl text-charcoal/75">
              A quick look at the kind of food people call ahead for, bring to parties, and come
              back to find again.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="self-start rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
          >
            <Link href="/menu">See the menu</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-lg bg-charcoal focus:outline-none focus:ring-2 focus:ring-cajun-red focus:ring-offset-2 focus:ring-offset-white ${layoutClasses[index]} ${aspectClasses[index]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <span className="type-card-title text-white">{image.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10 text-white hover:bg-white/10"
            onClick={(event) => {
              event.stopPropagation()
              goToPrevious()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>

          <div
            className="relative aspect-video max-h-[80vh] w-full max-w-4xl mx-4"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <p className="absolute inset-x-0 bottom-0 bg-black/70 py-3 text-center font-medium text-white">
              {galleryImages[currentIndex].caption}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10 text-white hover:bg-white/10"
            onClick={(event) => {
              event.stopPropagation()
              goToNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
