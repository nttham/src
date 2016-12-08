/**
 * Created by Srividya on 21/07/16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Channels schema
var channelSchema = mongoose.Schema({
    channelname		    : String,
    deviceid		    : String,
    channeldescription	: String
});

module.exports = channelSchema;
