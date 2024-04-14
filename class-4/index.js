const express=require("express");

const app=express()

app.get("/sum",(req,res)=>{
    const a=parseINT(req.query.a);
    const b=parseINT(req.query.b);
    const sum=a+b;
    res.send(sum.toString())

});

app.listen(3000)