const express = require('express');
const cors = require('cors');
const { createConnection } = require('typeorm');

const app = express();
createConnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const routes = require('./routes/index');

app.use(routes);

module.exports = app;