var express = require('express')
var app = express()

require('./controllers/ClinicsController')

app.get('/clinics/city/:name', function (req, res) {
    var _clinicsController =  new ClinicsController();
    var response           =  _clinicsController.get( req.params.name );
    res.send( response );
})

app.listen(3000, function () {
  console.log('Application listening on port 3000! Go to http://localhost:3000.')
})