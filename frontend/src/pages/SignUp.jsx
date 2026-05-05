import React from "react";

function SignUp(){
    return(
        <>
        
        <div 
        className="min-h-screen  flex items-center bg-blue-200 justify-center"
        
        >
            <div 
            className="w-full max-w-sm rounded-3xl bg-black text-white shadow-lg p-5"
            >
                <h1
                className="font-semibold mb-4 text-3xl text-center"
                >
                SignUp
                </h1>

                <form 
                
                >

               <input type="text" placeholder="Enter name" 
               className="w-full p-2  rounded border-amber-300 bg-blue-300"
               />
               <input type="password" placeholder="Enter Password" 
               className="w-full p-2 rounded bg-blue-300 mt-4"
               />
               <select  name="role" 
               className="w-full p-2 text-white rounded mt-3 mb-3 bg-blue-300"
               > <option value="member">Member</option>
                 <option value="admin">Admin</option></select>

               <button type="submit" className="w-full rounded p-2 bg-blue-400 font-semibold hover:bg-blue-500">
                SignUp
               </button>
               <p>if already SingUp  {"/"}</p>
               <a href="/" 
                            className="text-blue-300 hover:underline">
                            Login
                </a> 




                </form>
            </div>
        </div>
        
        </>
    )
}
export default SignUp;