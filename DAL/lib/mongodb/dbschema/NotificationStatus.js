/**
 * Created by Srividya on 11/10/16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Channels schema
var statusSchema = mongoose.Schema({
    message		    : String,
    devicetoken     : Array,
    settings        : String,
    template        : String,
    dbName          : String,
    numberoftrails  : String,
    lastupdated     : Date,
    platform        : String,
    status          : String,
    transcationid   : String,
    channelname     : String
});

module.exports = statusSchema;
