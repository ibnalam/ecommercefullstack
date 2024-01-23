const bcrypt = require('bcrypt');
const RegistrationModel = require("../model/registrationModel.js")
const registrationController = require("../model/registrationModel.js")
const nodemailer = require("nodemailer")



let creatuserController = async (req, res)=>{
    console.log(req.body)
    const {username, email,password} = req.body
    let axistinguser = await RegistrationModel.find({email:email})
    console.log(axistinguser)

    if(axistinguser.length > 0 ){
        res.send({"error": "user already exist"})
    }else {
        bcrypt.hash(password, 10, async function(err, hash) {
           
            let registration = {
                username:username,
                email:email,
                password:hash
            }

            let reg = new RegistrationModel(registration)
            reg.save()


            console.log(reg)

            nodemailer 
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                  user: "ibnalam6@gmail.com",
                  pass: "fjdo yjnu eghr trgs",
                },
              });
              const info = await transporter.sendMail({
                from: 'ibnalam6@gmail.com', // sender address
                to: reg.email, // list of receivers
                subject: "Varification email ", // Subject line
                text: "Hello world?", // plain text body
                html: `<h1>Hello ${reg.username}</h1><p>welcome to our resourt</p><a href="https://www.facebook.com/"><img src="https://i.ibb.co/2gxqnqT/fb-icon-325x325.png" alt="fb-icon-325x325"></a>`, // html body
              });
              





            res.send({"success":"Registration successfully"})
        });
    }


    // let registration = {
    //     username:username,
    //      email:email,
    //      password:password
    // }

    // let reg = new RegistrationModel(registration)
    // reg.save()
    // res.send({"success":"Registration successfully"})
}










module.exports = {creatuserController}