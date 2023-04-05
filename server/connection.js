const mongoose=require('mongoose');
mongoose.set('strictQuery',true);

mongoose.connect("mongodb+srv://Mangesh:ZF1ElpwcFmweeAKN@cluster0.kl7teuz.mongodb.net/NodeTask")
.then((result)=>{
    console.log('MongoDB Connection Succeeded\n');
})
.catch((err)=>{
    console.log('Connection Error as follow:\n',JSON.stringify(err));
})


module.exports=mongoose;