export default function Work (){

    const projects = [
        {
            title: "Job 1", 
        },
        {
            title: "Job 2", 
        },
        {
            title: "Job 3", 
        }
    ]


return (
    <div className=" mx-auto py-12 bg-gray">
        <div className="grid grild-cols-1 gap-12 ">
            {projects.map((projects, index)=>(
                <div key= {index} 
                className="flex flex-col bg-red-300 "> 

                <div className="p-6">
                    <div className=" flex items-center ">
                    {projects.title}
                    </div>
                </div>
                    
                
                </div>
            ))}

        </div>

    </div>

)


}