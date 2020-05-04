const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    try{
        console.log("decode ",req.headers['authorization'])
        const decode = jwt.verify(req.headers['authorization'],"JWT_MEET_ARTIST");
        
        req.Token = decode;
        next();

    }catch(error){
        console.log("@@@@@@@@@@  ",error)
        return res.status(200).json({
            message:"auth failde"
        })
    }
}