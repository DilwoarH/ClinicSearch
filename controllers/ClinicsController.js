var http = require('http')
require('../services/ClinicsService')

module.exports = ClinicsController = (function() {
  function ClinicsController() {}

  ClinicsController.prototype.get = function( Location ) {

      return new Promise((resolve, reject) => {

          var _clinicsService     = new ClinicsService();

          return _clinicsService.getClinics( Location )
          .then( function( res ){
            resolve( res );
          });

        
      });

      
  };

  return ClinicsController;

})();