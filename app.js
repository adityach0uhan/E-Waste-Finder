
// const express = require('express')
// const app = express()
// app.get('/data', (req, res) => {
//     res.json({
//         name: 'cors in node.js',
//         language: 'JavaScript',
//         server: 'Express.js',
//     })
// })


const app = require('express')();
const PORT = 8080
const http = require('http').Server(app);
const cors = require('cors')
app.use(cors({ origin: 'http://127.0.0.1:5500' })) 

const mongoose= require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://surajkumarverma662:rp2zxvuuLKOhWSSC@cluster0.nua7vcj.mongodb.net/?retryWrites=true&w=majority");

//create a data schema
const infoSchema ={
    name:String,
    pincode:String,
    mobilenumber :String,
    No_Of_Product:String,
    dateOfPurchase:String,
    dateOfPickup:String,
    Address : String,
}

const user  = mongoose.model("info",infoSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/HTML/form.html");
})

// app.get("/thankyou",function(req,res){
    //     res.sendFile(__dirname+"/index.html");
    // })
    app.post("/",function(req,res){
        
        
    async function insert(){
        user.create({
            name:req.body.name,
            mobilenumber : req.body.mobileNumber,
            No_Of_Product:req.body.No_Of_Product,
            dateOfPurchase:req.body.dop,
            dateOfPickup: req.body.pickup,
            Address : req.body.address,
            pincode:req.body.pincode,
            
        })
        
    }
    res.redirect('/');
    insert();
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
const options = {
    origin: 'Tera host waala Link dal dena idhar 👍 ',
    methods: 'GET, PUT , POST , DELETE ',
    allowedHeaders:['Content-Type'],
  }
  
  app.use(cors(options))
  

