"use client" 
import Image from "next/image"
import {motion} from "framer-motion"

export default function About() {
  return (
    <div className="font-[ivyPresto] py-12 space-y-12 border border-red-300">
     <motion.h1
          className="text-5xl font-bold text-green-900 text-center mb-12 pb-4"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 2,
              ease: "easeInOut",
              staggerChildren: 0.05,
            },
          }}
          viewport={{ once: true }}
          style={{ scrollMarginTop: "100px" }}
        >
          {["W", "h", "o", " ", "i", "s", " ", <span key="ines" className="text-orange-600/90">Ines</span>, "?"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: index * 0.05, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
            >
              {typeof char === "string" ? char : <span key={index}>{char}</span>}
            </motion.span>
          ))}
        </motion.h1>
      <div className="container mx-auto px-4 py-12 max-w-4xl flex flex-row gap-8 mb-12">
      <div className="relative w-64 h-80 flex-shrink-0 ">
        <Image
          src="/InesWorking.jpg"
          width={256}
          height={320}
          
          className="rounded-lg shadow-lg object-cover absolute -left-40 -bottom-32"
          
          alt="Ines Working"
        />
        <Image
          src="/Holasign1.jpg"
          width={256}
          height={320}
          className="rounded-lg shadow-lg object-cover absolute -top-20 -right-20"
          alt="Hola sign"
        />
      </div>
      <div className="flex-grow pl-20">
        
        <p className="text-xl text-orange-600 leading-relaxed text-center">
        A Full Stack Engineer with a talent for design and accessibility
        </p>
        <p className="text-xl text-center">
          Hi, I’m Ines! I’m a passionate Full Stack Engineer with a Latinx background and a first-generation mindset. My journey into tech is fueled by a love for creativity, innovation, and a commitment to making technology accessible to everyone.
        </p>

      </div>

      </div>
    </div>
  )
}

