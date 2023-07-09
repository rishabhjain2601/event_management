import express from "express";
import path from "path"
import mongoose from "mongoose"; 
import cookieParser from "cookie-parser";
import { nextTick } from "process";
import  jwt  from "jsonwebtoken"; 
import bcrypt from "bcrypt";
const app=express();

mongoose.connect("mongodb://127.0.0.1:27017",{
   
   dbName:"MyFirstDatabase",

}).then(()=>console.log("Database Connected")).catch(e=>console.log(e));

const userschema=new mongoose.Schema({

  name:String,
  email:String,
  password:String,
});
const User=mongoose.model("User",userschema);
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());
app.set("view engine","ejs");

const isAunthenticated=async(req,res,next)=>{
    
  const {token}=req.cookies;
  if(token){

    const decoded=jwt.verify(token,"buwefufhuio");
    req.user=await User.findById(decoded._id);
    next();
 }
 else{ 
    res.redirect("login");
    
 }   

}




app.get("/",isAunthenticated,(req,res)=>{
    
     
     res.render("logout",{name:req.user.name});
      
      

});
app.get("/login",(req,res)=>{
     res.render("login");

});
app.get("/register",(req,res)=>{
 
   
   res.render("register");
    
    

});
app.post("/login",async(req,res)=>{
    const{email,password}=req.body;    

    let user=await User.findOne({email});
    if(!user) return res.redirect("/register");
    const isMatch=await bycrypt.compare(password,user.password);
    if(!isMatch) return res.render("login",{message:"Incorrect password"});
    const token = jwt.sign({_id:user._id},"buwefufhuio");
        res.cookie("token",token,{
       
    httpOnly:true,expires:new Date(Date.now()+60*1000)
 
     });
     res.redirect("/");

});
app.post("/register",async(req,res)=>{

    const {name,email,password}=req.body;
   
    let user=await User.findOne({email});
    if(user){
      return res.redirect("/login");
    }
    const hashedpassword=await bcrypt.hash(password,10);
    user= await User.create({
      name,
      email,
      password:hashedpassword,
    });
    const token = jwt.sign({_id:user._id},"buwefufhuio");
    
   console.log(req.body);
   res.cookie("token",token,{
      
   httpOnly:true,expires:new Date(Date.now()+60*1000)

    });
    res.redirect("/");

});
app.get("/logout",(req,res)=>{
    
  res.cookie("token",null ,{
    
    httpOnly:true,
    expires:new Date(Date.now()),

  }); 
  res.redirect("/");

});



app.listen(5000,()=>{

   console.log("Server is working");



});
