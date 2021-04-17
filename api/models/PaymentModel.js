var mongoose = require('mongoose');
const Category = require('../enums/Category');
const PaymentStatus = require('../enums/PaymentStatus');
const Status = require('../enums/Status');
require("dotenv").config();


var Schema = mongoose.Schema;

var paymentSchema = new Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'User field is required!']

    },
    appointment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: [true, 'User field is required!']

    },
    status: {
        type: String,
        enum: PaymentStatus,
        required: [true, 'User field is required!']
    },
    price: {
        type: String,
        required: [true, 'Username field is required!']
      
    },
    paid_date: {
        type: Date,
        default: Date.now
    }
});
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = { Payment }