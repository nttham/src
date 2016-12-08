var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for all the required credentials of APNS, GCM and WNS Push notification
var SettingsSchema = new Schema({
    gcmapikey		        : String,
    apnspassword	        : String,
    apnscertificate	        : String,
    isproduction            : Boolean,
    wnsclientid             : String,
    wnsclientsecret         : String,
    sendgridaccountid       : String,
    sendgridaccounttoken    : String,
    twilioaccountid         : String,
    twilioaccounttoken      : String,
    twiliofromnumber        : String,
    instanceid              : String
});

module.exports = SettingsSchema;