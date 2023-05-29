const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const {
  apiRouter,
  errorRouter: { err400, err500 },
} = require('./service');

require('./connect')();
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', apiRouter);

app.use(err400);
app.use(err500);

module.exports = app;
