const express = require('express')
const app = express()
const mongoConfig = require("./dbconfig/mongoConfig")
const cors = require("cors")
const {creatuserController} = require("./controllers/authController.js")
 
mongoConfig()


//  middleware
app.use(express.json())
app.use(cors())



app.post('/createuser', creatuserController)






app.listen(8000, function(){
    console.log("connected") 
})




// console.log(creatuserController)





// fjdo yjnu eghr trgs






//ibnalam
// yLLspPxyApPjHZW6  