import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import "../App.css" 

export default class Calendar extends React.Component {
    render() {
      return (
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
          initialView="dayGridMonth"
          dateClick={this.handleDateClick}
          headerToolbar={
            {
                start: 'prev,next', // will normally be on the left. if RTL, will be on the right
                center: 'title',
                end: 'dayGridMonth' 
            }
        }
        />
      )
    }
    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    
  }




