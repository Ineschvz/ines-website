// export default function Workdisplay (){

//     const projects = [
//         {
//             title: "Job 500", 
//             projectname: "Chavez Concrete",
//             src: "https://www.chavezconcreteworkinc.com/",
//             width: "600",
//             height: "400",
//             description: "This project was conduncted to help a small company grow",
//         },
//         {
//             title: "Job 2", 
//             projectname: "Monica Ines Photography",
//             description: "This project was conduncted to help a hilsborough local grow",
//         },
//         {
//             title: "Job 3", 
//         }
//     ]


// return (
//     <div className=" mx-auto py-12 bg-gray">
//         <div className="grid grid-cols-3 gap-4 ">
//             {projects.map((projects, index)=>(
//                 <div key= {index} 
//                 className="bg-red-300 rounded-lg"> 

//                 <div className="p-6">
//                     {/* <div className=" flex items-center ">
//                     {projects.title}
//                     </div> */}
//                     <div key={index} 
                    
//                     >
//                         <iframe src= {projects.src} className= "">

//                         </iframe>
//                         {projects.projectname}
//                         {projects.description}
//                     </div>
//                 </div>
                    
                
//                 </div>
//             ))}

//         </div>

//     </div>

// )


// }
export default function Workdisplay() {
    const projects = [
        {
            title: "Job 500",
            projectname: "Chavez Concrete",
            src: "https://www.chavezconcreteworkinc.com/",
            description: "This project was conducted to help a small company grow.",
        },
        {
            title: "Job 2",
            projectname: "Monica Ines Photography",
            src: "https://www.monicainez.com/",
            description: "This project was conducted to help a Hillsborough local grow.",
        },
        {
            title: "Job 3",
        },
    ];

    return (
        <div className="mx-auto py-12 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-red-300 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
                        style={{ minHeight: "400px" }} // Adjust height as needed
                    >
                        <div className="p-6 flex-grow">
                            <h3 className="text-lg font-semibold mb-4">
                                {project.title || "Untitled Project"}
                            </h3>
                            {project.src && (
                                <iframe
                                    src={project.src}
                                    title={project.projectname || "Project Preview"}
                                    className="w-full h-40 mb-4 border rounded"
                                    loading="lazy"
                                    style={{ height: "200px" }} // Adjust iframe height as needed
                                ></iframe>
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
