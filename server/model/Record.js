const mongoose=require("mongoose")
const uuid=require('uuid')
const User=new mongoose.Schema({
    id:{
        type: 'string',
			primaryKey: true,
			default: uuid.v4,
    },
    caseNumber:{
        type:String,
        required:true
    },
    caseOwner:{
        type:String,
        required:true
    },
    dbCount1:{
        type:String,
        required:true
    },
    dbCount2:{
        type:String,
        required:true
    },
    dbCount3:{
        type:String,
        required:true
    },
    project:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    variable:{
        type:String,
        required:true
    },
    lastUpdate:{
        type:String,
        // required:true
    }
})
module.exports=mongoose.model("record",User)