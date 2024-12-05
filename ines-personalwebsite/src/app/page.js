import Image from "next/image"; 
import Hero from "./components/hero";
import Skills from "./components/skills"; 
import Workdisplay from "./components/workdisplay";
import About from "./components/aboutme"; 

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center ">
      <main className="flex flex-col gap-8 row-start-2 items-center mx-auto">
  
        <Hero/>
        <Skills/> 
        <Workdisplay/>
        <About/>

      </main>
  
    </div>
  );
}

