const express=require("express")
const router = express.Router()

const get_cities = require("../DB/api/cities_and_countries/get_cities")

router.get("/",function(req,res){
    // try{
    // get_cities().
    // then(result=> res.status(200).json({result}) )
    // .catch(error=>res.status(201).json({error:error}))
    // }
    // catch (error){
    //     res.status(404).json({error})
    // }
    res.status(200).json({test:'if this acceft in the client the cors problem couse because mysql connection!'})
})





module.exports = router