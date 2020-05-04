const express=require("express")
const router = express.Router()

const get_profession = require("../DB/api/profession/get_profession")


router.get("/",function(req,res){
    get_profession().
    then(result=> res.status(200).json({result}) )
    .catch(error=>res.status(200).json({error:errore}))
})





module.exports = router