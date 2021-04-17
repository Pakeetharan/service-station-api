module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { Customer } = require("../middleware/customer");

    const CustomerController = require("../controllers/CustomerController")

    app.post("/createAppointment", [Auth, Customer], CustomerController.createAppointment);
    app.get("/getMyAllAppointments", [Auth, Customer], CustomerController.getMyAllAppointments);
    app.put("/updateAppointment/:id", [Auth, Customer], CustomerController.updateAppointment);
    app.delete("/deleteAppointment/:id", [Auth, Customer], CustomerController.deleteAppointment);

    app.post("/createVehicle", [Auth, Customer], CustomerController.createVehicle);
    app.put("/updateVehicle", [Auth, Customer], CustomerController.updateVehicle);
    app.delete("/deleteVehicle", [Auth, Customer], CustomerController.deleteVehicle);
    app.get("/searchVehicle", [Auth, Customer], CustomerController.searchVehicle);
    app.get("/getAllVehicle", [Auth, Customer], CustomerController.getAllVehicle);
    app.get("/getAllServiceREcordsToVehicle/:id", [Auth, Customer], CustomerController.getAllServiceREcordsToVehicle);
    


   
};