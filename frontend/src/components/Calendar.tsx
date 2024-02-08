import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


function Calendar(){
   
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={
                    {
                        start: 'title', // will normally be on the left. if RTL, will be on the right
                        center: '',
                        end: 'prev,next' 
                    }
                }
                height={'60vh'}
                
            />
        </>
    );
}
export default Calendar;