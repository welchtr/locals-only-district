// Dependencies
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Events = require('./eventListApi/models/eventListModels'), //created model loading here
  bodyParser = require('body-parser');

  // mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Events_db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

var routes = require('./eventListApi/routes/eventListRoutes'); //importing route
routes(app); //register the route

app.use(express.static('build'))

// Start server
app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('event list RESTful API server started on: ' + port);
