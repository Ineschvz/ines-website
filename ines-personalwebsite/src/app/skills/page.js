export default function Skills () {
    //create an array that will contain each of my skills

    const skillsList = ["Web Design", "Web Development"]


return( 
<div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
<div>
    These are my skills 
</div>

    {skillsList.map((skillsList,index) => (
        <div
        key={index}
        className=""> 
        <div className="p-6"> </div>
        <div className="flex items-center justify-center bg-red-300">
            {skillsList}
        </div>
        </div>
    )
    )}
    </div>




)



}