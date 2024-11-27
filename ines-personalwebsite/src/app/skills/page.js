

import { DynaPuff } from "next/font/google";


const dynaPuff = DynaPuff({ subsets: ['latin'],  weight: ['400', '700']  });

export default function Skills() {
  const languages = [
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS",
    "SQL",
    "NoSQL (MongoDB)"
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

        {languages.map((languages, index) => (
          <div key={index} className="col-span-1 grid flex items-center">
            <div className="grid"></div>
            <div className="grid items-center justify-center bg-red-300 rounded p-4">
              {languages}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 items-center justify-center mt-12">
        <h1 className="text-2xl font-light text-rose-500 col-span-4">Frameworks and Technologies</h1>

        {frameworksAndTechnologies.map((tech, index) => (
          <div key={index} className="col-span-1">
            <div className="p-6"></div>
            <div className="flex items-center justify-center bg-red-300 rounded p-4">
              {tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
