// define the routes here for blog
const express=require("express")
const Router=express.Router()
const {getAllBlog,createABlog,readSpecificBlog,updateBlog,deleteBlog}=require("../controllers/blogController")

Router.get("/",getAllBlog)

// Router.get("/",getSpecificBlog)

Router.post("/",createABlog)



Router.get("/:blogID",readSpecificBlog)

Router.put("/:blogID",updateBlog)

Router.delete("/:blogId",deleteBlog)

module.exports=Router