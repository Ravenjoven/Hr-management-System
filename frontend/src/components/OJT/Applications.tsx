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
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobCount, setJobCount] = useState(jobs.length);
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
                       
                      </th>
                      <td className="px-6 py-4"></td>
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
