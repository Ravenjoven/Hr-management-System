import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ModalComponent from './Modal/EventModal';
import "../App.css";

const Calendar: React.FC = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "event",
      start: "2024-02-16",
    },
    {
      id: 2,
      title: "new event",
      start: "2024-02-17",
    },
    {
      id: 2,
      title: "sadsahdjsajd",
      start: "2024-02-18T09:00:00",
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (arg: { dateStr: any }) => {
    const selectedDate = arg.dateStr;
    setSelectedDate(selectedDate);
    setIsModalOpen(true);
    //const selectedDate = arg.dateStr;
    // const selectedTime = prompt("Please enter the time (HH:MM):"); /
    
    // if (selectedTime) {
    //     const events = {
    //         id: 4,
    //         title: "sadsahdjsajd",
    //         start: `${selectedDate}T${selectedTime}:00`
    //     };
    // }
  };

  const handleEventClick = (clickInfo: any) => {
    // const eventId = clickInfo.event.id;
    // const updatedTitle = alert(eventId );
    const title =clickInfo.event.title;
    const start = clickInfo.event.start;
    // const start =alert(date );
    setSelectedDate(start);
    setIsModalOpen(true);
    // if (updatedTitle) {
    //   const updatedEvents = events.map((event) => {
    //     if (event.id === eventId) {
    //       return { ...event, title: updatedTitle };
    //     } else {
    //       return event;
    //     }
    //   });
    //   setEvents(updatedEvents);
    // }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  return (
    <div>
      {isModalOpen && selectedDate !== null && 
        <ModalComponent 
          date={selectedDate} 
          onClose={closeModal} 
        />
      }
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        events={events}
        height={"400px"}
      />
    </div>
  );
};

export default Calendar;
