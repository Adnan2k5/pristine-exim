import React from 'react'
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <main className="bg-black  text-white">
    <nav className="flex justify-between items-center p-6">
      <a href="/" className="text-2xl tracking-widest font-bold">
        Pristine Exim
      </a>
      <div className="hidden md:flex items-center gap-6">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <Link to="services" smooth={true} duration={1000} className="hover:text-gray-300">Services</Link>
        <Link to="contact" smooth={true} duration={1000} className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
    </main>
  )
}
