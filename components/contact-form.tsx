"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
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
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Message Sent!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We typically respond within 24 hours. 
            For immediate assistance, please call us at{' '}
            <a href="tel:+16025968036" className="text-cajun-red font-semibold hover:underline">
              (602) 596-8036
            </a>
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-cajun-red text-cajun-red hover:bg-cajun-red hover:text-white"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-0 shadow-xl">
      <CardHeader className="p-6 md:p-8 border-b">
        <CardTitle className="text-2xl font-serif font-bold text-charcoal">
          Send Us a Message
        </CardTitle>
        <CardDescription>
          Questions, feedback, or just want to say hi? We&apos;d love to hear from you.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Honeypot */}
          <input
            type="text"
            {...register('honeypot')}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <FieldGroup className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel htmlFor="name">Your Name *</FieldLabel>
                <Input
                  id="name"
                  placeholder="Your full name"
                  {...register('name')}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <FieldError>{errors.name.message}</FieldError>
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

            <Field>
              <FieldLabel htmlFor="phone">Phone Number (Optional)</FieldLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="(602) 555-1234"
                {...register('phone')}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="message">Your Message *</FieldLabel>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                {...register('message')}
                className={errors.message ? 'border-red-500' : ''}
              />
              {errors.message && (
                <FieldError>{errors.message.message}</FieldError>
              )}
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
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            We typically respond within 24 hours
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
