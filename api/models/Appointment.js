var mongoose = require('mongoose');
const Category = require('../enums/Category');
const Status = require('../enums/Status');
require("dotenv").config();


var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({

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
        required: [true, 'User field is required!']
    },
    status: {
        type: String,
        enum: Status,
        required: [true, 'User field is required!']
    },
    scheduled_date: {
        type: Date,
        required: [true, 'User field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = { Appointment }