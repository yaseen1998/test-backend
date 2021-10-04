const  axios  = require('axios');
const {fruitModel,userModel} =require("../models/fruitModel")

const creatFruit = async(req,res)=>{
    try{
    const create = await fruitModel.create(req.body)
        res.status(200).json({
           data:create
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}

const getFruit= async(req,res)=>{
    try{
        const get = await fruitModel.find()
        res.status(200).json({
            data:get
         })
     }catch(err){
         res.status(400).json({status:err})
     }
    }

    const updateFruit = async(req,res)=>{
        try{
            const update = await fruitModel.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators:true
            })
            const get = await fruitModel.find()
            res.status(200).json({
                data:get
             })
        }catch(err){
            res.status(400).json({status:err})
        }
    }
    const deleteFruit= async(req,res)=>{
        try{
            const dele = await fruitModel.findByIdAndDelete(req.params.id)
            const get = await fruitModel.find()
            res.status(200).json({
                data:get
             })
        }catch(err){
            res.status(400).json({status:err})
        }
    }
    const createuser = async (req,res)=>{
        try{
        const user = await userModel.create(req.body)
        res.status(200).json({
            data:user
         })
     }catch(err){
         res.status(400).json({status:err})
     }
    }

    const creatFruituser = async(req,res)=>{
        try{
            const getuser = await userModel.findById(req.params.id)
            console.log(getuser);
        getuser.fav.push(fruitModel(req.body))
            getuser.save()
            res.status(200).json({
               data:getuser
            })
        }catch(err){
            res.status(400).json({status:err})
        }
    }
    const updateFruituser = async(req,res)=>{
        try{
            const getuser = await userModel.findById(req.params.idu)
            getuser.fav.map((item,index)=>{
                if(item._id==req.params.idf){
                    // console.log(item);
                    getuser.fav[index]=fruitModel(req.body)
                    // console.log(item);
                }
                getuser.save()
            })
            // const get = await fruitModel.find()
            res.status(200).json({
                data:getuser
             })
        }catch(err){
            res.status(400).json({status:err})
        }
    }
    module.exports={deleteFruit,updateFruit,getFruit,creatFruit,createuser,creatFruituser,updateFruituser}
