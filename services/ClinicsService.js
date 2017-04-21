var http = require('request-promise-native')
var config = require('../config')

module.exports = ClinicsService = (function() {
  function ClinicsService() {}

  ClinicsService.prototype.getClinics = ( location ) => {
      return http( config.clinicService.url + location );
  };
  
  return ClinicsService;

})();