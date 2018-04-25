'use strict';
module.exports = function(app) {
  var eventList = require('../controllers/eventListController');

  // todoList Routes
  app.route('/events')
    .get(eventList.list_all_events)
    .post(eventList.create_a_event);


  app.route('/events/:eventId')
    .get(eventList.read_a_event)
    .put(eventList.update_a_event)
    .delete(eventList.delete_a_event);
};
