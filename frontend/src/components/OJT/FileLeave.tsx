import React, { useState } from "react";
import "../OJT/Style.css";
import OjtNavar from "./OjtNavar";
import LeaveDetailsModal from "../Modal/LeaveDetails";
import OjtSidebar from "./OjtSidebar";

function FileLeaves() {
  const [expanded, setExpanded] = useState(false);
  const [leaveData, setLeaveData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: ""
  });

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  }

  const handleLeaveTypeChange = (event: any) => {
    setLeaveData({
      ...leaveData,
      leaveType: event.target.value
    });
  }

  const handleFromDateChange = (event: any) => {
    setLeaveData({
      ...leaveData,
      fromDate: event.target.value
    });
  }

  const handleToDateChange = (event: any) => {
    setLeaveData({
      ...leaveData,
      toDate: event.target.value
    });
  }

  const handleReasonChange = (event: any) => {
    setLeaveData({
      ...leaveData,
      reason: event.target.value
    });
  }

  const handleSubmit = () => {
    // Do something with leaveData, like sending it to other components
    // For now, just logging it to console
    console.log(leaveData);
  }

  return (
    <div className="min-h-screen max-w-screen bg-custom-bg-smooth font-montserrat font-bold">
      <>
        <OjtNavar />
        <div className="hamburger-menu items-center">
          <button
            className="menu-toggle focus:outline-none"
            onClick={toggleExpanded}
          >
            {expanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <OjtSidebar expanded={expanded} />
        <div
          className={`content h-full max-w-full z-1  ${expanded ? "ml-0" : "ml-[280px]"
            }`}
        >
          <div
            className="bg-white lower-div w-full min-h-screen border-[3px] rounded-3xl mt-4">
            <div className="m-20">
              <div className="pb-10">
                <span className="text-[30px] text-custom-text-black">File for leave</span>
              </div>
              <div className="pb-8">
                <select
                  className="p-[5px] border-2 border-black rounded-[5px]"
                  name="leaveType"
                  value={leaveData.leaveType}
                  onChange={handleLeaveTypeChange}
                >
                  <option value="">Types of leave</option>
                  <option value="Vacation Leave">Vacation Leave</option>
                  <option value="Maternity Leave">Maternity Leave</option>
                  <option value="Paternity Leave">Paternity Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Bereavement Leave">Bereavement Leave</option>
                </select>
              </div>
              <div className="flex flex-row font-medium mb-4">
                <div className="font-semibold mr-2">
                  <label htmlFor="from">from :</label>
                </div>
                <div>
                  <input
                    className="border-2 border-black rounded-[5px] mr-4"
                    type="date"
                    name="from"
                    value={leaveData.fromDate}
                    onChange={handleFromDateChange}
                  />
                </div>
                <div className="font-semibold mr-2">
                  <label htmlFor="to">to :</label>
                </div>
                <div>
                  <input
                    className="border-2 border-black rounded-[5px] "
                    type="date"
                    name="to"
                    value={leaveData.toDate}
                    onChange={handleToDateChange}
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-semibold">Reason:</span>
                <div>
                  <textarea
                    className="w-full h-full p-2 border-2 border-black rounded-[10px] font-normal"
                    value={leaveData.reason}
                    onChange={handleReasonChange}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end items-end flex-grow mt-4 ">
                <button
                  className="py-2 px-4 rounded-xl bg-custom-text-green text-white "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default FileLeaves;
