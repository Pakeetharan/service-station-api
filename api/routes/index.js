var express = require('express');
var router = express.Router();

router.get('/', function(req, res){    
    res.send("Welcome to service station API !");
});

require('./AuthRoutes')(router);
require('./AdminRoutes')(router);
require('./CustomerRoutes')(router);
require('./SeviceAgentRoutes')(router);

module.exports.router = router;