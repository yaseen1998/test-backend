const mongoose = require('mongoose')
const fruitSchema =new mongoose.Schema({
    name :String,
    image : String,
    price:Number
})
const usserSchema =new mongoose.Schema({
    email:String,
    fav:Array
})


const fruitModel = mongoose.model('fruit',fruitSchema)
const userModel = mongoose.model('user',usserSchema)
module.exports={fruitModel,userModel}