var http = require('http')
var config = require('../config')

module.exports = ClinicsService = (function() {
  function ClinicsService() {}

  ClinicsService.prototype.getClinics = ( Location ) => {

      return new Promise(function(resolve, reject) {

          var result = {result: "success"};

          resolve(result);
        
      });
  };

  ClinicsService.prototype.makeRequest = function( url, options, callback )
  {

  };

  return ClinicsService;

})();