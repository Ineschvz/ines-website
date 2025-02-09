import Image from "next/image";

export default function Contact (){
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto p-4 md:p-8">
                <h2 className="text-6xl font-bold text-green-900 text-center pt-4 pb-8 font-[ivyPresto]">
                   Lets Work Together? 
                </h2>
                <div className="container mx-auto flex-row flex items-center justify-center font-[ivyPresto] font-bold text-green-900 space-x-16">
                    <div className="relative w-64 h-80 flex-shrink-0">
                        <Image
                          src="/contactpic.jpg"
                          width={256}
                          height={320}
                          className="rounded-lg shadow-lg object-cover absolute -left-40 -bottom-40"
                          alt="Ines Working"
                        />
                        <Image
                          src="/contactpic2.jpg"
                          width={256}
                          height={320}
                          className="rounded-lg shadow-lg object-cover absolute -top-12 -right-12"
                          alt="Hola sign"
                        />
                    </div>
                    <div className="max-w-2xl">
                        <p className="font-bold text-2xl mt-12">
                        I’m Ines, a web developer who loves building sleek, high-performing websites and web apps. Whether it’s crafting custom solutions with React and Next.js, optimizing sites for speed and accessibility, or integrating interactive features, I’m all about creating seamless digital experiences. I’ve worked on everything from open-source tools to business websites that drive real results. If you need a developer to bring your vision to life or just want to chat about web development, let’s connect!
                        </p>
                    </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <div className="text-center">
                        <p className="font-[ivyPresto] text-green-900 text-center font-bold">Connect with me on LinkedIn and message me!</p>
                        <a href="https://www.linkedin.com/in/ines-morales-5444a81b1/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-2xl">
                                LinkedIn
                            </button>
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="font-[ivyPresto] text-green-900 text-center font-bold ">Or email me!</p>
                        <a href="mailto:ineschvz21@gmail.com">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-2xl">
                                Email
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
           
        </div>
    )
}
