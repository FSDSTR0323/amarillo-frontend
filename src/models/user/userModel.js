var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema= new Schema({
    first_name:{
        type:String,
        required:true,
        minLength:2
    },
    last_name: {
        type:String
    },
    birthyear: {
        type:Number
    }

},
{timestamps:true}
);

module.exports = mongoose.model('User', userSchema);