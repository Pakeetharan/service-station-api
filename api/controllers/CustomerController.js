
const { Appointment } = require("../models/Appointment");
const { ServiceRecord } = require("../models/ServiceRecordModel");
const { User } = require("../models/UserModel");
const { Vehicle } = require("../models/VehicleModel");

exports.createAppointment = async (req, res) => {
    var newAppointment = new Appointment(req.body);

    newAppointment.customer_id = req.user.id;

    await newAppointment.save((err, appointment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create appointment!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New appointment is created!",
                data: appointment
            });
        }
    });
};


exports.getMyAllAppointments = async (req, res) => {
    await Appointment.find({ customer_id: req.user._id }, async function (err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong !"
            });
        }

        if (!appointment) {
            return res.status(422).json({
                success: false,
                message: "No Appointment for today !"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Appointment received!",
            data: appointment
        });
    });
};
exports.updateAppointment = async (req, res) => {
    await Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        if(!appointment) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "appointment updated!",
            data: appointment
        });
    });
};

exports.deleteAppointment= async (req, res) => {
    await Appointment.remove({_id: req.params.id}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "appointment deleted!"
        });
    });
};




exports.createVehicle = async (req, res) => {
    var newVehicle = new Vehicle(req.body);

    await newVehicle.save((err, vehicle) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create vehicle!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New vehicle is created!",
                data: vehicle
            });
        }
    });
};

exports.updateVehicle = async (req, res) => {
    await Vehicle.findOneAndUpdate({ numberPlate: req.body.numberPlate}, req.body, {new: true}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        if(!vehicle) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicle updated!",
            data: vehicle
        });
    });
};

exports.deleteVehicle = async (req, res) => {

    await Vehicle.findOneAndRemove({ numberPlate: req.body.numberPlate}, function (err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "vehicle not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicle deleted!"
        });
    });

};
exports.searchVehicle = async (req, res) => {

    await Vehicle.findOne({ numberPlate: req.body.numberPlate}, async function (err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!vehicle) {
            return res.status(422).json({
                success: false,
                message: "Admin not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicle received!",
            data: vehicle
        });
    });

};
exports.getAllVehicle = async (req, res) => {

    await Vehicle.find({ customer_id: req.user._id }, async function (err, vehicles) {
        console.log(req.user._id);
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!vehicles) {
            return res.status(422).json({
                success: false,
                message: "No vehicles exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicles received!",
            data: vehicles
        });
    });
};


exports.getAllServiceREcordsToVehicle = async (req, res) => {

    await ServiceRecord.find({ vehicle_id: req.params.id }, async function (err, records) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!records) {
            return res.status(422).json({
                success: false,
                message: "No records exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "records received!",
            data: records
        });
    });
};













