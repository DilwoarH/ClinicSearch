var http = require('http')
require('../services/ClinicsService')

module.exports = ClinicsController = (function() {
  function ClinicsController() {}

  ClinicsController.prototype.get = function() {
      var _clinicsService     = new ClinicsService();
      var clinicsApiResponse  = _clinicsService.getClinics('Loxndon');
      
      console.log(clinicsApiResponse);
      return 'fdssd';
  };

  return ClinicsController;

})();