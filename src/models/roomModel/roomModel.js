var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema= new Schema({
    name:{
        type:String,
        //required:true,
        unique:true
    },
    deletedAt: {type:Date},

},
{timestamps:true}
);

module.exports = mongoose.model('Room', roomSchema);