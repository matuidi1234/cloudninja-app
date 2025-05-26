const express = require('express');
const logger = require('./middleware/logger');
const routes = require('./routes/api');

const app = express();

app.use(express.json());
app.use(logger);
app.use(express.static('public'));

app.use('/api', routes);

module.exports = app;
