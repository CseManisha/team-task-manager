import React from "react"
import Navbar from "../components/Navbar";

function Task(){

    const tasks=[
        {title:"Design Ui", status:"pending"},
        {title:"Fix bug",status:"complete"},
    ];

    return(
        <>
        <Navbar/>
        <div className="p-8">
            <h1 className="mb-4 text-2xl">My  Tasks</h1>
         
         {tasks.map((task,index) => (
            <div  key={index} className="p-3 mb-3 rounded bg-blue-200" >
                {task.tile}-{task.status}

            </div>
         ))}
        </div>
        </>
    )
}
export default Task;