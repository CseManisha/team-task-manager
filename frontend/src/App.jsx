import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Task from "./pages/Task";



function App(){
    return(
        <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/project" element={<Projects/>}/>
        <Route path="/task" element={<Task />}/>
       </Routes>
       
       </BrowserRouter>
       
    
        </>
    )
}
export default App;