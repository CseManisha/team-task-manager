import React from "react";
import Navbar from "../components/Navbar";

function Dashboard(){
    return(

        <>
        <Navbar/>
        <div className="p-8">
    
            <h1 className="mb-4 font-bold tect-2xl">
                Admin Dashboard
            </h1>

            <div className="gap-4 grid grid-cols-3" >
                <div  className="  rounded bg-blue-200" >Completed Task</div>
                <div  className="rounded bg-blue-200" >Pending Task</div>
                <div   className="rounded bg-blue-200" >Overdue Task</div>
            </div>

        </div>
        </>
    )
}

export default Dashboard;