var mongoose = require('mongoose');
const Category = require('../enums/Category');
require("dotenv").config();


var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
    serviceName: {
        type: String,
        required: [true, 'Username field is required!']
      
    },
    category: {
        type: String,
        enum: Category,
        required: [true, 'Username field is required!']
    },
    description: {
        type: String,
        required: [true, 'Username field is required!']
      
    },
    price: {
        type: String,
        required: [true, 'Username field is required!']
      
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
const Service = mongoose.model('Service', ServiceSchema);
module.exports = { Service }