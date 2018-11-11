const express = require('express');
const http = require('http');
const morgan = require('morgan');

const server = express();

const indexRouter = require('../routes/index');

server.use(morgan('dev'));

server.set('port', process.env.PORT || 3000);

server.get('/', indexRouter);

http.createServer(server).listen(server.get('port'), () => console.log(`Server running on http://localhost:${server.get('port')}`));
