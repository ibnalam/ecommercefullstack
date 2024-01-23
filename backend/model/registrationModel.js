const mongoose = require("mongoose")
const {Schema} = mongoose

const registrationController = new Schema({
    username: String,
    email: {
        required: true,
        type: String
    },
    password : {
        required: true,
        type: String
    }
})

  

module.exports = mongoose.model("User",registrationController )