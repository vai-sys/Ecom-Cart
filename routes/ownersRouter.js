const express=require("express");
const router=express.Router();

router.get("/",function(req,res){
   res.send("hey it is working");
})
module.exports=router;