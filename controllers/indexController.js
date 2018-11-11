const Stock = require('../models/Stock');

exports.index = async (req, res) => {
	try {
		await Stock.find({}, (err, data) => {
			res.status(200).send({
				message: 'success',
				product: data,
			});
		});
	} catch (error) {
		res.status(500).send({
			message: 'Erro ao fazer busca no banco.',
		});
	}
};

exports.create = async (req, res) => {
	try {
		const product = await new Stock(req.body);

		product.save();

		res.status(200).send({
			message: 'success',
			product,
		});
	} catch (error) {
		res.status(500).send({
			message: 'Error while trying to add new product!',
			error,
		});
	}
};

exports.update = async (req, res) => {
	try {
		const { product, description, userId } = req.body;

		const data = await Stock.findByIdAndUpdate({ _id: req.params.id },
			{
				$set: {
					product,
					description,
					userId,
				},
			});

		data.save();

		res.status(200).send({
			message: 'success',
			product,
		});
	} catch (error) {
		res.status(500).send({
			message: 'Error while trying to add new product!',
			error,
		});
	}
};

exports.delete = async (req, res) => {
	try {
		const product = await Stock.findOneAndDelete({ _id: req.params.id });

		res.status(200).send({
			message: 'Product deleted successfully!',
			product,
		});
	} catch (err) {
		res.status(500).send({
			message: 'Error while trying to remove product!',
		});
	}
};
