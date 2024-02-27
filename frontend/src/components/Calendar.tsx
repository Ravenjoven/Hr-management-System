import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ModalComponent from "./Modal/EventModal";
import "../App.css";
import AddModal from "./Modal/AddModal";

const Calendar: React.FC = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "event",
      date: "2024-02-16",
    },
    {
      id: 2,
      title: "new event",
      date: "2024-02-17",
    },
    {
      id: 2,
      title: "sadsahdjsajd",
      date: "2024-02-18T09:00:00",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleDateClick = (info: any) => {
    setSelectedDate(info.date);
    setIsAddModalOpen(true);
  };
  const handleEventClick = (info: any) => {
    setSelectedEvent(info.event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  return (
    <div className="z-50   text-black ">
      {isAddModalOpen && selectedDate !== null && (
        <AddModal selectedDate={selectedDate} onClose={closeModal} />
      )}

      {isModalOpen && (
        <ModalComponent event={selectedEvent} onClose={closeModal} />
      )}

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
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
