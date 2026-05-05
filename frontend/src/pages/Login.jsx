import React from "react";

function Login() {
    return (
        <>
            <div className="  min-h-screen  flex itmes-center justify-center bg-gray-300">
                <div  className=" w-full max-w-sm bg-black text-white shadow-lg p-5 rounded-2xl  ">

                    <h2 className="   mb-4 font-semibold text-center text-3xl">Login here</h2>

                   
                    <form className="spcae-y-4">
                  
                   <div>
                    <label className="text-sm mb-1 block">Email</label>
                    <input 
                     className="w-full rounded-lg px-3 py-2 text-black focus:outline-none"
                     type="email" placeholder="ganga123@gmail.com" />
                    </div>

                    <div>

                        <label  className="text-sm mb-2 block"> password </label>
                        <input
                        className="w-full rounded-lg px-3 py-2 text-black focus:outline-none"
                        type="password" placeholder="Password" />
                
                      
                    </div>
                   
                           <div>
                            <button
                             className="w-full bg-blue-300 text-white rounded-xl  mt-4 py-2 hover:bg-blue-400"
                             >Login</button>
                           </div>

                           <p>Don't have account?{""}
                            <a href="/signup" 
                            className="text-blue-300 hover:underline">
                            SignUp
                            </a> 
                        
                           </p>
                         
                       
                    </form>

                </div>

            </div>

        </>
    )
}
export default Login;