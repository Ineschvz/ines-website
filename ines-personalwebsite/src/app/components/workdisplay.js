import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda_SC, Old_Standard_TT } from "next/font/google";
import ProjectCard from "./projectcard";
import { FaGithub, FaGlobe } from 'react-icons/fa';


const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });

export default function Workdisplay() {
    const projects = [
      
        {
            title: "KubeEst8",
            src: "/KubeEst8.jpg",
            description: "KubeEst8 is a React-based Kubernetes monitoring app featuring reusable components, real-time node graphs, and dynamic dashboards, integrating Prometheus and Grafana to enhance observability, performance, and scalability ",
            href: "https://kube-est8.vercel.app/"
        },
        {
            title: "Chavez Concrete",
            src: "/ChavezConcrete.jpg",
            description: "Developeed a website for Chavez Concrete, a construction company specializing in concrete work. The website features a modern, responsive design, email functionality, and interactive mapping with Mapbox.", 
            href: "https://www.chavezconcreteworkinc.com/"
        },
        {
            title: "Monica Ines Photography",
            src: "/Monica.jpg",
            description: "Website was designed for a local Hilsborough photographer to show case her work and services. ",
            href: "https://www.monicainez.com/"
        },

    ];

    const projectProps = [
        {
          projectname: "KubeEst8 - Kubernetes Monitoring Application",
          description:
            "As a Software Engineer at OSLabs/KubeEst8, I played a role in developing and enhancing a Kubernetes monitoring solution. I architected a React-based application with reusable components, successfully implementing a dynamic node graph using React Flow for real-time infrastructure visualization. The project involved extensive backend development using Express framework, where I engineered custom middleware and routes for optimal API performance. A significant achievement was the integration of Prometheus and Grafana, where I implemented specialized metric collection systems and created comprehensive monitoring dashboards, demonstrating my expertise in full-stack development and DevOps practices.",
          technologies: "React, React-Flow, Node.js, Express, Prometheus, Grafana",
          github: "https://github.com/oslabs-beta/kube-est8",
          site: "https://kube-est8.vercel.app/",
        },
        {
            projectname: "Chavez Concrete - Website",
            description:
            "As a Web Developer for Chavez Concrete, I designed and implemented a modern, responsive website to enhance their online presence and service accessibility. The project showcased my skills in full-stack development, incorporating features like email functionality through the Resend API and interactive mapping with Mapbox. I focused on creating an optimized, user-friendly experience while ensuring professional presentation and seamless deployment through Vercel.",
            technologies: "Next.js, React, Tailwind CSS, Resend API, Mapbox",
            github: "https://github.com/Ineschvz/ChavezConcrete_Site",
            site: "https://www.chavezconcreteworkinc.com/",
        },
        {
          projectname: "Monica Ines Photography - Portfolio",
          description:
            "Designed and launched a professional Squarespace website for a local Hillsborough photographer to showcase her portfolio and services. The site features a visually appealing and user-friendly layout, ensuring seamless navigation across all devices. It includes an integrated gallery to highlight her work, a contact form for client inquiries, and well-structured service pages to enhance engagement. Additionally, SEO best practices were implemented to improve search visibility and attract potential clients.",
          technologies: "Squarespace, SEO Tools, Responsive Design",
          site: "https://www.monicainez.com/",
        },
        {
            projectname: "TimeWise - Schedule Optimization Application",
            description:
              "As a Software Engineer, I implemented React-Router to streamline navigation between components, enhancing user experience with seamless transitions and eliminating page reloads. Incorporated Redux to centralize state management and facilitate data flow throughout the application, ensuring scalability and maintainability.  Developed TimeWise with Node.js and Express, implementing middleware and modular routers to streamline backend operations and improve request handling efficiency.",
            technologies: "React, Redux, React-Router, Node.js, Express",
            github: "https://github.com/Ineschvz/TimeWise",
            site: "https://timewise.ineschvz.com/",
          },
        {
          projectname: "Snaps - AI-Powered Article Summary Tool",
          description:
            "As a Software Engineer, I employed Puppeteer to scrape website content and used OpenAI's API to summarize articles, streamlining data extraction and enabling thorough analysis through seamless technology integration. I designed and optimized a PostgreSQL schema for managing user data and articles within Snaps, implementing indexing and access controls to ensure robust security and efficient data retrieval. I also implemented React-Router to streamline navigation between components, enhancing user experience with smooth transitions and faster load times.",
          technologies: "React, Puppeteer, OpenAI API, PostgreSQL, React-Router",
          github: "https://github.com/Ineschvz/Snaps",
          site: "https://snaps.ineschvz.com/",
        },
      ];

    return (
        <div className="mx-auto py-12 px-16 md:px-32 space-y-12 font-[ivyPresto]">
            <div className="bg-orange-200/25 py-12 rounded-3xl">
                <h1 className="text-5xl font-bold text-green-900 text-center mb-12">Projects</h1>
                
                   
                    <div className="flex flex-col items-center md:px-12 space-y-12 border border-red-300 rounded-lg shadow-lg ">
                
                        {projects.map((project, index) => (
                            <div key={index} className="mb-8 px-4 py-6 border border-gray-300 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-green-900 text-center">
                                    {project.title || "Untitled Project"}
                                </h3>
                                <div className="flex flex-col items-center space-y-4">
                                    {project.src && (
                                        <Link href={project.href}>
                                            <Image src={project.src}
                                                width={500}
                                                height={500}
                                                alt='project image'
                                                className="mx-auto"
                                            />
                                        </Link>
                                    )}
                                    {/* This isn't working because we're trying to access the description property of projectProps, which is an array of objects. We need to access the description property of the specific object in the array that corresponds to the current project. We can do this by using the index of the current project to access the correct object in the array. */}
                                    <p className="text-lg text-green-900 mt-4">
                                        {projectProps[index].description}
                                    </p>
                                    <p className="text-xl font-medium">
                                                  Technologies: {projectProps[index].technologies}
                                                </p>
                                                {projectProps[index].github && projectProps[index].site ? (
                                                  <div className="flex items-center justify-center space-x-4">
                                                    <a
                                                      href={projectProps[index].github}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    >
                                                      <FaGithub size={30} />
                                                    </a>
                                                    <a href={projectProps[index].site} target="_blank" rel="noopener noreferrer">
                                                      <FaGlobe size={30} />
                                                    </a>
                                                  </div>
                                                ) : null}
                                </div>
                            </div>
                        ))}
                        <Link href="/work">
                            <button className="bg-orange-600/25 text-green-900 px-4 py-2 rounded-md mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                                View More Projects
                            </button>
                        </Link>
                    </div>
                
            </div>
        </div>
    );
}


