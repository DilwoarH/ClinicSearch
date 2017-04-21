var request = require('request-promise-native')
var config = require('../config')

module.exports = ClinicsService = (function() {
  function ClinicsService() {}

  ClinicsService.prototype.getClinics = ( location = "" ) => {
      return request({
        method: "GET",
        url: config.clinicService.url + location,
        json: true,
        resolveWithFullResponse: true,
        time: true
      });
  };

  return ClinicsService;

})();