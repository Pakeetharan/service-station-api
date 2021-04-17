var mongoose = require('mongoose');
require("dotenv").config();


var Schema = mongoose.Schema;

var VehicleModelSchema = new Schema({

    numberPlate: {
        type: String,
        required: [true, 'Name field is required!'],
        maxlength: 100
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'User field is required!']

    },
    vehicleType: {
        type: String,
        required: [true, 'Username field is required!']
      
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
const Vehicle = mongoose.model('Vehicle', VehicleModelSchema);
module.exports = { Vehicle }