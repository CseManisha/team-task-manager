import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/login",async(req,res) =>{

    const {email,password}=req.body;
   

    // check user exist or not
    const person =await User.findOne({email});
    if(!person){
        return res.status(400).json({msg:" Person Not Found"})
    }

    //check password
    const isCorrect = await bcrypt.compare(password,person.password);
    if(!isCorrect){
        return res.status(400).json({msg:"password is incorrect please write valid password"})
    }

    // storing user in session
   req.session.person={
    id:person.id,
    email:person.email,
    role:person.role
   };

   //send response
   res.json({msg:"Login successfully"});
   res.status(500).json({msg:"server might not working please after some time"})

} );
export default router;
