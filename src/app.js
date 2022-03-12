const express = require('express');
const { createConnection } = require('typeorm');

const app = express();
createConnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes = require('./routes/index');

app.use(routes);

module.exports = app;