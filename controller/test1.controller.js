const {test1Model} = require('../models/test1.model')

const creatControllertest1=async(req,res)=>{

    try{
        const create1test1 = await test1Model.create(req.body);
        res.status(200).json({
            status:'sucess',
            data:{
                test1:create1test1
            }
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}

const getallControllertest1=async(req,res)=>{

    try{
        const get1test1 = await test1Model.find();
        res.status(200).json({
            status:'sucess',
            data:{
                get1test1
            }
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}
const getoneControllertest1=async(req,res)=>{

    try{
        const get1test1 = await test1Model.findById(req.params.id);
        res.status(200).json({
            status:'sucess',
            data:{
                get1test1
            }
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}

module.exports={creatControllertest1,getallControllertest1,getoneControllertest1}