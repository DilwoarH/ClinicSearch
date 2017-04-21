var http = require('http')
require('../services/ClinicsService')

module.exports = ClinicsController = (function() {
  function ClinicsController() {}

  ClinicsController.prototype.get = function( Location ) {
      var _clinicsService     = new ClinicsService();
      var clinicsApiResponse  = _clinicsService.getClinics( Location );      
      return clinicsApiResponse;
  };

  return ClinicsController;

})();