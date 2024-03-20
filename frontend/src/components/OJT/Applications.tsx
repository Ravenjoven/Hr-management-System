import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  faMagnifyingGlass,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../OJT/Style.css";
import OjtNavar from "./OjtNavar";
import CancelModal from "./CancelModal";
import OjtSidebar from "./OjtSidebar";
import { ReactSession } from "react-client-session";
import axios from "axios";

interface Job {
  _id: string;
  jobName: string;
  createdAt: Date;
}

function Applications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [JobsPerPage] = useState(10);
  const [expanded, setExpanded] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
    // Add any cancel logic here
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    // Add any confirm logic here
  };

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const jobs = ReactSession.get("jobs");
  const [application, setApplication] = useState<Job[]>([]);
  useEffect(() => {
    const getJobs = async () => {
      const id = ReactSession.get("jobs");
      try {
        const response = await axios.get(
          `http://localhost:9000/api/jobs/get/${id}`
        );
        setApplication(response.data);
        console.log(response.data);
      }catch (error){
        console.error("Error fecthing jobs:", error );
      }
    };
    getJobs();
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [applicationCount, setApplicationCount] = useState(application.length);
  

  const handleAddJob = () => {
    // Add your logic to add a new job here
    // For example:
    const newJob = {
      id: application.length, // You might want to use a more reliable way to generate IDs
      jobName: "New Job", // Default values for the new job
 
      createdAt: new Date().toLocaleDateString(), // Current date
    };
    setApplication([...application]); // Update the jobs array
    setApplicationCount(applicationCount + 1); // Increment job count
  };
  const indexOfLastJobs = currentPage * JobsPerPage;
  const indexOfFirstJobs = indexOfLastJobs - JobsPerPage;
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
          className={`content h-full max-w-full z-1  ${
            expanded ? "ml-0" : "ml-[280px]"
          }`}
        >
          <div className="lower-div w-full h-full border-[3px] rounded-md mt-4">
            <div className="relative overflow-x-auto shadow-md">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black bg-white  uppercase">
                  <tr className="capitalize">
                    <th scope="col" className="px-6 py-3">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Job name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date applied
                    </th>
                    <th scope="col" className="px-6 py-3">
                      status
                    </th>

                    <th scope="col" className="px-6 py-3">
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody>
                
                    <tr
                    
                      className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-montserrat"
                      >
                        <span>{}</span>
                      </th>
                      <td className="px-6 py-4">{jobs.id}</td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4">Pending</td>
                      <td
                        onClick={() => setIsModalOpen(true)}
                        className="px-12 py-4 cursor-pointer"
                      >
                        X{" "}
                      </td>{" "}
                      <CancelModal
                        isOpen={isModalOpen}
                        onCancel={handleCancel}
                        onConfirm={handleConfirm}
                      />
                    </tr>
           
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default Applications;
