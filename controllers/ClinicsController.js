var _ = require('lodash'); // requires lodash for _. functions
require('../services/ClinicsService'); // requires ClinicsService JS file

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

      // pointer for main scope
      var _this = this;

      // wraps calls around promise to allow request handling to be synchronous 
      return new Promise(function(resolve, reject){

          // create new instance of ClinicsService class
          var _clinicsService     = new ClinicsService();

          // calls get clinics function to which calls the data API
          return _clinicsService.getClinics( location )
          .then( ( res ) => {
            
            /* 
              this is to handle cases where ISPs intercept a "Host not found" / 
              DNS failure and respond with a 200 error and a HTTP response.
              (TESTED on BT Broadband)
            */
            if ( !_.isObject( res.body ) || res.status === "error" )
            {
                throw new Error(res.message); // throw error so catch functionality intercepts
            }

            var transformedResponse = _this.transformResponse( res.body ); // transform response to specification requirements
            resolve(transformedResponse); // resolve promise with transformed response
          })
          .catch( (err) => {

            // generate error message with status error
            var _errMessage = { 
              status: "error", // uses status error
              message: err.message  // send error message from caught error
            };

            resolve( _errMessage ); // resolve with error message
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
    
    // intialise transformed response object
    var transformedResponse = {
      status: "success", // result status
      results: {}, //an object with all the partial_postcodes found on the results and how many of them where found
      total: 0 //the total number of different partial_postcodes found
    };

    // loops through each results and picks out the partial postcode and adds it to the count
    for( i in res.result )
    {
      var clinic = res.result[i]; // stores object in local variable called clinic for readablity 

      // if postcode has not been counted yet then set initial count, else, add to existing count
      if ( _.isUndefined( transformedResponse.results[ clinic.partial_postcode ] ) )
      {
          transformedResponse.results[ clinic.partial_postcode ] = 1; // init from 1
      }
      else
      {
          transformedResponse.results[ clinic.partial_postcode ]++; // add 1 to existing count
      }

    }

    // count the number of unique postcode for total - specification requirements
    transformedResponse.total = _.size( transformedResponse.results );

    // return transformed response
    return transformedResponse;
  };

  return ClinicsController;

})();