import { FaGithub, FaGlobe } from 'react-icons/fa';


export default function ProjectCard() {
  const projectProps = [
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

