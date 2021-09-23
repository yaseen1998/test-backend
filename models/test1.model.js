const mongoose = require('mongoose')

 
const test1Schema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'add the name or check the name its unique'],
        unique:true

    },rating:{
        type:Number,
        default:5

    },price:{
        type:Number,
        required:[true,'add the price'],

    }
})
const test1Model = mongoose.model('test1',test1Schema)
// const new1test1 = new test1Model({
//     name:'yaseen',
//     rating:55,
//     price:120
// })
// new1test1.save().then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log('error: ',err);
// })

module.exports={test1Model}