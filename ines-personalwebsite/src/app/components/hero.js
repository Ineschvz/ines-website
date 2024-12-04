import Image from "next/image";

export default function Hero () {
    //components/HeroSection.js
    return (
      <div className="absolute inset-0 top-16 overflow-hidden">
        <header className="h-full w-full flex justify-center items-center">
            <Image src="/InesTyping.jpg" layout="fill" objectFit="cover" alt="Ines Typing Code" />
        </header>
      </div>
    );

  
    
  
}