import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate =useNavigate();
    const role = localStorage.getItem("role");

    const handleLogout =()=>{
        localStorage.clear();
        navigate("/");
    };

    return(
        <>
        <div className='bg-black text-white p-4 flex justify-between items-center'>
            <h2 className='font-bold text-2xl'>Task Manager</h2>

            <div className='space-x-4 '>
                {role === "admin"  &&(
                    <>
                    <Link to="/dashboard" className='hover:text-blue-400 text-white'>Dashboard</Link>
 
                    <Link to="/project" className='hover:text-blue-400'>projects</Link>

                    </>
                   

                ) }

            <Link to="/task" className='hover:text-blue-400'>Task</Link>

            </div>

            <div className='gap-4 flex items-center'>
                <span className='text-sm bg-blue-700 py-1 px-2 rounded'> {role}</span>
               <button  onClick={handleLogout}  className='bg-blue-300 px-3 py-1 rounded' >
                 Logout
               </button>
            </div>

        </div>
        </>
    )
}
export default Navbar;