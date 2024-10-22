const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://Balak27:Balak27@cluster0.ohtes.mongodb.net/')
.then(()=>{
   console.log("connected to mongodb")
})