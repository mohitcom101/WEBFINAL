import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-primary">Fast Track Cleaning</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-neutral-400 hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary font-medium' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden bg-white py-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-neutral-400 hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary font-medium' : ''}`
                }
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Header