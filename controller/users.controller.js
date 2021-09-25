const UserModels = require('../models/usersModel')

const userSignup = async(req,res,next)=>{
    const newUser = await UserModels.create(req.body);

    res.status(200).json({
        status:'sucsess',
        data:{
            user:newUser
        }
    })
}
module.exports={userSignup}