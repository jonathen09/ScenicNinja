var express = require('express');
var bodyParser = require('body-parser');
var urlParser = require('url');

var app = express();

var port = process.env.PORT || 4568;
var router = require(__dirname + '/server/router/routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app, express);

app.listen(port, function(err) {
  if (err) {
    return console.log('Listen error: ', err);
  }
  console.log('Hollistic Parallelogram Listening on Port ' + port);
});  

module.exports = app;


// TODO: check if below are useful for this project
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//app.use(methodOverride('X-HTTP-Method-Override')); 
              
// ============= Optional Mongoose/Mongo Setup ===========
/*
// Mongoose/Mongo setup. Uncomment if using Mongoose.
var mongoose = require('mongoose');
var dbUri = process.env.MONGOLAB_URI ||'mongodb://localhost/mvp';
mongoose.connect(dbUri, function(err, res) {
  if (err) {
    console.log('Mongo connection error: ', err);
  }
});
*/


