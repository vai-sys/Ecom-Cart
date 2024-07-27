const express=require("express");
const router=express.Router();
const userModel=require("../models/user-model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const {generateToken}=require("../utils/generateToken")
router.get("/",function(req,res){
   res.send("hey it is working");
})

router.post("/register", async function(req,res){
  try{
   let {email,password,fullname}=req.body;
    bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(password,salt,async function(err,hash){
         if(err) return res.send(err.message);
         else {
            let user=await userModel.create({
               email,
               password:hash,
               fullname,

               
               
            });
           let token=generateToken(user);
           res.cookie("token",token);
           res.send("user created succesfully");

         }

      })
    })
   
   
  }
  catch(err){
   console.log(err);
  }


})

module.exports=router;