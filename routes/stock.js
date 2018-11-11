const express = require('express');

const router = express.Router();

const indexController = require('../controllers/indexController');

router.post('/new/product', indexController.create);
router.put('/update/product/:id', indexController.update);
router.delete('/delete/product/:id', indexController.delete);

module.exports = router;
