const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
require('./db/mongoose');
const questionRouter = require('./routers/question');

const app = express();

// parse incoming info to an object
app.use(cors());
app.use(bodyParser.json());

app.use(questionRouter);

module.exports = app