'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Old_Standard_TT } from 'next/font/google'

const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] })

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative h-screen w-screen container">
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
        <div className="max-w-4xl text-center">
          <motion.h1
            className={`${oldStandardTT.className} text-white font-bold text-4xl md:text-6xl mb-6 leading-tight`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Ines Chavez Vigueras!
          </motion.h1>
          <motion.p
            className={`${oldStandardTT.className} text-white/90 text-lg md:text-2xl leading-relaxed`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a full-stack software engineer and web developer who loves bringing ideas to life on the web. Whether it's through storytelling, smart strategy, or thoughtful design, I'm here to help you create solutions that inspire and make a difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300">
              Explore My Work
            </button>
          </motion.div>
        </div>
      </header>
    </div>
  )
}

