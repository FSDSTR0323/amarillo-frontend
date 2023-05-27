var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema= new Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    },
    last_name: {
        type:String
    },
    email: {
        type: String, // TO DO -- VALIDACIÓN DE MAIL CON @ REGEX ----
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    birthyear: {
        type:Number
    },
    userType: {
        type: String,
        default: 'superadmin',
        enum: ['superadmin','admin', 'viewer']
    }
},
    {timestamps:true}
);

module.exports = mongoose.model('User', userSchema);