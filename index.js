const express =require("express")
const app = express()
const PORT =3000
app.use(express.json())
app.post("/register",async(req,res)=>{

})
app.listen(PORT,()=>{
    console.log("server is runbning")
})