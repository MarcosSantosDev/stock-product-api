const express = require('express');
const http = require('http');
const morgan = require('morgan');

const server = express();

const indexRouter = require('../routes/index');
const stockRouter = require('../routes/stock');

server.use(morgan('dev'));

server.set('port', process.env.PORT || 3000);

server.use('/', indexRouter);
server.use('/stock', stockRouter);

http.createServer(server).listen(server.get('port'), () => console.log(`Server running on http://localhost:${server.get('port')}`));
