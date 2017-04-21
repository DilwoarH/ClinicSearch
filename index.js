var express = require('express');
var app = express();

require('./controllers/ClinicsController');

app.get('/clinics/city/:name', (req, res) => {
    var _clinicsController =  new ClinicsController();
    
    _clinicsController.getClinicsByLocationName( req.params.name )
    .then( ( response ) => {
      res.send( response );
    });
    
});

app.listen(3000, () => {
  console.log('Application listening on port 3000! Go to http://localhost:3000.')
});