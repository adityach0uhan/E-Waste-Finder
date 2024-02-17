
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
// app.use(cors({ origin: 'http://127.0.0.1:5500' })) 

const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://admin123:admin123@cluster0.3g5r6x1.mongodb.net/?retryWrites=true&w=majority");

//create a data schema
const infoSchema = {
    name: String,
    pincode: String,
    mobilenumber: String,
    No_Of_Product: String,
    dateOfPurchase: String,
    dateOfPickup: String,
    Address: String,
}

const user = mongoose.model("info", infoSchema);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/HTML/form.html");
})

// app.get("/thankyou",function(req,res){
//     res.sendFile(__dirname+"/index.html");
// })
app.post("/", function (req, res) {

    async function insert() {
        user.create({
            name: req.body.name,
            mobilenumber: req.body.mobileNumber,
            No_Of_Product: req.body.No_Of_Product,
            dateOfPurchase: req.body.dop,
            dateOfPickup: req.body.pickup,
            Address: req.body.address,
            pincode: req.body.pincode,

        })
    }
    insert();
    res.sendFile(__dirname + "/HTML/submmitted.html");

})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
const options = {
    origin: 'http://localhost:8080/',
    methods: ['GET', 'PUT ', 'POST ', 'DELETE '],
    allowedHeaders: ['Content-Type'],
}

app.use(cors(options))


