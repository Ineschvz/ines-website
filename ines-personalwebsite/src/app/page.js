import Image from "next/image"; 
import Hero from "./hero/page";
import Skills from "./skills/page"; 
import Work from "./work/page";
import About from "./aboutme/aboutme";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          className=""
          src="/ines-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <Hero/>
        <Skills/> 
        <Work/>
        <About/>

      </main>
      <div>
        
      </div>
    </div>
  );
}
