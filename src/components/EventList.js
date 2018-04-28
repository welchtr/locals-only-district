import React from 'react';

export const EventList = props => (
  <div>
    {props.events.map(function(event) {
      return(
        <div>
        {event.event_name}
        </div>
      )
    })}
  </div>
)
