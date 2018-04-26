'use strict';
var mongoose = require('mongoose'),
  Events = mongoose.model('Events');

exports.list_all_events = function(req, res) {
  Events.find({}, function(err, events) {
    if (err)
      res.send(err);
    res.json(events);
  });
};

exports.create_a_event = function(req, res) {
  var new_event = new Events(req.body);
  new_event.save(function(err, events) {
    if (err)
      res.send(err);
    res.json(events);
  });
};


exports.read_a_event = function(req, res) {
  Events.findById(req.params.eventId, function(err, events) {
    if (err)
      res.send(err);
    res.json(events);
  });
};


exports.update_a_event = function(req, res) {
  Events.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, events) {
    if (err)
      res.send(err);
    res.json(events);
  });
};


exports.delete_a_event = function(req, res) {


  Events.remove({
    _id: req.params.eventId
  }, function(err, events) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};
