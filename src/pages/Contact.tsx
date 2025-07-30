import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { Phone, Mail, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address (e.g., example@email.com)')
      } else {
        setEmailError(null)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (emailError || !formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all required fields correctly.')
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'ramanaakash807@gmail.com',
      }

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      )

      setSuccess('Thanks for reaching out! We’ll contact you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setEmailError(null)
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12">
      <section className="container py-16">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book Your Clean Today
        </motion.h2>
        <motion.p
          className="section-subheading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in touch with our team for a hassle-free cleaning experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-bold text-primary mb-4">Contact Details</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-2 text-primary" size={20} />
                Akashdeep Singh: 0421 917 004
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 text-primary" size={20} />
                Gurkirat Singh: 0434 266 062
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 text-primary" size={20} />
                ramanaakash807@gmail.com
              </p>
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary mb-4">Send Us a Message</h3>
            {error && (
              <motion.p
                className="text-error mb-4 bg-error/10 p-3 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.p>
            )}
            {success && (
              <motion.p
                className="text-success mb-4 bg-success/10 p-3 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {success}
              </motion.p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-300 p-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-md border ${
                    emailError ? 'border-error' : 'border-neutral-300'
                  } p-2 focus:ring-primary focus:border-primary transition-all duration-300`}
                  required
                  placeholder="example@email.com"
                />
                {emailError && (
                  <motion.p
                    className="text-error text-sm mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {emailError}
                  </motion.p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-400">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-300 p-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  required
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-300 p-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  rows={4}
                  required
                  placeholder="Tell us about your cleaning needs"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || !!emailError}
                className="w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Contact