const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String,
    },
    description:{
        type:String,
        required:true
    }
})

// now build a model using Schema

const Blog = mongoose.model('Blog', blogSchema);


module.exports=Blog