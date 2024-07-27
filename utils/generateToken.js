const jwt=require("jsonwebtoken")

const generateToken=(user)=>{
    return JsonWebTokenError.sign({email:user.email,id:user._id},process.env.JWT_KEY);
}
module.exports.generatetoken=generateToken;