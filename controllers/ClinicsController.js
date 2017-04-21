require('../services/ClinicsService')

module.exports = ClinicsController = (function() {
  function ClinicsController() {}

  ClinicsController.prototype.getClinicsByLocationName = ( Location ) => {

      return new Promise((resolve, reject) => {

          var _clinicsService     = new ClinicsService();

          return _clinicsService.getClinics( Location )
          .then( ( res ) => {
            resolve( res );
          });

        
      });
  };

  return ClinicsController;

})();