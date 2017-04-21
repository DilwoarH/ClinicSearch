var express = require('express')
var app = express()

require('./controllers/ClinicsController')

app.get('/clinics/city/:name', function (req, res) {

    console.log(req.params.name);

    x = new ClinicsController();

    res.send(x.get());
})

app.listen(3000, function () {
  console.log('Application listening on port 3000! Go to http://localhost:3000.')
})