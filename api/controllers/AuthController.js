const { ADMIN } = require("../enums/UserRole");
const { User } = require("../models/UserModel");

exports.registerCustomer = (req, res) => {

    if (req.body.role != "CUSTOMER") {
        return res.status(435).json({
            success: false,
            message: "Customer registration only!",
        });
    } else {
        User.findOne({ nicNumber: req.body.nicNumber, role: "CUSTOMER" }, async function (err, customer) {
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

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.status(404).json({ success: false, message: "User email not found!" });
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                //isMatch is eaither true or false
                if (!isMatch) {
                    return res.status(400).json({ success: false, message: "Wrong Password!" });
                } else {
                    user.generateToken((err, token) => {
                        if (err) {
                            return res.status(400).send({ 'success': false, message: err });
                        } else {
                            res.status(200).json({
                                success: true,
                                message: "Successfully Logged In!",
                                data: {
                                    "token": token
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

exports.getUserDetails = (req, res) => {
    res.json({ status: true, message: "User Received!", data: req.user });
};