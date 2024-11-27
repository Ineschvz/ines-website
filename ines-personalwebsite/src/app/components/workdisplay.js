
import Image from "next/image";
import Link from "next/link";

export default function Workdisplay() {
    const projects = [
        {
            title: "Job 3",
            projectname: "KubeEst8",
            src: "/KubeEst8.jpg",
            description: "This project was for containerizing ",
            href: "https://kube-est8.vercel.app/"
        },
        {
            title: "Job 500",
            projectname: "Chavez Concrete",
            src: "/ChavezConcrete.jpg",
            description: "This project was conducted to help a small company grow.",
            href: "https://www.chavezconcreteworkinc.com/"
        },
        {
            title: "Job 2",
            projectname: "Monica Ines Photography",
            src: "/Monica.jpg",
            description: "This project was conducted to help a Hillsborough local grow.",
            href:"https://www.monicainez.com/"
        },
    ];

    return (
        <div className="mx-auto py-12 bg-gray-100">
            <h1 className="text-3xl font-semibold text-center mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                <div className="col-span-1 md:col-span-3">
                    <div
                        className="bg-red-300 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
                        style={{ minHeight: "400px" }} // Adjust height as needed
                    >
                        <div className="p-6 flex-grow">
                            <h3 className="text-lg font-semibold mb-4">
                                {projects[0].title || "Untitled Project"}
                            </h3>
                            {projects[0].src && (
                                <Link href= {projects[0].href}>
                                    <Image src= {projects[0].src}
                                    width= {500}
                                    height= {500}
                                    alt = 'image'
                                    />
                                </Link>
                            )}
                            <h4 className="text-md font-medium mb-2">
                                {projects[0].projectname}
                            </h4>
                            <p className="text-sm text-gray-700">
                                {projects[0].description}
                            </p>
                        </div>
                    </div>
                </div>
                {projects.slice(1).map((project, index) => (
                    <div
                        key={index + 1}
                        className="bg-red-300 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
                        style={{ minHeight: "400px" }} // Adjust height as needed
                    >
                        <div className="p-6 flex-grow">
                            <h3 className="text-lg font-semibold mb-4">
                                {project.title || "Untitled Project"}
                            </h3>
                            {project.src && (
                                <Link href= {project.href}>
                                    <Image src= {project.src}
                                    width= {500}
                                    height= {500}
                                    alt = 'image'
                                    />
                                </Link>
                            )}
                            <h4 className="text-md font-medium mb-2">
                                {project.projectname}
                            </h4>
                            <p className="text-sm text-gray-700">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
