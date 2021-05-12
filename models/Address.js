const mongoose = require("mongoose");;

const AddressSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userContact: {
        type: String,
        unique: true,
        required: true,
    }
});

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;