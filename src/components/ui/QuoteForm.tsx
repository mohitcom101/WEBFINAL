import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { Send } from 'lucide-react'

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address')
      } else {
        setEmailError(null)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (emailError) return

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess('Quote request submitted successfully!')
      setFormData({ fullName: '', phone: '', email: '', propertyType: '', message: '' })
      setEmailError(null)
    } catch (err) {
      setError('Failed to submit quote request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-primary mb-4">Get a Free Quote</h3>
      {error && <p className="text-error mb-4">{error}</p>}
      {success && <p className="text-success mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-400">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-neutral-300 p-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-400">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-neutral-300 p-2 focus:ring-primary focus:border-primary"
            required
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
            className={`mt-1 w-full rounded-md border ${emailError ? 'border-error' : 'border-neutral-300'} p-2 focus:ring-primary focus:border-primary`}
            required
          />
          {emailError && <p className="text-error text-sm mt-1">{emailError}</p>}
        </div>
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-neutral-400">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-neutral-300 p-2 focus:ring-primary focus:border-primary"
            required
          >
            <option value="">Select Property Type</option>
            <option value="studio">Studio Apartment</option>
            <option value="2bhk">2 Bedroom Single Story</option>
            <option value="2bhk-double">Double Story</option>
            <option value="3bhk-1bath">3 Bedroom, 1 Bathroom (Single Story)</option>
            <option value="3bhk-2bath">3 Bedroom, 2 Bathroom (Double Story)</option>
            <option value="4bhk-2bath">4 Bedroom, 2 Bathroom (Single Story)</option>
            <option value="4bhk-3bath">4 Bedroom, 3 Bathroom (Double Story)</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-400">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-neutral-300 p-2 focus:ring-primary focus:border-primary"
            rows={4}
          />
        </div>
        <Button type="submit" disabled={isSubmitting || !!emailError} className="w-full flex items-center justify-center">
          {isSubmitting ? 'Submitting...' : (
            <>
              <Send className="mr-2" size={20} />
              Submit Quote
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

export default QuoteForm