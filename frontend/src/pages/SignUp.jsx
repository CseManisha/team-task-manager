import React from "react";
import API from "../services/api";

function SignUp() {
 
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        role:"member",
    });

    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const res= await fetch(`${API}/api/register`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(fromData),
        });

        const data = await res.json();
        if(res.ok){
            alert("registered Successfully");

        }else{
            alert(data.message);
        }
    }


    return (
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
                     onSubmit={handleSubmit}
                    >

                        <input type="text" placeholder="Enter name" name="email" value={formData.name} onChange={handleChange}
                            className="w-full p-2  rounded border-amber-300 bg-blue-300"
                        />
                        <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange}
                            className="w-full p-2 rounded bg-blue-300 mt-4"
                        />
                        <select name="role" value={formData.role} onChange={handleChange}
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