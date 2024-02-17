const app = require('express')();
const http = require('http').Server(app);

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
    insert();
     res.redirect('/');
 })
             
http.listen(5500,function(){
    console.log("server is running");
});

