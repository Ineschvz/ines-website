'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Old_Standard_TT } from 'next/font/google'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] })

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/InesTyping.jpg"
        fill
        objectFit="cover"
        alt="Ines Typing Code"
        priority
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadingComplete={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <header className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8">
        <div className="absolute  max-w-3xl text-center">
          <motion.div
            className="flex flex-wrap justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {'Spreading digital kindness, one website at a time!'.split('  ').map((word, index) => (
              <motion.span
                key={index}
                className={`${oldStandardTT.className} text-white font-bold text-5xl md:text-7xl mb-4 leading-tight`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
      
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://github.com/inesmorales" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-orange-600 opacity-80 text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/ines-morales-5444a81b1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-orange-600 opacity-80 text-4xl" />
            </a>
            <a href="mailto:inesmoralesdev@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-orange-600 opacity-80 text-4xl" />
            </a>
          </motion.div>
        </div>
      </header>
    </div>
  )
}

