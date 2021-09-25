const {test1Model} = require('../models/test1.model')
const APIFeaturestest1 = require('./filter-test1') 

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

// const getallControllertest1=async(req,res)=>{ // get data with conditon equal
//     console.log(req.query);
//     const test1query = req.query
//     const excludedfield = ['page','sort','limit','field']
//     excludedfield.map(ele=>delete test1query[ele]) // remove query limit ,sort .... if it's exist
//     try{
        
//         // console.log(req.query,test1query);
//         // const get1test1 = await test1Model.find();
//         // const get1test1 = await test1Model.find({
//         //     name:'hassan'
//         // }); // find data base has name hassan
//         // const get1test1 = await test1Model.find()
//         // .where('name')
//         // .equals('mohamad') // find data base has name mohamad

//         const get1test1 = await test1Model.find(test1query);

//         res.status(200).json({
//             status:'sucess',
//             data:{
//                 get1test1
//             }
//         })
//     }catch(err){
//         res.status(400).json({status:err})
//     }
// }
// const getallControllertest1=async(req,res)=>{ // get data with conditon biger and smaller
//     const test1query = req.query
//        const test1query = {...req.query}
//     try{
//         let queryStr = JSON.stringify(test1query)
//         queryStr=  queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`)
//         // console.log(JSON.parse(queryStr));
//         //rating:{$gte:5}//gte , gt ,lte,lt rating[gte]:5
//         const get1test1 = await test1Model.find(JSON.parse(queryStr));

//         res.status(200).json({
//             status:'sucess',
//             data:{
//                 get1test1
//             }
//         })
//     }catch(err){
//         res.status(400).json({status:err})
//     }
// }
// const getallControllertest1=async(req,res)=>{ //sort data
//     const test1query = req.query
//     console.log(test1query);
    
//     try{
       
//         let get1test1 =  test1Model.find();

//  if(req.query.sort){ // sort = price or sort = -price
//     const sortby = req.query.sort.split(',').join(' ') //if the price is equal sort = price,rating
//     console.log(sortby);
//      get1test1=get1test1.sort(sortby) 
// }else{
//     get1test1=get1test1.sort('-date') 
// }
//  const test1 = await get1test1
//         res.status(200).json({
//             status:'sucess',
//             data:{
//                 test1
//             }
//         })
//     }catch(err){
//         res.status(400).json({status:err})
//     }
// }
// const getallControllertest1=async(req,res)=>{ //field limiting
//     const test1query = req.query
    
//     try{
       
//         let get1test1 =  test1Model.find();

//  if(req.query.fields){  // fields : name,price => show the name and price
//     const fields = req.query.fields.split(',').join(' ')
//      get1test1=get1test1.select(fields) // enclude
// }else{ // fields : -name,-price show every thing except name and price
//     get1test1=get1test1.select('-__v') // not enclude every thing except __v 
// }
//  const test1 = await get1test1
//         res.status(200).json({
//             status:'sucess',
//             data:{
//                 test1
//             }
//         })
//     }catch(err){
//         res.status(400).json({status:err})
//     }
// }
// const getallControllertest1=async(req,res)=>{ //pagination
//     const test1query = req.query
    
//     try{
       
//         let get1test1 =  test1Model.find();

//         const page = req.query.page * 1 || 1;
//         const limit = req.query.limit * 1 || 100;
//         const skip = (page - 1) * limit
//         console.log(page,limit,skip);
//         get1test1=get1test1.skip(skip).limit(limit) // 1-3 in page 1 ,4-6 in page 2
        
//         if(req.query.page){
//             const numtest = await test1Model.countDocuments()
//             if(skip >= numtest) throw new Error('this page does not exist')
//         }
//  const test1 = await get1test1
//         res.status(200).json({
//             status:'sucess',
//             data:{
//                 test1
//             }
//         })
//     }catch(err){
//         res.status(400).json({status:err,message:'fail'})
//     }
// }
const updateControllertest1=async(req,res)=>{

    try{
        const get1test1 = await test1Model.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
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
const deleteControllertest1=async(req,res)=>{

    try{
        const get1test1 = await test1Model.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'sucess',
            data:null
               
        })
    }catch(err){
        res.status(400).json({status:err})
    }
}

 
const top2pricetest1=(req,res,next)=>{
    req.query.limit = '2';
    req.query.sort = '-price';
    next()
}

const getallControllertest1=async(req,res)=>{ 
    try{
     
const features = new APIFeaturestest1(test1Model.find(),req.query)
.filter()
.sort()
.limitfield()
.paginate();
 const test1 = await features.query
        res.status(200).json({
            status:'sucess',
            result:test1.length,
            data:{
                test1
            }
        })
    }catch(err){
        res.status(400).json({status:err,message:'fail'})
    }
}
const getcontrollerStats = async(req,res)=>{
     try{
         const stats = await test1Model.aggregate([
            //  {
            //  $match:{price:{$gte:4.5}}
            //  },
             {
                 $group:{
                    _id:null,
                    avgprice:{$avg:'$price'},
                    minprice:{$min : '$price'},
                    maxprice:{$max : '$price'},
                    sumprice:{$sum:'$price'},
                    numprice:{$sum:1}
                 }
             }
         ]);
         res.status(200).json({
            status:'sucess',
            result:stats.length,
            data:{
                stats
            }
        })
         
     }catch(err){
        res.status(400).json({status:err,message:'fail'})
    }
}

module.exports={creatControllertest1
    ,getallControllertest1
    ,getoneControllertest1
    ,updateControllertest1
    ,deleteControllertest1
    ,top2pricetest1
,getcontrollerStats}