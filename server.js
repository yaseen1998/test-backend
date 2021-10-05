const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
require("dotenv").config();
app.use(cors());
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
,deleteControllertest1
,top2pricetest1
,getcontrollerStats} =require('./controller/test1.controller')

app.post('/create-test1',creatControllertest1)
app.get('/get-test1',getallControllertest1)
app.get('/stat-test1',getcontrollerStats)
app.get('/getone-test1/:id',getoneControllertest1)
app.patch('/update-test1/:id',updateControllertest1)
app.delete('/delete-test1/:id',deleteControllertest1)
app.get('/top2test1',top2pricetest1,getallControllertest1)
 
   

const {userSignup,getUSer,userLogin,protectUser}=require('./controller/users.controller');

app.post('/create-user',userSignup)
// app.get('/get-user',protectUser,getUSer)
app.get('/get-user',getUSer)
app.post('/login-user',userLogin)




// server for exam 
const {createFavExam,getAllfav,updateFavExam,deleteFavExam,getdata,editdata}= require("./controller/exam301")
app.get("/getdata",getdata)
app.post('/create-fav',createFavExam)
app.get('/get-fav',getAllfav)
app.get('/edit-fav',editdata)
app.patch('/update-fav/:id',updateFavExam)
app.delete('/delete-fav/:id',deleteFavExam)


// server for Fruit
const {deleteFruit,updateFruit,getFruit,creatFruit,createuser,updateFruituser, getFruituser,deleteFruituser} = require("./controller/fruitController")
app.post("/create-fruit",creatFruit)
app.get("/get-fruit",getFruit)
app.patch("/update-fruit/:id",updateFruit)
app.delete("/delete-fruit/:id",deleteFruit)


app.post("/create-userfrui/:email",createuser)
app.patch("/update-fruituser/:email/:idf",updateFruituser)
app.patch("/delete-fruituser/:email/:idf",deleteFruituser)
app.get("/get-fruituser/:email",getFruituser)


  app.listen(PORT, () => {
    console.log(`listening to port 8000`);
  });
  