import React, { useState } from 'react';
import LeaveDetailsModal from './LeaveDetails';

interface AttendanceEntry {
  month: string;
  day: string;
  year: string;
  status: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  attendanceData: AttendanceEntry[];
  leaveData: {
    leaveType: string;
    fromDate: string;
    toDate: string;
    reason: string;
  };
}

const AttendanceHistoryModal: React.FC<Props> = ({ isOpen, onClose, attendanceData }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // Function to handle opening the LeaveDetailsModal
  const handleCommentClick = () => {
    setShowDetails(true); // Show the LeaveDetailsModal when the comment is clicked
  };

  // Function to handle closing the LeaveDetailsModal
  const handleCloseModal = () => {
    setShowDetails(false); // Hide the LeaveDetailsModal when it is closed
  };
  const dummyConfirmFunction = () => {
    // This is a placeholder function for onConfirm
    // It does nothing when called
    console.log("Confirmation action placeholder");
  };

  return (
    <>
        {isOpen && (
        <div className=" fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 opacity-100"></div>
          <div className="relative z-50 mx-auto w-[1000px] p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Attendance History</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Month</th>
                    <th className="px-4 py-2">Day</th>
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Status</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((entry, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{entry.month}</td>
                      <td className="border px-4 py-2">{entry.day}</td>
                      <td className="border px-4 py-2">{entry.year}</td>
                      <td className="border px-4 py-2">{entry.status}</td>
                      <td className="border px-4 py-2">
                       <span onClick={handleCommentClick} className='cursor-pointer flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/></svg></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* Render LeaveDetailsModal if showDetails is true */}
      {showDetails && (
  <LeaveDetailsModal
    isOpen={true} // You can set this based on your logic
    onClose={handleCloseModal}
    leaveData={{
      leaveType: 'Vacation Leave',
      fromDate: '2024-02-28',
      toDate: '2024-03-05',
      reason: 'Family vacation',
    }}
    closeModal={handleCloseModal}
    showModal={true} // You can set this based on your logic
    onConfirm={dummyConfirmFunction} // Pass the dummy function
  />
)}
    </>
  );
};

export default AttendanceHistoryModal;
