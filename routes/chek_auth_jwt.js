const jwt = require("jsonwebtoken");
module.exports = (req,res,next)=>{
    try{
        const decode = jwt.verify(req.headers['authorization'],process.env.JWT_TOKEN);
        
        req.Token = decode;
        next();

    }catch(error){
        console.log("@@@@@@@@@@  ",error)
        return res.status(200).json({
            message:"auth failde"
        })
    }
}