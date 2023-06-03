var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema= new Schema({
    name: String,
    deviceType: {
        type: String,
        enum: ['lightbulb', 'blinders', 'temperature', 'furniture'],
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['On', 'Off']
    },
    data: {},
    roomId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },

    deletedAt: {type: Date}
},
    { timestamps : true }
);

module.exports = mongoose.model('Device', deviceSchema);