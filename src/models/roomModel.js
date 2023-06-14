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
        enum: ['KITCHEN', 'LOUNGE', 'ROOM', 'BATHROOM', 'GARDEN', 'DINING ROOM'],
        required: true
    },
    //TO DO: METER LOS DEVICES

    deletedAt: {type:Date},
    houseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'House'
    },
},
    {timestamps:true}
);

module.exports = mongoose.model('Room', roomSchema);