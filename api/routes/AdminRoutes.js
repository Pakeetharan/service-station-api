module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { Admin } = require("../middleware/admin");

    const AdminController = require("../controllers/AdminController")

    app.post("/createAdmin", AdminController.createAdmin);
    app.put("/updateAdminBynic", [Auth, Admin], AdminController.updateAdmin);
    app.delete("/deleteAdminBynic", [Auth, Admin], AdminController.deleteAdmin);
    app.get("/searchAdminBynic", [Auth, Admin], AdminController.searchAdmin);
    app.get("/getAllAdmin", [Auth, Admin], AdminController.getAllAdmin);

    app.post("/createAgent", [Auth, Admin], AdminController.createAgent);
    app.put("/updateAgentBynic", [Auth, Admin], AdminController.updateAgent);
    app.delete("/deleteAgentBynic", [Auth, Admin], AdminController.deleteAgent);
    app.get("/searchAgentBynic", [Auth, Admin], AdminController.searchAgent);
    app.get("/getAllAgent", [Auth, Admin], AdminController.getAllAgent);

    app.put("/updateCustomer", [Auth, Admin], AdminController.updateCustomer);
    app.delete("/deleteCustomerBynic", [Auth, Admin], AdminController.deleteCustomer);
    app.get("/searchCustomerBynic", [Auth, Admin], AdminController.searchCustomer);
    app.get("/getAllCustomers", [Auth, Admin], AdminController.getAllCustomers);

    app.put("/updateVehicle", [Auth, Admin], AdminController.updateVehicle);
    app.delete("/deleteCustomerByPlate", [Auth, Admin], AdminController.deleteVehicle);
    app.get("/searchCustomerByPlate", [Auth, Admin], AdminController.searchVehicle);
    app.get("/getAllVehicles", [Auth, Admin], AdminController.getAllVehicles);


    app.get("/getAllserviceRecords", [Auth, Admin], AdminController.getAllServiceRecords);
    app.get("/getServiceRecordById/:id", [Auth,Admin], AdminController.getServiceRecordById);
    app.put("/updateServiceRecord/:id", [Auth, Admin], AdminController.updateServiceRecord);
    app.delete("/deleteServiceRecord/:id", [Auth, Admin], AdminController.deleteServiceRecord);

    app.post("/createService", [Auth, Admin], AdminController.createService);
    app.get("/getServiceById/:id", [Auth,Admin], AdminController.searchService);
    app.put("/updateService/:id", [Auth, Admin], AdminController.updateService);
    app.delete("/deleteService/:id", [Auth, Admin], AdminController.deleteService);
    app.get("/getAllservice", [Auth, Admin], AdminController.getAllServices);


   
};