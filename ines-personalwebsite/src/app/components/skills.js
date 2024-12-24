"use client"

import { Old_Standard_TT } from 'next/font/google';
import Image from "next/image";
import { motion } from "framer-motion";
const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });
const languages = [
  { name: "TypeScript", src: "/ts.png" },
  { name: "JavaScript", src: "/js.png" },
  { name: "HTML5", src: "/html5.png" },
  { name: "CSS", src: "/css.png" },
  { name: "SQL", src: "/sql.png" },
  { name: "NoSQL (MongoDB)", src: "/mongodb.png" },
];
const frameworksAndTechnologies = [
  {name:" React", src:"/reactjs.png"},
  {name:" Next.js", src:"/next.svg"},
  {name:" Node.js", src:"/node.png"},
  {name:" Express", src:"/express.png"},
  {name:" React-Flow", src:"/reactflow1.png"},
  {name:" Redux", src:"/redux.png"},
  {name:" Puppeteer", src:"/puppeteer.png"},
  {name:" Jest", src:"/jest.png"},
  {name:" Git/GitHub", src:"/Git.png"},
  {name:" Webpack", src:"/webpack.png"},
  {name:" Docker", src:"/docker.png"},
  {name:" Kubernetes", src:"/kubernetes.png"},
  {name:" Prometheus", src:"/prometheus.png"},
  {name:" Grafana", src:"/grafana.png"},
];


export default function Skills() {
  return (
    <motion.section 
      className={`font-[ivyPresto] container mx-auto py-20`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.h2 
        className="text-5xl font-bold text-green-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <SkillSection title="Languages" items={languages} />
      <SkillSection title="Frameworks and Technologies" items={frameworksAndTechnologies} />
    </motion.section>
  );
}

export function SkillSection({ title, items }) {
  return (
    <div className="mb-16">
      <motion.h3 
        className="text-2xl font-light text-rose-500 mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {items.map((item, index) => (
          <SkillItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export function SkillItem({ item, index }) {
  return (
    <motion.div 
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <motion.div 
        className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {typeof item === 'string' ? (
          <span className="text-sm font-medium text-rose-700 text-center px-2">{item}</span>
        ) : (
          <Image src={item.src} alt={item.name} width={40} height={40} />
        )}
      </motion.div>
    </motion.div>
  );
}

