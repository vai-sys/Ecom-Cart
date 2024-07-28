const express=require("express");
const router=express.Router();
const isLoggedin=require("../middlewares/isLoggedin");



router.get("/",isLoggedin,function(req,res){
    let error=req.flash("error");
    res.render("index",{error});

})

router.get("/shop",isLoggedin,function(req,res){
    res.render("shop");
})
module.exports=router;