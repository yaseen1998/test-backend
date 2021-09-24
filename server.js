const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
app.use(cors());
require("dotenv").config();
app.use(express.json());


const mongoose = require('mongoose')
const PORT = process.env.PORT
app.get("/", (req, res) => {
    res.status(200).json({ message: "I'm working" });
  });
  mongoose.connect(`mongodb+srv://yaseen_saeed:ya9981063722@cluster0.ulxvz.mongodb.net/test`,
  {useNewUrlParser: true, 
    useUnifiedTopology: true}).then(()=> console.log('connect mongo atlas sucsess'))

const {creatControllertest1 
    ,getallControllertest1
,getoneControllertest1
,updateControllertest1
,deleteControllertest1} =require('./controller/test1.controller')

app.post('/create-test1',creatControllertest1)
app.get('/get-test1',getallControllertest1)
app.get('/getone-test1/:id',getoneControllertest1)
app.patch('/update-test1/:id',updateControllertest1)
app.delete('/delete-test1/:id',deleteControllertest1)
 
   






  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  