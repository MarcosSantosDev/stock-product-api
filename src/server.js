const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRouter = require('../routes/index');
const stockRouter = require('../routes/stock');

const server = express();

mongoose.connect('mongodb://localhost/stockproject').then(() => console.log('Connected database !')).catch(err => console.log(err));

const port = process.env.PORT || 3000;

server.use(morgan('dev'));

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({ extended: false }));

server.use('/', indexRouter);
server.use('/stock', stockRouter);

http.createServer(server).listen(port, () => console.log(`Server running on http://localhost:${port}`));
