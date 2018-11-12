const Stock = require('../models/Stock');

module.exports = {
	create: async (req, res) => {
		try {
			const product = new Stock(req.body);

			await product.save(() => res.status(200).send({ message: 'New product successfully added !' }));
		} catch (error) {
			res.status(500).send({
				message: 'Error while trying to add new product !',
				error,
			});
		}
	},
	update: async (req, res) => {
		try {
			const {
				product, description, price, userId,
			} = req.body;

			const response = await Stock.findByIdAndUpdate({ _id: req.params.id },
				{
					$set: {
						product,
						description,
						price,
						userId,
					},
				});

			response.save(() => res.status(200).send({ response }));
		} catch (error) {
			res.status(500).send({
				message: 'Error while trying to add new product !',
				error,
			});
		}
	},
	delete: async (req, res) => {
		try {
			const product = await Stock.findOneAndDelete({ _id: req.params.id });

			res.status(200).send({ product });
		} catch (err) {
			res.status(500).send({
				message: 'Error while trying to remove product !',
			});
		}
	},
};
