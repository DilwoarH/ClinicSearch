require('../services/ClinicsService'); // adds clinics service JS
var config = require('../config'); // gets configs

module.exports = HealthCheckController = (function() {

  /********************************
          HealthCheckController
  ********************************/
  function HealthCheckController() {}

  /*********************************
      @function performHealthCheck
      @return Promise

      Logic:
        -> create Promise
        -> call ClinicService
        -> transform health response and respond
        -> catch healthcheck failures and respond

  *********************************/
  HealthCheckController.prototype.performHealthCheck = function() {

      // wraps calls around promise to allow request handling to be synchronous 
      return new Promise(function(resolve, reject){

          // create new instance of ClinicsService class
          var _clinicsService = new ClinicsService();

          // calls get clinics function to which calls the data API
          return _clinicsService.getClinics()
          .then( ( res ) => {
            
            // initalises response object
            var response = {
                service: config.clinicService.url, // adds in clinic url
                isHealthy: true,  // sets healthy status to true
                time: res.elapsedTime // gets elapsed time
            }; 

            // resolves with health check response stats
            resolve(response);
            
          })
          .catch( (err) => {

            // initalises error message object
            var _errMessage = {
              service: config.clinicService.url, // adds in clinic url
              isHealthy: false,  // sets healthy status to false as error has occured
              message: err.message, // returns with error message
              time: err.elapsedTime || null //timing may not be available on error
            };

            // resolves with error message
            resolve( _errMessage );
          });

      });
  };

  return HealthCheckController;

})();