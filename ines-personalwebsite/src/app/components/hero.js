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
        <div className="max-w-3xl text-center">
          <motion.h1
            className={`${oldStandardTT.className} text-white font-bold text-5xl md:text-7xl mb-4 leading-tight`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Ines Chavez Vigueras!
          </motion.h1>
          <motion.p
            className={`${oldStandardTT.className} text-white/90 text-xl md:text-3xl leading-relaxed`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a <i className="font-italic">full-stack software engineer</i> and <i className="font-italic">web developer</i> who loves bringing <i className="font-italic">ideas</i> to life on the <i className="font-italic">web</i>. Whether it's through <i className="font-italic">storytelling</i>, <i className="font-italic">smart strategy</i>, or <i className="font-italic">thoughtful design</i>, I'm here to help you create <i className="font-italic">solutions</i> that <i className="font-italic">inspire</i> and make a <i className="font-italic">difference</i>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
          </motion.div>
        </div>
      </header>
    </div>
  )
}

