var express = require('express');
var app = express();

require('./controllers/ClinicsController');
require('./controllers/HealthCheckController');

app.get('/clinics/city/:name', (req, res) => {
    var _clinicsController =  new ClinicsController();
    
    _clinicsController.getClinicsByLocationName( req.params.name )
    .then( ( response ) => {
      res.send( response );
    });
    
});

app.get('/healthcheck', (req, res) => {
    var _healthCheckController =  new HealthCheckController();
    
    _healthCheckController.performHealthCheck()
    .then( ( response ) => {
      res.send( response );
    });
    
});

app.listen(3000, () => {
  console.log('Application listening on port 3000! Go to http://localhost:3000/.')
});