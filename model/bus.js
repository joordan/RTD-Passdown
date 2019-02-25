var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bus = new Schema({
	busNumber : Number,
	date : Date,
	noPart: {type: Boolean, default: false},
	reason : String,
	description : String,
});

module.exports = mongoose.model('Bus', bus);
	