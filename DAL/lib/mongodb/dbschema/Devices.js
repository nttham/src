var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Device details schema
var DeviceSchema = new Schema({
    deviceid		: String,
    userid			: String,
    devicetoken		: String,
    platform		: String,
    createdtime		: Date,
    lastupdatedtime	: Date,
    createdmode		: String,
    isblacklisted   : Boolean,
    version         : Number
});

module.exports = DeviceSchema;
