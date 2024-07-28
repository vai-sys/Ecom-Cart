



const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function(req, res) {
    try {
        const { email, password, fullname } = req.body;

        let User=await userModel.findOne({email:email});
        if(User) return res.status(401).send("Already have an Account,Please Login !");



        const salt = await bcrypt.genSalt(10);
       
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const user = await userModel.create({
            email,
            password: hashedPassword,
            fullname,
        });

       
        const token = generateToken(user);

        
        res.cookie("token", token);

        
        res.send("user created successfully");
    } catch (err) {
       
        console.error(err);
        res.status(500).send("An error occurred while creating the user.");
    }
};


module.exports.loginUser=async function(req,res){
    try{
        let {email,password}=req.body;
        let User=await userModel.findOne({email:email});
        if(!User) return res.send("Email or Password incorrect !");
         bcrypt.compare(password,User.password,function(err,result){
            if(result){
                let token=generateToken(User);
                res.cookie("token",token);
                res.send("you can login ");
            }
            else{
                return res.send("Email or Password incorrect !");
            }
         })
    }
    catch(err){
        console.log(err);
    }
}


