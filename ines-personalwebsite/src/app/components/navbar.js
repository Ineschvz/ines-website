
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-rose-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-rose-600 text-lg font-semibold">
            <Image src="/ines-logo.png" alt="ines Logo" width={75} height={45} className="rounded-full" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-rose-500 px-3 py-2 rounded-md text-sm transition duration-150 ease-in-out">Home</a>
            <a href="#" className="text-gray-600 hover:text-rose-500 px-3 py-2 rounded-md text-sm transition duration-150 ease-in-out">About</a>
            <a href="#" className="text-gray-600 hover:text-rose-500 px-3 py-2 rounded-md text-sm transition duration-150 ease-in-out">Services</a>
            <a href="#" className="text-gray-600 hover:text-rose-500 px-3 py-2 rounded-md text-sm transition duration-150 ease-in-out">Contact</a>
            <button className="bg-rose-100 text-rose-600 hover:bg-rose-200 px-4 py-2 rounded-full text-sm transition duration-150 ease-in-out">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-rose-500 focus:outline-none focus:text-rose-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-600 hover:text-rose-500 block px-3 py-2 rounded-md text-base">Home</a>
            <a href="#" className="text-gray-600 hover:text-rose-500 block px-3 py-2 rounded-md text-base">About</a>
            <a href="#" className="text-gray-600 hover:text-rose-500 block px-3 py-b rounded-md text-base">Services</a>
            <a href="#" className="text-gray-600 hover:text-rose-500 block px-3 py-2 rounded-md text-base">Contact</a>
            <button className="bg-rose-100 text-rose-600 hover:bg-rose-200 block w-full text-left px-3 py-2 rounded-md text-base">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}