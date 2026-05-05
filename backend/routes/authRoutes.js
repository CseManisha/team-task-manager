import express from "express"
import bcrypt from "bcryptjs"
import User from "../models/user"
import { use } from "react";

const router = express.Router();

router.post("/signup", async(req, res) => {
    const {name,email,password,role}=req.body;
    const exist = await User.findOne({email});
    if(exist){
        return res.status(400).json({msg:"user already exists"})
    }

    const hashed= await bcrypt.hash(password,10);

    await User.create({
        name,
        email,
        password:hashed,
        role,
    });
    res.json({msg:"redister successfully"})
})

router.post("/login", async (req,res)=>{
    const {emai,password}=req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg:"incorrect email"});
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match){
        return res.status(400).json({msg:"incorrect password"});
    }

    req.session.user ={
        id:user.id,
        role:user.role,
    };
    res.json({
        message:"Login success",
        role:user.role,
    });
})

router.post("/logout",(req,res) =>{
    req.session.destroy();
    res.json({msg:"logged out"})
});

router.get("/me",(req,res)=>{
    if(!req.session.user){
        return res.status(401).json({message:"not logged in"})
    }
    res.json(req.session.user);
});

export default router;