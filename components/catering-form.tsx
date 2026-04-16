"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'

const cateringFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    'Please enter a valid phone number'
  ),
  eventDate: z.string().refine(
    (date) => new Date(date) > new Date(),
    'Event date must be in the future'
  ),
  guestCount: z.string().min(1, 'Please enter guest count'),
  eventType: z.string().min(1, 'Please select an event type'),
  serviceType: z.string().min(1, 'Please select a service type'),
  notes: z.string().optional(),
  honeypot: z.string().max(0), // Anti-spam honeypot
})

type CateringFormData = z.infer<typeof cateringFormSchema>

const eventTypes = [
  'Birthday Party',
  'Graduation',
  'Wedding',
  'Corporate Event',
  'Family Gathering',
  'Crawfish Boil',
  'Community Event',
  'Other',
]

const serviceTypes = [
  'Pickup',
  'Delivery',
  'On-Site Catering',
]

export function CateringForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CateringFormData>({
    resolver: zodResolver(cateringFormSchema),
    defaultValues: {
      honeypot: '',
    },
  })

  const onSubmit = async (data: CateringFormData) => {
    // Check honeypot
    if (data.honeypot) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/catering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      reset()
    } catch {
      setSubmitError('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-white border-0 shadow-xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="type-card-title text-charcoal mb-4">
            Thank You!
          </h3>
          <p className="text-muted-foreground mb-6">
            We&apos;ve received your catering inquiry and will contact you within 24 hours 
            to discuss your event. For immediate assistance, please call us at{' '}
            <a href="tel:+16025968036" className="text-cajun-red font-semibold hover:underline">
              (602) 596-8036
            </a>
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-cajun-red text-cajun-red hover:bg-cajun-red hover:text-white"
          >
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-0 shadow-xl">
      <CardHeader className="p-6 md:p-8 border-b">
        <CardTitle className="type-card-title text-charcoal">
          Request a Catering Quote
        </CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            {...register('honeypot')}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <FieldGroup className="space-y-6">
            {/* Contact Info Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel htmlFor="fullName">Full Name *</FieldLabel>
                <Input
                  id="fullName"
                  placeholder="Your full name"
                  {...register('fullName')}
                  className={errors.fullName ? 'border-red-500' : ''}
                />
                {errors.fullName && (
                  <FieldError>{errors.fullName.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </Field>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel htmlFor="phone">Phone Number *</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(602) 555-1234"
                  {...register('phone')}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <FieldError>{errors.phone.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="eventDate">Event Date *</FieldLabel>
                <Input
                  id="eventDate"
                  type="date"
                  {...register('eventDate')}
                  className={errors.eventDate ? 'border-red-500' : ''}
                />
                {errors.eventDate && (
                  <FieldError>{errors.eventDate.message}</FieldError>
                )}
              </Field>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Field>
                <FieldLabel htmlFor="guestCount">Guest Count *</FieldLabel>
                <Input
                  id="guestCount"
                  type="number"
                  min="1"
                  placeholder="25"
                  {...register('guestCount')}
                  className={errors.guestCount ? 'border-red-500' : ''}
                />
                {errors.guestCount && (
                  <FieldError>{errors.guestCount.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="eventType">Event Type *</FieldLabel>
                <Select onValueChange={(value) => setValue('eventType', value)}>
                  <SelectTrigger className={errors.eventType ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.eventType && (
                  <FieldError>{errors.eventType.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="serviceType">Service Type *</FieldLabel>
                <Select onValueChange={(value) => setValue('serviceType', value)}>
                  <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <FieldError>{errors.serviceType.message}</FieldError>
                )}
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="notes">
                Additional Notes / Special Requests
              </FieldLabel>
              <Textarea
                id="notes"
                placeholder="Tell us about your event, dietary requirements, specific menu items you're interested in, or any other details..."
                rows={4}
                {...register('notes')}
              />
            </Field>
          </FieldGroup>

          {submitError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {submitError}
            </div>
          )}

          <div className="mt-8">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-cajun-red hover:bg-cajun-red-light text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Submit Catering Inquiry
                </>
              )}
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Or call us directly at{' '}
            <a href="tel:+16025968036" className="text-cajun-red font-semibold hover:underline">
              (602) 596-8036
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
