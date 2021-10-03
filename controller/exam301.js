const  axios  = require('axios');
const {exam301Model} = require('../models/exam301')
const Filter = require("./classFilter")



const getdata = async(req,res)=>{
    const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
   const result = data.data.drinks.map(item=>{
        return new Filter(
            item
        )})
    
   res.status(200).json({
    status:'sucess',
    data:result
})
}


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

const editdata = async (req, res) => {
    let cleandata=[]
    let url =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    let drinks = await axios.get(url);
//     for(let i =0;i<drinks.data.drinks.length;i++){
//     cleandata.push(  exam301Model(drinks.data.drinks[i]))
// }
    let clean = drinks.data.drinks.map((item,index) => {
        cleandata.push(exam301Model(item))
        cleandata[index].save()
    });
    
    res.status(200).json({
      status: "sucess",
      data: {
        fav: cleandata,
      },
  })
  };
module.exports = {createFavExam,getAllfav,updateFavExam,deleteFavExam,getdata,editdata}

