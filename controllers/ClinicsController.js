var _ = require('lodash');
require('../services/ClinicsService');

module.exports = ClinicsController = (function() {

  /********************************
          ClinicsController
  ********************************/
  function ClinicsController() {}

  /*********************************
      @function getClinicsByLocationName
      @param String Location
      @return Promise

      Logic:
        -> create Promise
        -> call ClinicService
        -> transform results and resolve promise
        -> if error occurs
          -> return error message
  *********************************/
  ClinicsController.prototype.getClinicsByLocationName = function( location ) {

      var _this = this;

      return new Promise(function(resolve, reject){

          var _clinicsService     = new ClinicsService();

          return _clinicsService.getClinics( location )
          .then( ( res ) => {
            
            if ( !_.isObject( res.body ) || res.status === "error" )
            {
                throw new Error(res.message);
            }

            var transformedResponse = _this.transformResponse( res.body );
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

  /*********************************
      @function transformResponse
      @param String
      @return Object

      Logic:
        -> JSON parse response
        -> Foreach res.result
          -> check if partial postcode is already in the results
            -> if in results add 1 to count
            -> if not add in new result with value of 1
        -> add in total count of unique parital postcodes
        -> return transformed results
  *********************************/
  ClinicsController.prototype.transformResponse = ( res ) => {
    var transformedResponse = {
      status: "success", // result status
      results: {}, //an object with all the partial_postcodes found on the results and how many of them where found
      total: 0 //the total number of different partial_postcodes found
    };

    for( i in res.result )
    {
      var clinic = res.result[i];

      if ( _.isUndefined( transformedResponse.results[ clinic.partial_postcode ] ) )
      {
          transformedResponse.results[ clinic.partial_postcode ] = 1;
      }
      else
      {
          transformedResponse.results[ clinic.partial_postcode ]++;
      }

    }

    transformedResponse.total = _.size( transformedResponse.results );

    return transformedResponse;
  };

  return ClinicsController;

})();