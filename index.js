const express=require("express")
const app=express()

const blogRoutes=require("./routes/blogRoutes")

require("./config/dbConnect")

const port=9000
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Server is running smoothly")
})

app.use("/blog",blogRoutes)


app.listen(port,()=>{
    console.log(`server has been started on port: ${port}`)
})