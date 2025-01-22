import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda_SC, Old_Standard_TT } from "next/font/google";


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

    return (
        <div className="mx-auto py-12 px-8 space-y-12 font-[ivyPresto]">
            <div className="bg-orange-200/25 py-12 rounded-md">
                <h1 className="text-5xl font-bold text-green-900 text-center mb-12">Projects</h1>
                <div className="grid grid-cols-2 gap-12">
                    <div className="flex flex-col items-center">
                        <h2 className="text-center mb-4 font-semibold text-3xl text-green-900 ">Latest Work</h2>
                        <Link href="/work">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-4 hover:shadow-md hover:shadow-orange-500/75 transition-shadow duration-300">
                                View All Projects
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-center mb-4 font-semibold text-3xl text-green-900">Previous Work</h2>
                        {projects.map((project, index) => (
                            <div key={index} className="mb-8 px-4 py-6 border border-gray-300 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-green-900 text-center">
                                    {project.title || "Untitled Project"}
                                </h3>
                                <div className="flex items-center justify-between space-x-4">
                                    {project.src && (
                                        <Link href={project.href}>
                                            <div className="flex items-center justify-center text-center">
                                                <Image src={project.src}
                                                    width={500}
                                                    height={500}
                                                    alt='project image'
                                                    className="mx-auto"
                                                />
                                            </div>
                                        </Link>
                                    )}
                                    <p className="text-lg text-green-900">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <Link href="/work">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-4">
                                View More Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

{/* <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-4 justify-items-center">
                <div
                    className="bg-transparent border-2 border-orange-500 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
                    style={{ minHeight: "400px" }}
                >
                    <div className="p-6 flex-grow text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-green-900">
                            {projects[2].title || "Untitled Project"}
                        </h3>
                        {projects[2].src && (
                            <Link href={projects[2].href}>
                                <div className="flex items-center justify-center">
                                    <Image src={projects[2].src}
                                        width={500}
                                        height={500}
                                        alt='image'
                                        className="mx-auto"
                                    />
                                </div>
                            </Link>
                        )}
                        <h4 className="text-xl font-medium mb-2 text-green-900">
                            {projects[2].projectname}
                        </h4>
                        <p className="text-lg text-green-900">
                            {projects[2].description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 justify-items-center">
                {projects.slice(0, 2).map((project, index) => (
                    <div
                        key={index}
                        className="bg-transparent border-2 border-orange-500 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
                        style={{ minHeight: "400px" }}
                    >
                        <div className="p-6 flex-grow text-center">
                            <h3 className="text-2xl font-semibold mb-4 text-green-900">
                                {project.title || "Untitled Project"}
                            </h3>
                            {project.src && (
                                <Link href={project.href}>
                                    <div className="flex items-center justify-center">
                                        <Image src={project.src}
                                            width={500}
                                            height={500}
                                            alt='image'
                                            className="mx-auto"
                                        />
                                    </div>
                                </Link>
                            )}
                            <h4 className="text-xl font-medium mb-2 text-green-900">
                                {project.projectname}
                            </h4>
                            <p className="text-lg text-green-900">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <Link href="/work">
                    <button className="bg-green-900 text-white px-8 py-3 rounded-md hover:bg-green-700 transition duration-300">
                        See Our Services
                    </button>
                </Link>
            </div> */}

