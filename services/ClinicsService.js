var request = require('request-promise-native') // requires request-promise-native library
var config = require('../config') // gets config

module.exports = ClinicsService = (function() {
  /********************************
          ClinicsService
  ********************************/
  function ClinicsService() {}

  /*********************************
      @function getClinics
      @param STRING location - default ""
      @return Promise

      Logic:
        -> create HTTP GET Request
        -> call DATA API with location parameter
        -> return Promise

  *********************************/
  ClinicsService.prototype.getClinics = ( location = "" ) => {
      
      // returns request promise
      return request({
        method: "GET", // sets method to GET
        url: config.clinicService.url + location, // url made up with data api, path and location parameter
        json: true, // transforms response from JSON to JS object
        resolveWithFullResponse: true, // returns full object including statistics
        time: true // returns timing stats
      });
  };

  return ClinicsService;

})();