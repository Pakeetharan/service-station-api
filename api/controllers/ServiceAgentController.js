// app.post("/createServiceRecord", [Auth, ServiceAgent], ServiceAgentController.createAdmin);
//     app.put("/updateServiceRecord/:id", [Auth, ServiceAgent], ServiceAgentController.updateAdmin);
//     app.delete("/deleteServiceRecord/:id", [Auth, ServiceAgent], ServiceAgentController.deleteAdmin);
//     app.get("/searchServiceRecord/:id", [Auth, ServiceAgent], ServiceAgentController.searchAdmin);
//     app.get("/getAllServiceRecords", [Auth, ServiceAgent], ServiceAgentController.getAllAdmin);

const { Appointment } = require("../models/Appointment");
const { ServiceRecord } = require("../models/ServiceRecordModel");
const { User } = require("../models/UserModel");
const { Vehicle } = require("../models/VehicleModel");

exports.createServiceRecord = async (req, res) => {
    var newServiceRecord = new ServiceRecord(req.body);

    await newServiceRecord.save((err, serviceRecord) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create serviceRecord!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New serviceRecord tag is created!",
                data: serviceRecord
            });
        }
    });
};
exports.searchServiceRecord = async (req, res) => {
    await ServiceRecord.findById(req.params.id, async function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid serviceRecord id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid serviceRecord id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "serviceRecord received!",
            data: serviceRecord
        });
    });
};

exports.updateServiceRecord = async (req, res) => {
    await ServiceRecord.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid serviceRecord id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid serviceRecord id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "serviceRecord updated!",
            data: serviceRecord
        });
    });
};

exports.deleteServiceRecord = async (req, res) => {
    await ServiceRecord.remove({_id: req.params.id}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid serviceRecord id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "serviceRecord deleted!"
        });
    });
};

exports.getAllServiceRecords = async (req, res) => {
    await ServiceRecord.find(function(err, serviceRecords) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive serviceRecords!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received serviceRecords!",
            data: serviceRecords
        });
    });
};



exports.getServiceRecordByVehicleId = async (req, res) => {
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
                message: "records not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "records received!",
            data: records
        });
    });
    
};



exports.getVehicleByCustomerId = async (req, res) => {
    await Vehicle.find({ customer_id: req.params.id }, async function (err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!vehicle) {
            return res.status(422).json({
                success: false,
                message: "vehicles not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicles received!",
            data: vehicle
        });
    });
    
};

exports.searchCustomer = async (req, res) => {

    await User.findOne({ nicNumber: req.body.nicNumber, role: "CUSTOMER" }, async function (err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!user) {
            return res.status(422).json({
                success: false,
                message: "User not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "User received!",
            data: user
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


exports.getAllAppointments = async (req, res) => {
    await Appointment.find(function(err, appointments) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive appointments!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received appointments!",
            data: appointments
        });
    });
};

exports.searchDailyAppointments = async (req, res) => {
    await Appointment.find({ scheduled_date: Date.now }, async function (err, appointment) {
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


