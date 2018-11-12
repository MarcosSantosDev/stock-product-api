const Stock = require('../models/Stock');

module.exports = {
	index: async (req, res) => {
		try {
			await Stock.find({}, (err, products) => res.status(200).send({ products }));
		} catch (error) {
			res.status(500).send({
				message: 'Erro ao fazer busca no banco.',
			});
		}
	},
};
