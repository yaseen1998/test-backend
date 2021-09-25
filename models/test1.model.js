const mongoose = require('mongoose')
// const validator = require('validator')
 
const test1Schema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'add the name or check the name its unique'],
        unique:true,
        maxlength:[10,'a name is very long'],
        minlength:[4,'a name is very small'],
    },rating:{
        type:Number,
        default:5,
        // validate:{
        // validator:function(val){ if the price greater then rating do not except
        //     return val < this.price
        // },
        // message : 'discount price'
        // }
    },price:{
        type:Number,
        required:[true,'add the price'],
        min:[1,'small price'],
        max:[110,'big price'],
    },summery:{
        type:String,
        trim:true, // => "  hello  "=>"hello"
        // enum:{
        //     values: ['first','second','third'],// the summery it jucst can contain this value
        //     message:'just first or secind ir third'
        // }
    },description:{
        type:String,
        trim:true 
    },image:[String]
    ,date:{
        type:Date,
        default:Date.now(),
        // select:false // don't show it to the user
    },startdate:[Date]
    
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

test1Schema.virtual('durationweek').get(function(){ // insert line take the price then divide by 7
    return this.price/7
}) 
// start middleware

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