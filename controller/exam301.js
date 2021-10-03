const {exam301Model} = require('../models/exam301')

const createFavExam=async(req,res)=>{

    try{
        const createExam = await exam301Model.create(req.body);
        res.status(200).json({
            status:'sucess',
            data:{
                fav:createExam
            }
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}

const getAllfav = async (req, res) => {
    try {
      const getFav = await exam301Model.find();
      res.status(200).json({
        status: "sucess",
        data: {
            getFav,
        },
      });
    } catch (err) {
      res.status(400).json({ status: err });
    }
  };
  const deleteFavExam=async(req,res)=>{

    try{
        const deletefav = await exam301Model.findByIdAndDelete(req.params.id);
        const getFav = await exam301Model.find();
        res.status(200).json({
            status:'sucess',
            data:getFav
               
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}
const updateFavExam=async(req,res)=>{

    try{
        const updatefav = await exam301Model.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        const getFav = await exam301Model.find();
        res.status(200).json({
            status:'sucess',
            data:{
                getFav
            }
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}

module.exports = {createFavExam,getAllfav,updateFavExam,deleteFavExam}

