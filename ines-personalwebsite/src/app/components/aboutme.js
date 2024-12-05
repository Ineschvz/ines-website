import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl flex flex-row gap-8">
      <div className="relative w-64 h-80 flex-shrink-0">
        <Image
          src="/InesWorking.jpg"
          width={256}
          height={320}
          
          className="rounded-lg shadow-lg object-cover absolute -left-40 -bottom-32"
          // This image is placed absolutely within its parent container, which is a flex item
          // The negative left and bottom values position the image outside of the parent's
          // normal content area, creating a sense of depth and visual interest.
          // The shadow is added to help the image stand out from the background.
          // The rounded-lg class adds a subtle border radius to the image.
          
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
        <h1 className="text-3xl font-semibold mb-6">About Me</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hi, I am Ines, a passionate software engineer with a love for building innovative web applications. My expertise spans various programming languages, and I am always eager to expand my knowledge. When I am not coding, you will find me exploring hiking trails or capturing moments through photography.
        </p>

      </div>
    </div>
  )
}

