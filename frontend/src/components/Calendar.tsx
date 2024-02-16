import React from "react";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import "../App.css" 

export default class Calendar extends React.Component {
  state = {
    events: [
      {
        id:1,
        title:'event',
        start:'2024-02-16'

      },
      // {
      //   title:'this is a event',
      //   start:'2024-02-17'

      // },
      // {
      //   title:'this is a another event',
      //   start:'2024-02-18'

      // },
    ], 
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
          eventClick={this.handleEventClick}
          events={this.state.events}
          height={"400px"}
        />
      </div>
      
    );
  }
  handleDateClick = (arg: { dateStr: any }) => {
    const newEvent = {
      title: prompt('Enter a event'),
      date: arg.dateStr,
    };
  
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
    }));
  };

  handleEventClick = (clickInfo) => {
    const eventId = clickInfo.event.id;
    const updatedTitle = prompt('Enter a new title for the event');
    if (updatedTitle) {
      const updatedEvents = this.state.events.map(event => {
        if (event.id === eventId) {
          return { ...event, title: updatedTitle };
        } else {
          return event;
        }
      });
      this.setState({ events: updatedEvents });
    }
  };
  
  
}

