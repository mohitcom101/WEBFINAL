import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Fast Track Cleaning</h3>
          <p className="text-neutral-200">
            Professional, reliable, and affordable cleaning with a 7-day re-clean guarantee.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="mr-2" size={20} />
              Akashdeep Singh: 0421 917 004
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" size={20} />
              Gurkirat Singh: 0434 266 062
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" size={20} />
              ramanaakash807@gmail.com
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a href="/privacy-policy" className="block hover:text-secondary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="block hover:text-secondary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
      <div className="container mt-8 pt-8 border-t border-neutral-200 text-center">
        <p>&copy; {new Date().getFullYear()} Fast Track Cleaning. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer