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
        -> transform results and resolve promise
        -> if error occurs
          -> return error message
  *********************************/
  HealthCheckController.prototype.performHealthCheck = function() {

      var _this = this;

      return new Promise(function(resolve, reject){

          var _clinicsService     = new ClinicsService();

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
              time: err.time
            };

            resolve( _errMessage );
          });

      });
  };

  return HealthCheckController;

})();