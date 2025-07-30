import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleViewServices = () => {
    navigate('/services')
  }

  const handleBookNow = () => {
    navigate('/contact')
  }

  return (
    <div className="py-12">
      <section className="container text-center py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fast Track Cleaning
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-neutral-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get Your Bond Back – Guaranteed!
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-neutral-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          7 Days Re-Clean Guarantee. Fast, Reliable & Affordable Cleaning.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button onClick={handleViewServices} className="flex items-center">
            View Services
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button variant="secondary" onClick={handleBookNow} className="flex items-center">
            <Phone className="mr-2" size={20} />
            Book Now
          </Button>
        </motion.div>
      </section>
      <section className="container py-16">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="section-subheading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide top-notch cleaning services to ensure you get your bond back.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-bold text-primary mb-2">Professional Team</h3>
            <p className="text-neutral-400">
              Our experienced cleaners are trained to deliver exceptional results, ensuring every corner of your property sparkles.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary mb-2">7-Day Guarantee</h3>
            <p className="text-neutral-400">
              If you're not satisfied, we'll return within 7 days to re-clean at no extra cost.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary mb-2">Affordable Pricing</h3>
            <p className="text-neutral-400">
              Transparent pricing with no hidden fees, tailored to your property type.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home