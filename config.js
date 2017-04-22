module.exports = (function() {

    // initalise config object
    var config = {
        clinicService: {
            url: "https://data.gov.uk/data/api/service/health/clinics?city=" // url for data api
        }
    };

    return config; // return config object
})();