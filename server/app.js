'use-strict';
require('./connection');
const express=require('express');
const app=express();
const axios=require('axios');
const Data=require('./models/data')
var cors = require('cors')
app.use(cors())
const CircularJson=require('circular-json');
const CircularJSON = require('circular-json');


app.get('/getdata',async(req,res)=>{
    console.log(req.url,req.method);
    try
    {
        
    const data= await axios.get('https://api.wazirx.com/api/v2/tickers');
        
    var cnt=0;
    var x=Object.entries(data.data);
    const y=x.slice(0,11);

 
    final_data=[];
    for(i in y)
    {
        final_data.push(y[i][1]);
    }
    
    try{
        
        await Data.deleteMany({});
        const createdProducts=await Data.insertMany(final_data);
        const result=await Data.find({});
        res.status(200).send(result);
    }
    catch(err)
    {
            console.log(err);
            res.status(500).send({message:"Internal Server error"})
    }
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send({message:"Data Not Found!!"});
    }
    

})

app.listen(5000,()=>{
    console.log('Server is listening at port 5000');
})