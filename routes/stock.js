const express = require('express');

const router = express.Router();

const stockController = require('../controllers/stockController');

router.post('/product', stockController.create);
router.put('/product/:id', stockController.update);
router.delete('/product/:id', stockController.delete);

module.exports = router;
