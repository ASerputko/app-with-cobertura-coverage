/**
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var config = require('./config.json');
var fs = require('fs');
var app = express();

/**
 * Get port from environment and store in Express.
 */
app.set('port', process.env.PORT || config.port);

/**
 * Get environment and store in Express.
 */
app.set('env', process.env.NODE_ENV || config.env);

/**
 * Set pathes to statis files
 */
if (app.get('env') === 'local') {
    app.use(express.static(path.join(__dirname, '../.tmp/')));
    app.use(express.static(path.join(__dirname, '../app/')));
} else {
    app.use(express.static(path.join(__dirname, '../client')));
}

/**
 * Error handler
 * Development error handler will print stacktrace
 */
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Error handler
 * Production error handler no stacktraces leaked to user
 */
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
