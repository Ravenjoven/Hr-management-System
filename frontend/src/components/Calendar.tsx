import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ModalComponent from "./Modal/EventModal";
import "../App.css";
import AddModal from "./Modal/AddModal";
import axios from "axios";

interface Event {
  _id:string;
  date: string;
  title: string;
}

const Calendar: React.FC = () => {

  const [vent, setEvent] = useState<Event[]>([]);
 
  useEffect(() => {
    // Function to fetch jobs when component mounts
    const getEvent = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/event/getEvent"
        );
        setEvent(response.data.event);
    
    // console.log(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    getEvent();   
  }, [vent]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleDateClick = (info: any) => {
    setSelectedDate(info.dateStr);
    setIsAddModalOpen(true);
  };
  const handleEventClick = (vent: any) => {
    setSelectedEvent(vent);
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
        events={vent}
        eventClick={handleEventClick}
        height={"400px"}
      />
    </div>

  );
};

export default Calendar;

export function Scheduler(){
  return <div>
    
    <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}

        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next",
          center: "title",
          end: "dayGridMonth,timeGridDay",
        }}
        
        
      />
  </div>;
}