import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda_SC, Old_Standard_TT } from "next/font/google";

const bodoniModa = Bodoni_Moda_SC({ subsets: ['latin'], weight: ['400', '700'] });
const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400', '700'] });

export default function Workdisplay() {
    const projects = [
        {
            title: "Job 2",
            projectname: "Monica Ines Photography",
            src: "/Monica.jpg",
            description: "This project was conducted to help a Hillsborough local grow.",
            href: "https://www.monicainez.com/"
        },
        {
            title: "Job 500",
            projectname: "Chavez Concrete",
            src: "/ChavezConcrete.jpg",
            description: "This project was conducted to help a small company grow.",
            href: "https://www.chavezconcreteworkinc.com/"
        },
        {
            title: "Job 3",
            projectname: "KubeEst8",
            src: "/KubeEst8.jpg",
            description: "This project was for containerizing ",
            href: "https://kube-est8.vercel.app/"
        },
    ];

    return (
        <div className={`mx-auto py-12 space-y-12 ${bodoniModa.className} ${oldStandardTT.className}`}>
            <h1 className="text-5xl font-bold text-green-900 text-center mb-12">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-4 justify-items-center">
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
                                <Image src={projects[2].src}
                                    width={500}
                                    height={500}
                                    alt='image'
                                />
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
                                    <Image src={project.src}
                                        width={500}
                                        height={500}
                                        alt='image'
                                    />
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
        </div>
    );
}

