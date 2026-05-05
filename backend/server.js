import express from "express";
import session from "express-session";
import authRoutes from "./routes/authRoutes.js";

const app= express();

app.use(session({
    secret:"mysecret",
    resave:false,
    saveUninitialized:false
}));

app.get("/", (req,res)=>{
    res.send("server is running ");
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});



