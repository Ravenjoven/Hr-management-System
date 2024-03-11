import axios from "axios";
import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
  selectedDate: string; // Assuming date is a string
}

const AddModal: React.FC<ModalProps> = ({ selectedDate, onClose }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  const [formData, setFormData] = useState({
    date: selectedDate,
    reminders: '',
    time: '',
  });

  const handleSave = () => {
    // Make POST request when the Save button is clicked
    axios
      .post("http://localhost:9000/api/event/addevent", formData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Make sure to configure CORS on the server properly
        },
      })
      .then((response) => {
        alert("Event added successfully");
        console.log("Response:", response.data);
        handleClose(); // Close the modal after successful save
      })
      .catch((error) => {
        console.error("An error occurred while adding the event:", error);
        // Handle error, e.g., show error message to the user
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { date, reminders, time } = formData;

  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-w-screen min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 transition-opacity"
            aria-hidden="true"
            onClick={handleClose}
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block bg-white w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="text-custom-text-black">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <span>Events And Reminders</span>
                <hr />
                <div className="mt-4 text-black flex flex-col">
                  <div className="flex flex-col p-4">
                    <div>
                      <label htmlFor="date-of-Event">Date</label>
                      <input
                        type="text"
                        className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        value={date}
                        readOnly // Assuming date should not be editable
                      />
                    </div>
                    <div>
                      <label htmlFor="reminder">Event</label>
                      <input
                        type="text"
                        name="reminders"
                        placeholder="Create Event"
                        className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        value={reminders}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="time-of-Event">HH:MM AM/PM</label>
                      <input
                        type="time"
                        name="time"
                        placeholder="Time"
                        className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        value={time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={handleSave}
                className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="w-full md:inline-flex inlune-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
