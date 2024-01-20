const mongoose = require('mongoose');



function mongoConfig(){
    mongoose.connect('mongodb+srv://ibnalam:yLLspPxyApPjHZW6@cluster0.cvlmlv8.mongodb.net/ecommercefull?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
   
}





module.exports = mongoConfig

