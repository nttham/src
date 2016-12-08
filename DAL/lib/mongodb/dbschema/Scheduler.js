/**
 * Created by cognizant on 14/10/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for instance details. For checking apiKey security and fetching the db instance details
var SchedulerSchema = new Schema({
    notificationid		: String,
    status			    : String,
    requestobject	    : String,
    timestamp           :String,
    body                 :String
});

module.exports = SchedulerSchema;