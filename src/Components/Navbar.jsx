import React from 'react'

export const Navbar = () => {
  return (
    <main className="bg-black  text-white">
    <nav className="flex justify-between items-center p-6">
      <a href="/" className="text-2xl tracking-widest font-bold">
        Pristine Exim
      </a>
      <div className="hidden md:flex items-center gap-6">
        <a href="/careers" className="hover:text-gray-300">
          Home
        </a>
        <a href="/login" className="hover:text-gray-300">
          About
        </a>
        <button className="hover:text-gray-300">
          Contact
        </button>
      </div>
    </nav>
    </main>
  )
}
