

import { DynaPuff } from "next/font/google";

import Image from "next/image";


const dynaPuff = DynaPuff({ subsets: ['latin'],  weight: ['400', '700']  });

export default function Skills() {
  const languages = [
    { name: "TypeScript", src: "/ts.png" },
    { name: "JavaScript", src: "/js.png" },
    { name: "HTML5", src: "/html5.png" },
    { name: "CSS", src: "/css.png" },
    { name: "SQL", src: "/sql.png" },
    { name: "NoSQL (MongoDB)", src: "/mongodb.png" },
  ];

  const frameworksAndTechnologies = [
    "React",
    "React Router",
    "Next.js",
    "Node.js",
    "Express",
    "React-Flow",
    "Redux",
    "Puppeteer",
    "Jest",
    "Git/GitHub",
    "Webpack",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana"
  ];

  return (
    <div className="mx-auto py-20">
      <div className={`${dynaPuff.className} text-6xl font-light mx-auto text-center`}>
        Skills
      </div>

      <div className="grid grid-cols-4 gap-6 items-center justify-center mt-12">
        <h1 className="text-2xl font-light text-rose-500 col-span-4">Languages</h1>

        {languages.map((language, index) => (
          <div key={index} className="flex flex-row flex-wrap justify-center gap-6 my-5 w-full">
            <div className="animate-bounce w-20 h-20 rounded-full p-4 flex items-center justify-center bg-red-300 hover:animate-spin transition duration-150 ease-in-out">
              <Image src={language.src} alt={language.name} width={64} height={64} />
            </div>
          </div>
        ))}
      </div>

      <div className="  grid grid-cols-4 gap-6 items-center justify-center mt-12">
        <h1 className="text-2xl font-light text-rose-500 col-span-4">Frameworks and Technologies</h1>

        {frameworksAndTechnologies.map((tech, index) => (
          <div key={index} className="flex flex-row flex-wrap justify-center gap-6 my-5 w-full">
            <div className=" animate-bounce w-16 h-16 rounded-full p-4 flex items-center justify-center bg-red-300 hover:animate-spin transition duration-150 ease-in-out">
              {tech}
            </div>
    
          </div>
        ))}
      </div>
    </div>
  );
}
