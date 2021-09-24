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

    },summery:{
        type:String,
        trim:true // => "  hello  "=>"hello"
    },description:{
        type:String,
        trim:true 
    },image:[String]
    ,date:{
        type:Date,
        default:Date.now()
    },startdate:[Date]
})
const test1Model = mongoose.model('test1',test1Schema)
// const new1test1 = new test1Model({
//     name:'mohamad',
//     rating:55,
//     price:120,
//     summery:"first compelete data",
//     description:"this is the first data I do so be hoppy ti the next",
//     image:["test1_1.jpg","test1_2.jpg"],
//     startdate:["2022-08-12,10:00","2012-09-12,11:30"]
// })
// new1test1.save().then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log('error: ',err);
// })

module.exports={test1Model}