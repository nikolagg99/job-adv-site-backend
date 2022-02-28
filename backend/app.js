const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

// CORS HEADERS MIDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
  });

// Import all routes
const advertisements = require('./routes/advertisement');
const auth = require('./routes/auth');
const applications = require('./routes/application');

app.use('/API', advertisements);
app.use('/API', auth);
app.use('/API', applications);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app    