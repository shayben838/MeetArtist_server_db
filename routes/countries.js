const express=require("express")
const router = express.Router()

const get_countries = require("../DB/api/cities_and_countries/get_countries")

router.get("/",function(req,res){
    get_countries().
    then(result=> res.status(200).json({result}) )
    .catch(error=>res.status(200).json({error:errore}))
})





module.exports = router