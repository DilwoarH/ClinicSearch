require('../services/ClinicsService')

module.exports = ClinicsController = (function() {
  function ClinicsController() {}

  ClinicsController.prototype.getClinicsByLocationName = function( location ) {

      var _this = this;

      return new Promise(function(resolve, reject){

          var _clinicsService     = new ClinicsService();

          return _clinicsService.getClinics( location )
          .then( ( res ) => {
            var transformedResponse = _this.transformResponse( res );
            resolve(transformedResponse);
          })
          .catch( (err) => {

            var _errMessage = { 
              status: "error", 
              message: err.message 
            };


            resolve( _errMessage );
          });

        
      });
  };

  ClinicsController.prototype.transformResponse = ( res ) => {

    var transformedResponse = {
      results: {},
      total: 0
    };

    

    return res;
  };

  return ClinicsController;

})();