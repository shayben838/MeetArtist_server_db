const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// const get_all_users = require("../DB/api/users/get_all_users");


router.post('/', async function (req, res, next) {
    const {fullName,mail,emailContent,userId} = req.body;
    const {display_name,email,you_tube,sound_cloud} = req.body.from
    try{
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
            user: "meetartist.io@gmail.com", 
            pass: "shayben838"
        }
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"MeetArtist " <meetartist.io@gmail.com>', // sender address
        to: `${mail}`, // list of receivers
        // const {first_name,last_name,email,you_tube,sound_cloud} = req.body.from

        subject:`${display_name} say hello` , // Subject line
        text: "" , // plain text body
        html: `  
        <div style = "color:black; border:1px solid black; text-align:center;width:60%;margin:10px auto; ">
            
            <h1>You Have A New Message From ${display_name} </h1>
            <h3>${emailContent}</h3>
            <p style="font-family: Arial, sans-serif;">${display_name} you tube channle <span style="color:red";>${you_tube}</span></p>
            <p>${display_name} sound cloud channle <span style="color:orange;"> ${sound_cloud}</span> </p>
            <p>${display_name} email <span style="color:green";>${email}</span></p>
            <h3><span > MEET ARTIST.IO </span></h3>
    </div>` // html body
    });

    console.log("Message sent: %s  - ", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
    res.status(200).json({status:"success"})
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s -  ", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    catch(e){
        // return messege to the user
        console.log("$$ EROER $$",e)
        res.status(200).json({status:"false"})

    }
});

module.exports = router;
