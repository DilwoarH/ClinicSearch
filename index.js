var express = require('express'); // require express module
var app = express(); // set express function to app variable

require('./controllers/ClinicsController'); // require clinics controller
require('./controllers/HealthCheckController'); // require healthcheck controller

// handles the data route /clinics/city/{city_name}
app.get('/clinics/city/:name', (req, res) => {

    // intialises instance of clinicsController
    var _clinicsController =  new ClinicsController();

    // calls getClinicsByLocationName with location name
    _clinicsController.getClinicsByLocationName( req.params.name )
    .then( ( response ) => {
      res.send( response ); // returns response
    });
    
});

// handles the healthcheck route
app.get('/healthcheck', (req, res) => {

    // intialises instance of HealthCheckController
    var _healthCheckController =  new HealthCheckController();
    
    // performs healthcheck
    _healthCheckController.performHealthCheck()
    .then( ( response ) => {
      res.send( response ); // returns response
    });
    
});

// sets app to listen to port 3000
app.listen(3000, () => {
  console.log('Application listening on port 3000! Go to http://localhost:3000/healthcheck.')
});