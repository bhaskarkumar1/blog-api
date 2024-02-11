const mongoose=require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/blog').then((result)=>{
    console.log("DB conncted successfully");
}).catch((error)=>{
    console.log("error connceting DB");
})


