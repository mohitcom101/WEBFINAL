import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/ui/Card'
import { CheckCircle } from 'lucide-react'

const services = [
  { type: 'Studio Apartment', price: 350 },
  { type: '2 Bedroom Single Story', price: 400 },
  { type: 'Double Story', price: 430 },
  { type: '3 Bedroom, 1 Bathroom (Single Story)', price: 500 },
  { type: '3 Bedroom, 2 Bathroom (Double Story)', price: 600 },
  { type: '4 Bedroom, 2 Bathroom (Single Story)', price: 650 },
  { type: '4 Bedroom, 3 Bathroom (Double Story)', price: 750 },
]

const Services: React.FC = () => {
  return (
    <div className="py-12">
      <section className="container py-16">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="section-subheading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive cleaning services tailored to your property type.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.type}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{service.type}</h3>
                <p className="text-2xl font-semibold text-secondary mb-4">${service.price}</p>
                <ul className="space-y-2">
                  {['Carpet Cleaning', 'Wall Cleaning', 'Kitchen', 'Bathrooms', 'Garage'].map((item) => (
                    <li key={item} className="flex items-center text-neutral-400">
                      <CheckCircle className="mr-2 text-success" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Card>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-400">
            All services include thorough cleaning of carpets, walls, kitchen, bathrooms, and garage to ensure your property meets inspection standards.
          </p>
        </motion.div>
      </section>
      <section className="container py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Guarantee
        </motion.h2>
        <motion.p
          className="section-subheading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We stand by our commitment to quality and customer satisfaction.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-bold text-primary mb-2">7-Day Re-Clean Guarantee</h3>
            <p className="text-neutral-400">
              If any issues arise during your inspection, we'll return within 7 days to re-clean at no extra cost.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary mb-2">Customer Satisfaction</h3>
            <p className="text-neutral-400">
              Our team is dedicated to exceeding your expectations with every clean.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary mb-2">Timely Service</h3>
            <p className="text-neutral-400">
              We work around your schedule to ensure a hassle-free experience.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Services