const mongoose=require('mongoose')

const DataSchema=new mongoose.Schema({
    
        base_unit:{
            type:String,
            required:true,
            default:""
        },
        quote_unit:
        {
            type:String,
            required:true,
            default:""
        },
        low:{
            type:String,
            required:true,
            default:""
        },
        high:{
            type:String,
            required:true,
            default:""
        },
        last:{
            type:String,
            required:true,
            default:""
        },
        type:{
            type:String,
            required:true,
            default:""
        },
        open:{
            type:String,
            required:true,
            default:""
        },
        volume:{
            type:String,
            required:true,
            default:""
        } ,
        sell:{
            type:String,
            required:true,
            default:""
        } ,
        buy:
        {
            type:String,
            required:true,
            default:""
        },
        at:
        {
            type:String,
            required:true,
            default:""
        },
        name:
        {
            type:String,
            required:true,
            default:""
        }
    
});

module.exports=mongoose.model('data',DataSchema);