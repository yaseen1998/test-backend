const mongoose = require('mongoose')
require("dotenv").config();
const fs = require('fs')
const {test1Model} = require("./test1.model")

  mongoose.connect(`mongodb+srv://yaseen_saeed:ya9981063722@cluster0.ulxvz.mongodb.net/test`,
  {useNewUrlParser: true, 
    useUnifiedTopology: true}).then(()=> console.log('connect mongo atlas sucsess'))

    const test1fs = JSON.parse (fs.readFileSync(`${__dirname}/test1.json` , 'utf-8'))
    
    const importtest1 = async()=>{
      try{
        await test1Model.create(test1fs);
        console.log(test1fs);
        console.log('data sucessfully');
      }catch(err){
        console.log(err);
      }
    };

    // delete all data from db

    const deletedatatest1 = async()=>{
      try{
        await test1Model.deleteMany();
        console.log('delete data sucessfully');
        process.exit()
      }catch(err){
        console.log(err);
      }
    }

    if(process.argv[2]== '--import'){
      importtest1()
    }else if(process.argv[2]== '--delete'){
      deletedatatest1()
    }
