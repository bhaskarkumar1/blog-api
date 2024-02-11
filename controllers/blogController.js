// define the controller here 
const mongoose=require("mongoose")
const Blog=require("../models/Blog")

const getAllBlog=(req,res)=>{
    Blog.find({}).then((result)=>{
        res.status(200).send(result)
    }).catch((error)=>{
        res.status(500).send("error fetching blog document")
    })

}

const createABlog=(req,res)=>{
// res.status(200).send("createABlog post route")
const newObj=new Blog({
    title:req.body.title,
    description:req.body.description
})
console.log(newObj)

newObj.save().then((result)=>{
    console.log("data saved Success")
    res.send("OK send")

}).catch((error)=>{
    console.log("error is saving data")
    res.send("NOt OK send")

})
// res.send("OK send")

}




//read a specific blog 
const readSpecificBlog=(req,res)=>{
    const blogID=req.params.blogID;

    Blog.find({_id:blogID}).then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json({"error":err})
    })
    
}

// update a specific blog
const updateBlog=(req,res)=>{
 const blogId=req.params.blogID  
 Blog.findOneAndUpdate({_id:blogId},{
    title:req.body.title,
    description:req.body.description
    }).then((result)=>{
        res.json({"operation": "current data modified"})
    }).catch((err)=>{
        res.json({"status": "not able to update data !"})
    })
}


// delete a specific post

const deleteBlog=(req,res)=>{
    const blogId=req.params.blogId
    Blog.deleteOne({_id:blogId}).then((result)=>{
        res.json({"Operation":"data deleted Success"})
    }).catch((err)=>{
        res.json({"error":err})
    })
}

module.exports={
    getAllBlog,
    createABlog,
    readSpecificBlog,
    updateBlog,
    deleteBlog
}