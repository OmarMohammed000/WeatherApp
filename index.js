import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port= 3000;
app.use(express.static("public"));
app.get("/",async(req,res)=>{
    const currentTime = new Date().getHours(); 
    res.render("index.ejs",{time:currentTime});

})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});