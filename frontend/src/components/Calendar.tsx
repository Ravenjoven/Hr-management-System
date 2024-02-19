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
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (arg: { dateStr: any }) => {
    const selectedDate = arg.dateStr;
    setSelectedDate(selectedDate);
    setIsModalOpen(true);
  };

  const handleEventClick = (clickInfo: any) => {
    const eventId = clickInfo.event.id;
    const updatedTitle = prompt("Enter a new title for the event");
    if (updatedTitle) {
      const updatedEvents = events.map((event) => {
        if (event.id === eventId) {
          return { ...event, title: updatedTitle };
        } else {
          return event;
        }
      });
      setEvents(updatedEvents);
    }
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
