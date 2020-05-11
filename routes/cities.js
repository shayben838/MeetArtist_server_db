const express=require("express")
const router = express.Router()

const get_cities = require("../DB/api/cities_and_countries/get_cities")

router.get("/",function(req,res){
    get_cities().
    then(result=> res.status(200).json({result}) )
    .catch(error=>res.status(201).json({error:error}))
})





module.exports = router