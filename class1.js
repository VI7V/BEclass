const express=require('express');

const app=express();

app.get('/about',(req,res)=>{
    res.send('About Us');
});c   
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});