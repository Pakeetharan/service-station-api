var mongoose = require('mongoose');
const Category = require('../enums/Category');
require("dotenv").config();


var Schema = mongoose.Schema;

var ServiceRecordSchema = new Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'User field is required!']

    },
    vehicle_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: [true, 'User field is required!']

    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'User field is required!']

    },
    category: {
        type: String,
        enum: Category,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
const ServiceRecord = mongoose.model('ServiceRecord', ServiceRecordSchema);
module.exports = { ServiceRecord }