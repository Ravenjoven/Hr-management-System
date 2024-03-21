import React, { useEffect } from "react";
import { useState } from "react";
import "../OJT/Style.css";
import OjtNavar from "./OjtNavar";
import CancelModal from "./CancelModal";
import OjtSidebar from "./OjtSidebar";
import { ReactSession } from "react-client-session";
import axios from "axios";

interface Applicant {
  _id: string;
  jobs: string[];
  createdAt: Date;
}
interface Job {
  _id: string;
  jobName: string;
}

function Applications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [JobsPerPage] = useState(10);
  const [ApplicantPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [applicant, setApplicant] = useState<Applicant[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
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
  useEffect(() => {
    const fetchApplicant = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/jobs/getApplicant"
        );
        setApplicant(response.data.applicant);
      } catch (error) {
        console.error("Error fetching applicant:");
      }
    };
    fetchApplicant();
  }, []);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/jobs/get");
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);
  const formattedApplicant = applicant.map((req) => {
    const formattedDate = new Date(req.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return {
      ...req,
      createdAt: formattedDate,
    };
  });
  const filteredApplicants = applicant.filter((res) => {
    return res.createdAt
      .toString()
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });
  const indexOfLastApplicants = currentPage * ApplicantPerPage;
  const indexOfFirstApplicants = indexOfLastApplicants - ApplicantPerPage;
  const currentApplicants = filteredApplicants.slice(
    indexOfFirstApplicants,
    indexOfLastApplicants
  );
  const findJobName = (jobId: string) => {
    const matchedJob = jobs.find((job) => job._id.trim() === jobId.trim());
    return matchedJob ? matchedJob.jobName : "";
  };
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
                  {currentApplicants.map((jobApplicant, index) => (
                    <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-montserrat"
                      >
                        <span>{index + 1}</span>
                      </th>
                      <td className="px-6 py-4">{jobApplicant._id}</td>
                      <td className="px-6 py-4">
                        {formattedApplicant[index] &&
                          formattedApplicant[index].createdAt}
                      </td>
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
                  ))}
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
