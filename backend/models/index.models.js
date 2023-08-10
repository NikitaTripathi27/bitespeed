
const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    id:{
        type:Number,
    },
    phoneno:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    linkedId:{
        type:[Number],
    },
    precedence:{
        type:String,
    },
   
},
{
    timestamps:true
},)

const Contacts = mongoose.model('Contact' ,contactSchema)
module.exports ={Contacts}