const Admin=require('../models/Admin');
const express =require('express');
const router=express.Router();

router.post('/',async(req,res)=>{
    const admin=await new Admin(req.body);
     admin.save();
    return res.json(req.body);
})

router.post('/login', async(req,res)=>{  
    const {email,password}=req.body;
    const result=await Admin.findOne({email:email});
    if(!result)
    {
        return res.json({message:"Details not found"});
    }
    if(password==result.password)
    {
        return res.json({message:"Login Successfully",admin:{
            role:'admin',
            id:result._id,
            email:result.email,
            name:result.name
        }})
    }
    else{
        return res.json({message:"Wrong Password!! Try again!!!"});
    }
})

module.exports=router