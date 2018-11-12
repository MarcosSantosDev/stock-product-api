const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	product: String,
	description: String,
	price: String,
	userId: String,
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('stock', Schema);
