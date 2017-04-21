var _ = require('lodash');
require('../services/ClinicsService');

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

    res = JSON.parse(res);

    var transformedResponse = {
      status: "success", // result status
      results: {}, //an object with all the partial_postcodes found on the results and how many of them where found
      total: 0 //the total number of different partial_postcodes found
    };

    for( i in res.result )
    {
      var clinic = res.result[i];

      if ( _.isUndefined( transformedResponse.results[clinic.partial_postcode] ) )
      {
          transformedResponse.results[clinic.partial_postcode] = 1;
      }
      else
      {
          transformedResponse.results[clinic.partial_postcode]++;
      }

    }

    transformedResponse.total = _.size( transformedResponse.results );

    return transformedResponse;
  };

  return ClinicsController;

})();