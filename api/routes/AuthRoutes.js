module.exports = function(app) {

    const AuthController = require("../controllers/AuthController");

    app.post("/registerCustomer", AuthController.registerCustomer);
    app.post("/login", AuthController.loginUser);
};