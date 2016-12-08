//to get VCAP configuration values.
exports.getVCAPConfigurations = function(callback) {
    var configObj = {};
    if(process.env.VCAP_APPLICATION) {
        configObj.vcapapp = JSON.parse(process.env.VCAP_APPLICATION);
        configObj.DMS = JSON.parse(process.env.VCAP_APPLICATION).DMS;
    }
    configObj.analyticsURL = "http://dataflow-pushnotification-http.apps.digifabric.cognizant.com/";//JSON.parse(process.env.VCAP_APPLICATION).DMS.analyticsURL;
    callback(null,configObj);
}