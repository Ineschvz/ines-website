import { FaGithub, FaGlobe } from 'react-icons/fa';


export default function ProjectCard() {
  const projectProps = [
    {
      projectname: "TimeWise - Schedule Optimization Application",
      description:
        "As a Software Engineer, I implemented React-Router to streamline navigation between components, enhancing user experience with seamless transitions and eliminating page reloads. Incorporated Redux to centralize state management and facilitate data flow throughout the application, ensuring scalability and maintainability.  Developed TimeWise with Node.js and Express, implementing middleware and modular routers to streamline backend operations and improve request handling efficiency.",
      technologies: "React, Redux, React-Router, Node.js, Express",
      github: "https://github.com/Ineschvz/TimeWise",
      site: "https://timewise.ineschvz.com/",
    },
    {
      projectname: "KubeEst8",
      description:
        "As a Software Engineer at OSLabs/KubeEst8, I played a role in developing and enhancing a Kubernetes monitoring solution. I architected a React-based application with reusable components, successfully implementing a dynamic node graph using React Flow for real-time infrastructure visualization. The project involved extensive backend development using Express framework, where I engineered custom middleware and routes for optimal API performance. A significant achievement was the integration of Prometheus and Grafana, where I implemented specialized metric collection systems and created comprehensive monitoring dashboards, demonstrating my expertise in full-stack development and DevOps practices.",
      technologies: "React, React-Flow, Node.js, Express, Prometheus, Grafana",
      github: "https://github.com/oslabs-beta/kube-est8",
      site: "https://kube-est8.vercel.app/",
    },
    {
      projectname: "Chavez Concrete",
      description:
        "As a Web Developer for Chavez Concrete, I designed and implemented a modern, responsive website to enhance their online presence and service accessibility. The project showcased my skills in full-stack development, incorporating features like email functionality through the Resend API and interactive mapping with Mapbox. I focused on creating an optimized, user-friendly experience while ensuring professional presentation and seamless deployment through Vercel.",
      technologies: "Next.js, React, Tailwind CSS, Resend API, Mapbox",
      github: "https://github.com/Ineschvz/ChavezConcrete_Site",
      site: "https://www.chavezconcreteworkinc.com/",
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
    <div className="space-y-12">
      {projectProps.map((project, index) => (
        <div
          key={index}
          className="font-display font-[IvyStyle] bg-white rounded-lg shadow-lg p-6 flex items-center justify-center"
        >
          <div className="text-center ">
            <h2 className=" font-display font-[ivy-presto]text-2xl font-bold text-green-900">
              {project.projectname}
            </h2>
            <p className="font-display font-[ivy-presto] text-lg">{project.description}</p>
            <p className="text-xl font-medium">
              Technologies: {project.technologies}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a href={project.site} target="_blank" rel="noopener noreferrer">
                <FaGlobe size={30} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

