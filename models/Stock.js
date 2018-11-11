const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	produto: String,
	description: String,
	user_id: String,
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('stock', Schema);
