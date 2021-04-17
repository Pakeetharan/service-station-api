const { Service } = require("../models/ServiceModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");
const { User } = require("../models/UserModel");
const { Vehicle } = require("../models/VehicleModel");



exports.createService = async (req, res) => {
    var newService = new Service (req.body);

    await newService.save((err, service) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create service!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New service is created!",
                data: service
            });
        }
    });
};
exports.searchService = async (req, res) => {
    await Service.findById(req.params.id, async function(err, service) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "service received!",
            data: serviceRecord
        });
    });
};

exports.updateService = async (req, res) => {
    await Service.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, service) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        if(!service) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "service updated!",
            data: service
        });
    });
};

exports.deleteService = async (req, res) => {
    await Service.remove({_id: req.params.id}, function(err, service) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "service deleted!"
        });
    });
};

exports.getAllServices = async (req, res) => {
    await Service.find(function(err, services) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive services!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received services!",
            data: services
        });
    });
};

exports.createAdmin = (req, res) => {

    if (req.body.role != "ADMIN") {
        return res.status(435).json({
            success: false,
            message: "Please enter role correctly !",
        });
    } else {
        User.findOne({ nicNumber: req.body.nicNumber, role: "ADMIN" }, async function (err, customer) {
            if (err) {
                return res.status(422).json({
                    success: false,
                    message: "Something went wrong!"
                });
            }

            else if (!customer) {
                const user = new User(req.body);
                user.save((err, doc) => {
                    if (err) {
                        return res.status(422).json({
                            success: false,
                            message: "Please enter unique email & username!",
                            data: err
                        });
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: "Successfully Signed Up!"
                        });
                    }
                });
            } else {
                return res.status(422).json({
                    success: false,
                    message: "Already exists!",

                });
            }

        });

    }

};

exports.updateAdmin = async (req, res) => {

    await User.findOneAndUpdate({ nicNumber: req.body.nicNumber, role: "ADMIN" }, req.body, { new: true }, function (err, admin) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong !"
            });
        }

        if (!admin) {
            return res.status(422).json({
                success: false,
                message: "Admin not exists !"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Admin updated !",
            data: admin
        });
    });

};
exports.deleteAdmin = async (req, res) => {

    await User.findOneAndRemove({ nicNumber: req.body.nicNumber, role: "ADMIN" }, function (err, admin) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Admin not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Admin deleted!"
        });
    });

};
exports.searchAdmin = async (req, res) => {

    await User.findOne({ nicNumber: req.body.nicNumber, role: "ADMIN" }, async function (err, admin) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!admin) {
            return res.status(422).json({
                success: false,
                message: "Admin not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Admin received!",
            data: admin
        });
    });

};
exports.getAllAdmin = async (req, res) => {

    await User.find({ role: 'ADMIN' }, async function (err, admins) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!admins) {
            return res.status(422).json({
                success: false,
                message: "No admins exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Admins received!",
            data: admins
        });
    });
};

exports.createAgent = (req, res) => {
    if (req.body.role != "SERVICEAGENT") {
        return res.status(435).json({
            success: false,
            message: "Please enter role correctly !",
        });
    } else {
        User.findOne({ nicNumber: req.body.nicNumber, role: "SERVICEAGENT" }, async function (err, customer) {
            if (err) {
                return res.status(422).json({
                    success: false,
                    message: "Something went wrong!"
                });
            }

            else if (!customer) {
                const user = new User(req.body);
                user.save((err, doc) => {
                    if (err) {
                        return res.status(422).json({
                            success: false,
                            message: "Please enter unique email & username!",
                            data: err
                        });
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: "Successfully Signed Up!"
                        });
                    }
                });
            } else {
                return res.status(422).json({
                    success: false,
                    message: "Already exists!",

                });
            }

        });





    }
};
exports.updateAgent = async (req, res) => {

    await User.findOneAndUpdate({ nicNumber: req.body.nicNumber, role: "SERVICEAGENT" }, req.body, { new: true }, function (err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong !"
            });
        }

        if (!user) {
            return res.status(422).json({
                success: false,
                message: "Agent not exists !"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Agent updated !",
            data: user
        });
    });

};
exports.deleteAgent = async (req, res) => {

    await User.remove({ nicNumber: req.body.nicNumber, role: "SERVICEAGENT" }, function (err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Agent not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Agent deleted!"
        });
    });

};
exports.searchAgent = async (req, res) => {

    await User.findOne({ nicNumber: req.body.nicNumber, role: "SERVICEAGENT" }, async function (err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!user) {
            return res.status(422).json({
                success: false,
                message: "Agent not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Agent received!",
            data: user
        });
    });

};
exports.getAllAgent = async (req, res) => {

    await User.find({ role: 'SERVICEAGENT' }, async function (err, users) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!users) {
            return res.status(422).json({
                success: false,
                message: "No agent exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Agents received!",
            data: users
        });
    });
};


exports.updateCustomer = async (req, res) => {

    await User.findOneAndUpdate({ nicNumber: req.body.nicNumber, role: "CUSTOMER" }, req.body, { new: true }, function (err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong !"
            });
        }

        if (!user) {
            return res.status(422).json({
                success: false,
                message: "User not exists !"
            });
        }

        return res.status(422).json({
            success: true,
            message: "User updated !",
            data: user
        });
    });

};
exports.deleteCustomer = async (req, res) => {

    await User.remove({ nicNumber: req.body.nicNumber, role: "CUSTOMER" }, function (err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "User not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "User deleted!"
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
exports.getAllCustomers = async (req, res) => {

    await User.find({ role: 'CUSTOMER' }, async function (err, users) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!users) {
            return res.status(422).json({
                success: false,
                message: "No customers exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Customers received!",
            data: users
        });
    });
};


exports.updateVehicle = async (req, res) => {

    await Vehicle.findOneAndUpdate({ numberPlate: req.body.nuberPlate}, req.body, { new: true }, function (err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong !"
            });
        }

        if (!vehicle) {
            return res.status(422).json({
                success: false,
                message: "vehicle not exists !"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicle updated !",
            data: vehicle
        });
    });

};
exports.deleteVehicle = async (req, res) => {

    await Vehicle.remove({ numberPlate: req.body.nuberPlate}, function (err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "User not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "User deleted!"
        });
    });

};
exports.searchVehicle = async (req, res) => {

    await Vehicle.findOne({ numberPlate: req.body.nuberPlate}, async function (err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Something went wrong!"
            });
        }

        if (!vehicle) {
            return res.status(422).json({
                success: false,
                message: "vehicle not exists!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "vehicle received!",
            data: vehicle
        });
    });

};
exports.getAllVehicles = async (req, res) => {

    await Vehicle.find( function (err, vehicles) {
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

exports.getServiceRecordById = async (req, res) => {
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
            data: services
        });
    });
};
