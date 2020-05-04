const express=require("express")
const router = express.Router()

const get_genre = require("../DB/api/genres/get_genre")

router.get("/",function(req,res){
    get_genre().
    then(result=> res.status(200).json({result}) )
    .catch(error=>res.status(200).json({error:errore}))
})





module.exports = router