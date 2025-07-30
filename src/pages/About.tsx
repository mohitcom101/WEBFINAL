import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Users, Award, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const About: React.FC = () => {
  const navigate = useNavigate()

  const handleBookNow = () => {
    navigate('/contact')
  }

  return (
    <div className="py-12">
      <section className="container py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="section-subheading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Learn more about our dedicated team and commitment to excellence.
        </motion.p>
      </section>
      <section className="container py-16">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story
        </motion.h3>
        <motion.p
          className="text-lg text-neutral-400 mb-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Founded by Akashdeep and Gurkirat Singh, Fast Track Cleaning was born out of a passion for helping tenants secure their bond refunds through exceptional cleaning services. With years of experience in the cleaning industry, we identified a need for reliable, high-quality cleaning that guarantees results. Our mission is to provide peace of mind to our clients by delivering thorough, professional cleaning services with a personal touch. We take pride in our attention to detail and our 7-day re-clean guarantee, ensuring every client is completely satisfied.
        </motion.p>
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.p
          className="text-lg text-neutral-400 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          At Fast Track Cleaning, our mission is to make the moving process stress-free by providing top-notch cleaning services that meet the highest standards. We aim to build lasting relationships with our clients through transparency, reliability, and exceptional customer service. Our goal is to ensure every property we clean passes inspection with flying colors, giving our clients confidence and peace of mind.
        </motion.p>
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Users className="text-primary mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold text-primary mb-2 text-center">Akashdeep Singh</h4>
              <p className="text-neutral-400 text-center">
                Co-founder and lead cleaner with over 5 years of experience in cleaning, dedicated to delivering spotless results.
              </p>
            </motion.div>
          </Card>
          <Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Users className="text-primary mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold text-primary mb-2 text-center">Gurkirat Singh</h4>
              <p className="text-neutral-400 text-center">
                Co-founder and customer service expert, ensuring every client receives personalized and timely support.
              </p>
            </motion.div>
          </Card>
          <Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Award className="text-primary mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold text-primary mb-2 text-center">Our Team</h4>
              <p className="text-neutral-400 text-center">
                A dedicated group of trained professionals committed to excellence, working together to make your property shine.
              </p>
            </motion.div>
          </Card>
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <Button onClick={handleBookNow} className="flex items-center mx-auto">
            Book Now
            <Heart className="ml-2" size={20} />
          </Button>
        </motion.div>
      </section>
      <section className="container py-16 bg-primary/5">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Commitment to Quality
        </motion.h3>
        <motion.p
          className="text-lg text-neutral-400 mb-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We use eco-friendly cleaning products and advanced techniques to ensure a deep clean that meets the strictest standards. Our team undergoes regular training to stay updated on the latest cleaning methods, and we pride ourselves on our attention to detail. Whether it's carpets, walls, or bathrooms, we leave no corner untouched.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Award className="text-primary mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold text-primary mb-2 text-center">Quality Assurance</h4>
              <p className="text-neutral-400 text-center">
                Every clean is followed by a thorough quality check to ensure perfection.
              </p>
            </motion.div>
          </Card>
          <Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Heart className="text-primary mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold text-primary mb-2 text-center">Customer Care</h4>
              <p className="text-neutral-400 text-center">
                We prioritize your satisfaction with responsive support and personalized service.
              </p>
            </motion.div>
          </Card>
          <Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Users className="text-primary mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold text-primary mb-2 text-center">Trusted Team</h4>
              <p className="text-neutral-400 text-center">
                Our bonded and insured team is dedicated to delivering reliable results.
              </p>
            </motion.div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default About