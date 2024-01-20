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



            //  nodemailer 
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                  user: "ibnalam6@gmail.com",
                  pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
                },
              });
              const info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
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