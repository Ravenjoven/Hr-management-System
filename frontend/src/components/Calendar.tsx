import React from "react";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import "../App.css" 

export default class Calendar extends React.Component {
  state = {
    events: [], 
  };


  render() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "prev,next",
            center: "title",
            end:"dayGridMonth,timeGridWeek,timeGridDay"
          }}
          dateClick={this.handleDateClick}
          events={this.state.events}
          height={"400px"}
        />
      </div>
      
    );
  }
  handleDateClick = (arg: { dateStr: any }) => {
    const newEvent = {
      title: 'New Event',
      date: arg.dateStr,
    };
  
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
    }));
  };
  
}
