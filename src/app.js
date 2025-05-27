const express = require('express');
const logger = require('./middleware/logger');
const apiRoutes = require('./routes/api');

const app = express();

app.use(express.json());
app.use(logger);
app.use(express.static('public'));

app.use('/api', apiRoutes);

module.exports = app;
