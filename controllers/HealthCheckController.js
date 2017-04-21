require('../services/ClinicsService');
var config = require('../config');

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

      return new Promise(function(resolve, reject){

          var _clinicsService = new ClinicsService();

          return _clinicsService.getClinics()
          .then( ( res ) => {
            
            var response = {
                service: config.clinicService.url,
                isHealthy: true,
                time: res.elapsedTime
            }; 

            resolve(response);
            
          })
          .catch( (err) => {

            var _errMessage = {
              service: config.clinicService.url,
              isHealthy: false, 
              message: err.message,
              time: err.elapsedTime || null //timing may not be available on error
            };

            resolve( _errMessage );
          });

      });
  };

  return HealthCheckController;

})();