import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

      const res = await fetch(`${api}/api/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(form),
      });

      const data = await res.json();

      if(res.ok){
        localStorage.setItem("token",data.token);
        localStorage.setItem("role",data.role);

        if(data.role === "admin"){
            navigate("/dashboard");
        }else{
            navigate("/task");
        }
      }else{
        alert(data.message);
      }

    }
    return (
        <>
            <div className="  min-h-screen  flex items-center justify-center bg-purple-100">
                <div className=" w-full max-w-sm bg-black text-white shadow-lg p-5 rounded-2xl  ">

                    <h2 className="   mb-4 font-semibold text-center text-3xl">Login Here</h2>


                    <form className="space-y-4"
                        onSubmit={handleSubmit}
                    >

                        <div>
                            <label className="text-sm mb-1 block">Email</label>
                            <input
                                className="w-full rounded-lg px-3 py-2 text-black bg-purple-400"
                                type="email" placeholder="ganga123@gmail.com" name="email" value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>

                            <label className="text-sm mb-2 block"> password </label>
                            <input
                                className="w-full rounded-lg px-3 py-2 bg-purple-400 text-black focus:outline-none"
                                type="password" placeholder="Password"  value={form.password} name="password" onChange={handleChange}

                            />


                        </div>

                        <div>
                            <button
                                className="w-full bg-purple-300 text-white rounded-xl  mt-4 py-2 hover:bg-purple-600"
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