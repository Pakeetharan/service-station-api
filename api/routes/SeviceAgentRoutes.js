module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { ServiceAgent } = require("../middleware/serviceAgent");

    const ServiceAgentController = require("../controllers/ServiceAgentController")

    app.post("/createServiceRecord", [Auth, ServiceAgent], ServiceAgentController.createServiceRecord);
    app.put("/updateServiceRecord/:id", [Auth, ServiceAgent], ServiceAgentController.updateServiceRecord);
    app.delete("/deleteServiceRecord/:id", [Auth, ServiceAgent], ServiceAgentController.deleteServiceRecord);
    app.get("/searchServiceRecord/:id", [Auth, ServiceAgent], ServiceAgentController.searchServiceRecord);
    app.get("/getAllServiceRecords", [Auth, ServiceAgent], ServiceAgentController.getAllServiceRecords);


    app.get("/getServiceRecordByVehicleId/:id", [Auth, ServiceAgent], ServiceAgentController.getServiceRecordByVehicleId);
    app.get("/getVehicleByCustomerId/:id", [Auth, ServiceAgent], ServiceAgentController.getVehicleByCustomerId);
    app.get("/getCustomerByNic", [Auth, ServiceAgent], ServiceAgentController.searchCustomer);
    app.put("/updateAppointment/:id", [Auth, ServiceAgent], ServiceAgentController.updateAppointment);
    app.get("/getAllAppointments", [Auth, ServiceAgent], ServiceAgentController.getAllAppointments);
    app.get("/searchDailyAppointments", [Auth, ServiceAgent], ServiceAgentController.searchDailyAppointments);


   
};