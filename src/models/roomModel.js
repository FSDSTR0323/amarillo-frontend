var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema= new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    roomType: {
        type: String,
        enum: ['COCINA', 'SALÓN', 'HABITACIÓN', 'BAÑO', 'JARDÍN', 'COMEDOR'],
        require: true
    },
    //TO DO: METER LOS DEVICES

    deletedAt: {type:Date},
},
    {timestamps:true}
);

module.exports = mongoose.model('Room', roomSchema);