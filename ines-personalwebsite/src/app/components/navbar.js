'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Old_Standard_TT } from 'next/font/google'

const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] })


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-rose-100 shadow-sm px-4 py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-green-900 text-xl font-semibold">
            <Image src="/ines-logo.png" alt="ines Logo" width={75} height={45} className=" rounded-full" />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className={`text-green-900 hover:text-rose-500 px-3 py-2 rounded-md text-xl transition duration-150 ease-in-out ${oldStandardTT.className}`}>Home</Link>
          <Link href="/about" className={`text-green-900 hover:text-rose-500 px-3 py-2 rounded-md text-xl transition duration-150 ease-in-out ${oldStandardTT.className}`}>About</Link>
          <a href="/" className={`text-green-900 hover:text-rose-500 px-3 py-2 rounded-md text-xl transition duration-150 ease-in-out ${oldStandardTT.className}`}>Services</a>
          <a href="/contact" className={`text-green-900 hover:text-rose-500 px-3 py-2 rounded-md text-xl transition duration-150 ease-in-out ${oldStandardTT.className}`}>Contact</a>
          <button className={`bg-rose-100 text-green-900 hover:bg-rose-200 px-4 py-2 rounded-full text-xl transition duration-150 ease-in-out ${oldStandardTT.className}`}>
            Get Started
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-green-900 hover:text-rose-500 focus:outline-none focus:text-rose-500"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`text-green-900 hover:text-rose-500 block px-3 py-2 rounded-md text-xl ${oldStandardTT.className}`}>Home</Link>
            <Link href="/aboutme" className={`text-green-900 hover:text-rose-500 block px-3 py-2 rounded-md text-xl ${oldStandardTT.className}`}>About</Link>
            <a href="/" className={`text-green-900 hover:text-rose-500 block px-3 py-b rounded-md text-xl ${oldStandardTT.className}`}>Services</a>
            <a href="/" className={`text-green-900 hover:text-rose-500 block px-3 py-2 rounded-md text-xl ${oldStandardTT.className}`}>Contact</a>
            <button className={`bg-rose-100 text-green-900 hover:bg-rose-200 block w-full text-left px-3 py-2 rounded-md text-xl ${oldStandardTT.className}`}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

