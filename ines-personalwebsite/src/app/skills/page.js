

export default function Skills () {
    //create an array that will contain each of my skills

    const frontEnd = ["React", "Next.js", "React Router", "TypeScript", "JavaScript", "HTML5", "CSS", "Redux", "React-Flow"]

    const backEnd = ["Node.js", "Express", "SQL", "NOSQL" ]

    const toolingWorkflow = ["Git", "Github", "Docker", "Kubernetes", "Prometheus", "Grafana"]


return( 
<div className=""> 
<div className="">
    Skills
</div>
<div > 
    Frontend Development 

    {frontEnd.map((frontEnd,index) => (
        <div
        key={index}
        className=""> 
        <div className="p-6"> </div>
        <div className="flex items-center justify-center bg-red-300">
            {frontEnd}
        </div>
        </div>
    )
    )}  
</div>

    <div >
        Backend Development 
      {backEnd.map((backEnd,index) => (
        <div
        key={index}
        className=""> 
        <div className="p-6"> </div>
        <div className="flex items-center justify-center bg-red-300">
            {backEnd}
        </div>
        </div>
    )
    )} 

    </div>
    <div className=""> 
        Tooling and Workflow 
    {toolingWorkflow.map((toolingWorkflow,index) => (
        <div
        key={index}
        className=""> 
        <div className="p-6"> </div>
        <div className="flex items-center justify-center bg-red-300">
            {toolingWorkflow}
        </div>
        </div>
    )
    )} 

    </div>
    
    </div>




)



}