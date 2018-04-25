'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventsSchema = new Schema({
  // will eventually want a picture piece**
  event_name: { type: String },
   event_venue : { type: String },
   event_date: { type: String,},
   event_time: { type: String },
});

module.exports = mongoose.model('Events', EventsSchema);
