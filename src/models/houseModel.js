var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true
        },
        district: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        country: {
            type: String
        }
    },
    size: {
        type: Number
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

},
    { timestamps : true}
)

module.exports = mongoose.model('House', houseSchema);