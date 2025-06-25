"use client" 
import Image from "next/image"
import {motion} from "framer-motion"
import React from "react";


export default function About() {
  return (
    <div className="font-[ivyPresto] border border-red-300 w-full h-full flex flex-col items-center justify-center p-8">
       <div className="w-max">
    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-red pr-5 text-5xl text-black font-bold">HELLO! I'm Ines. </h1>
  </div>
  <div className="container mx-auto px-4 py-12 max-w-4xl flex flex-col gap-8 mb-12">
    <div className="relative w-64 h-80 flex-shrink-0 flex">
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
  </div>

    </div>






//     <div className="font-[ivyPresto] border border-red-300">
//       <h1 className="text-orange-600 text-5xl font-bold text-center mb-12 pb-4">
//       Hello! I’m Ines.
//       </h1>
      
//       <div className="container mx-auto px-4 py-12 max-w-4xl flex flex-row gap-8 mb-12">
//       <div className="relative w-64 h-80 flex-shrink-0 ">
//         <Image
//           src="/InesWorking.jpg"
//           width={256}
//           height={320}
          
//           className="rounded-lg shadow-lg object-cover absolute -left-40 -bottom-32"
          
//           alt="Ines Working"
//         />
//         <Image
//           src="/Holasign1.jpg"
//           width={256}
//           height={320}
//           className="rounded-lg shadow-lg object-cover absolute -top-20 -right-20"
//           alt="Hola sign"
//         />
//       </div>
//       <div className="flex-grow pl-20">
        
//         <p className="text-xl text-center">
//         I’m a Full-Stack Software Engineer with a strong focus on web development. What draws me to this field is the perfect mix of problem-solving and creativity — I love building the bridge between thoughtful design and solid engineering.

// For me, development is about creating things that are both functional and beautiful — whether it’s crafting interactive websites, bringing a brand’s vision to life, or building tools that make life easier.

// Outside of code, I’m passionate about helping small businesses, creatives, and my community bring their ideas online. Let’s build something meaningful together! 
//         </p>

//       </div>

//       </div>
//     </div>
  )
}
