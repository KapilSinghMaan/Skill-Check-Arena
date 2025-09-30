const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/admin',require('./routes/adminRoute'));

const URL ="mongodb://localhost:27017/SkillCA"

mongoose.connect(URL)
    .then(()=>{
        console.log("Database connected");
    })
    .catch(()=>{
        console.log("Error in connecting to database");
    })

app.listen(5000,()=>{
    console.log("Server is running");
})