const mongoose = require('mongoose')
const exam301Schema =new mongoose.Schema({
    strDrink :String,
    strDrinkThumb : String,
    idDrink:String
})

const exam301Model = mongoose.model('exam301',exam301Schema)
module.exports={exam301Model}