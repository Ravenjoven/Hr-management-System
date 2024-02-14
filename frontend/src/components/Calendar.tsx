import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import "../App.css" 

export default class Calendar extends React.Component {
  state = {
    events: [], // Initialize with an empty array
  };


  render() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          dateClick={this.handleDateClick} // Attach the dateClick handler
          events={this.state.events} // Pass the events array
          height={"400px"}
        />
      </div>
      
    );
  }
  handleDateClick = (arg) => {
    // This function will be called when the user clicks on a date
    // You can add your custom logic here
    
    const newEvent = {
      title: 'New Event',
      date: arg.dateStr,
    };
  
    // Update the events array in the state
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
    }));
  };
  
}
