const express=require('express')

const app=express();

app.get('/heath-checkup',function(req,res)
{
    const username=req.headers.username;
    const password=req.headers.password;
    const kidenyId=req.query.kidneyId;

    if(!(username === 'harkirat'  && password === 'pass'))
    {
        res.status(400).json({"msg":"Something is up with your inputs"})
        return
    }
    
    if(kidneyId == 1 || kidenyId == 2)
    {
        res.json({
                msg:"YOUR KIDNEY is fine!"
    
        })
    }
        
        
    
    

});

app.listen(3000);