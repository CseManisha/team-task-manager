import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bcrypt from "bcryptjs";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app= express();

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));


app.use(session({
    secret:"mysecret",
    resave:false,
    saveUninitialized:false
}));

app.use("api",authRoutes);

mongoose.connect(process.env.MONGO_URI)
 .then(() => console("Mongodb connected"))
 .catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("server is running ");
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});



