const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	produto: String,
	description: String,
	userId: String,
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('stock', Schema);
