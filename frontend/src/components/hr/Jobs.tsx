import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import AddJobModal from "../Modal/AddJobModal";

import {
  faMagnifyingGlass,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import ViewApplicantDetails from "../Modal/ViewApplicantDetails";
import ViewEditJobsModal from "../Modal/ViewEditJobsModal";
import Swal from "sweetalert2";

interface Job {
  _id: string;
  jobName: string;
  jobDescription: string;
  jobType: string;
  jobSlots: number;
  jobCategory: string;
  jobSkills: Object[];
  applicant: string[];
  jobSetup: string;
  jobExperience: number;
  jobFromSalary: number;
  jobToSalary: number;
  createdAt: Date;
}

interface Category {
  _id: string;
  jobs: string[];
  jobCategory: string;
}

interface Applicant {
  _id: string;
  jobs: string[];
  fullName: string;
  email: string;
  contact: string;
  linkedIn: string;
  jobType: string;
  roles: number;
  skills: string;
  resume: string;
  application: string;
  createdAt: Date;
}

function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [applicant, setApplicant] = useState<Applicant[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [JobsPerPage] = useState(10);
  const [ApplicantPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllData, setShowAllData] = useState(true);
  const [showFirstRow, setShowFirstRow] = useState(false);
  const [isViewApplicantModal, setViewApplicantModal] = useState(false);
  const [viewJobs, setViewJobs] = useState(false);
  const [jobId, setJobId] = useState("");

  const openViewApplicantModal = (user: any) => {
    setSelectedApplicant(user);
    setViewApplicantModal(true);
  };
  const closeViewModal = () => {
    setViewApplicantModal(false);
    setSelectedApplicant(null);
  };
  const openViewJobsModal = (job: any) => {
    localStorage.setItem("id", job._id);
    setSelectedJob(job);
    setViewJobs(true);
  };
  const closeViewJobsModal = () => {
    setViewJobs(false);
    setSelectedJob(null);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/jobs/get");
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:");
      }
    };
    fetchJobs();
  }, []);
  useEffect(() => {
    const fetCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/jobs/getCategory"
        );
        setCategory(response.data.category);
      } catch (error) {
        console.error("Error fetching category:");
      }
    };
    fetCategory();
  }, []);

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

  const formattedJobs = jobs.map((job) => {
    const formattedDate = new Date(job.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return {
      ...job,
      createdAt: formattedDate,
    };
  });

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

  // const [applicants, setApplicants] = useState([
  //   {
  //     id: 0,
  //     applicantName: "Jezrael Suliano",
  //     position: "Fullstack Developer",
  //     year_experience: "1",
  //     status: 0,
  //     date_applied: "03/15/24",
  //     files: "./files/formal.pdf",
  //     letter:
  //       "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
  //     img: "./images/cv1.png",
  //     email: "jezraelsuliano@gmail.com",
  //     contact_number: "099191912013",
  //     linkedIn:
  //       "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
  //     skills: ["hardworking", "technical", "time management"],
  //   },
  //   {
  //     id: 1,
  //     applicantName: "Ranel Soliano",
  //     position: "Fullstack Developer",
  //     year_experience: "1",
  //     status: 0,
  //     date_applied: "03/15/24",
  //     files: "./files/formal.pdf",
  //     letter:
  //       "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
  //     img: "./images/cv1.png",
  //     email: "jezraelsuliano@gmail.com",
  //     contact_number: "099191912013",
  //     linkedIn:
  //       "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
  //     skills: ["hardworking", "technical", "time management"],
  //   },
  //   {
  //     id: 2,
  //     applicantName: "Arnel Carcella",
  //     position: "Fullstack Developer",
  //     year_experience: "1",
  //     status: 0,
  //     date_applied: "03/15/24",
  //     files: "./files/formal.pdf",
  //     letter:
  //       "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
  //     img: "./images/cv1.png",
  //     email: "jezraelsuliano@gmail.com",
  //     contact_number: "099191912013",
  //     linkedIn:
  //       "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
  //     skills: ["hardworking", "technical", "time management"],
  //   },
  //   {
  //     id: 3,
  //     applicantName: "Raven Joven",
  //     position: "Fullstack Developer",
  //     year_experience: "1",
  //     status: 0,
  //     date_applied: "03/15/24",
  //     files: "./files/formal.pdf",
  //     letter:
  //       "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
  //     img: "./images/cv1.png",
  //     email: "jezraelsuliano@gmail.com",
  //     contact_number: "099191912013",
  //     linkedIn:
  //       "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
  //     skills: ["hardworking", "technical", "time management"],
  //   },
  //   {
  //     id: 4,
  //     applicantName: "Aijem Aijem",
  //     position: "Fullstack Developer",
  //     year_experience: "1",
  //     status: 0,
  //     date_applied: "03/15/24",
  //     files: "./files/formal.pdf",
  //     letter:
  //       "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
  //     img: "./images/cv1.png",
  //     email: "jezraelsuliano@gmail.com",
  //     contact_number: "099191912013",
  //     linkedIn:
  //       "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
  //     skills: ["hardworking", "technical", "time management"],
  //   },
  // ]);
  const filteredJobs = jobs.filter((job) => {
    const searchQueryLower = searchQuery.toLowerCase();
    return (
      job.jobName.toLowerCase().includes(searchQueryLower) ||
      job.jobDescription.toLowerCase().includes(searchQueryLower) ||
      job.jobSlots.toString().includes(searchQueryLower) ||
      job.createdAt.toString().toLowerCase().includes(searchQueryLower)
    );
  });
  const filteredApplicants = applicant.filter((res) => {
    return (
      res.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.jobType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.createdAt.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // fetch all the data
  const indexOfLastJobs = currentPage * JobsPerPage;
  const indexOfFirstJobs = indexOfLastJobs - JobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJobs, indexOfLastJobs);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / JobsPerPage); i++) {
    pageNumbers.push(i);
  }
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // fetch individual data
  const indexOfLastApplicants = currentPage * ApplicantPerPage;
  const indexOfFirstApplicants = indexOfLastApplicants - ApplicantPerPage;
  const currentApplicants = filteredApplicants.slice(
    indexOfFirstApplicants,
    indexOfLastApplicants
  );
  const pageApplicantNumbers = [];
  for (let i = 1; i <= Math.ceil(applicant.length / ApplicantPerPage); i++) {
    pageApplicantNumbers.push(i);
  }

  const handleClick = (jobId: string) => {
    setJobId(jobId);
    setShowAllData(!showAllData);
    setShowFirstRow(!showFirstRow);
  };

  const deleteJobs = async (jobId: string) => {
    // Show confirmation dialog
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // If user confirms deletion
    if (confirmation.isConfirmed) {
      try {
        // Send delete request to API
        const response = await axios.delete(
          "http://localhost:9000/api/jobs/delete",
          { data: { jobId } }
        );

        // Show success message
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        console.log("Job deleted successfully:", response.data);
      } catch (error) {
        // Show error message
        console.error("Error deleting job:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the job.",
          icon: "error",
        });
      }
    } else {
      // Show cancellation message if user cancels
      Swal.fire(
        "Cancelled",
        "Your job deletion request has been cancelled.",
        "info"
      );
    }
  };

  const handleResetTable = () => {
    setShowAllData(!showAllData);
    setShowFirstRow(!showFirstRow);
    setShowAllData(true);
  };

  return (
    <div className="min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <AdminNavar />
        <div className="fixed z-50">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            onClick={toggleExpanded}
            className="cursor-pointer z-50 inline-flex items-center text-sm text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-8 h-8 hover:bg-gray-100"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative w-full mt-8">
          <Sidebar expanded={expanded} />
          <div
            className={`content h-full max-w-full z-1  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full h-16 bg-custom-text-orange rounded flex text-white items-center rounded-tr-[25px]">
              {showAllData && (
                <div
                  onClick={() => setShowAllData(true)}
                  className="pl-4 uppercase font-bold"
                >
                  JOB LIST
                </div>
              )}
              {!showAllData && (
                <div
                  onClick={() => handleResetTable()}
                  className="md:px-4 border md:ml-4 rounded border-white uppercase font-bold cursor-pointer hover:bg-blue-300"
                >
                  Back
                </div>
              )}
              <div className="flex items-center justify-center flex-grow pl-4">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute top-1/2 transform -translate-y-1/2 left-4 w-4 h-4 text-custom-text-orange"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-full border-[3px] border-custom-text-orange text-black pl-10 pr-4 py-2 w-80 h-10"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={openModal}
                  className="border-[3px] hover:bg-blue-400 border-custom-text-white m-4 bg-green-400 text-white py-2 px-4 rounded"
                >
                  Add Jobs
                </button>
                {isOpen && (
                  <AddJobModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title="Add Job"
                  ></AddJobModal>
                )}
              </div>
            </div>

            <div className="lower-div w-full h-full border-[3px] border-custom-text-orange rounded-md mt-4">
              <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-black border-b-[3px] border-custom-text-orange  uppercase">
                    {/* First row */}
                    <tr
                      className={`all_data capitalize ${
                        showFirstRow ? "hidden" : "visible"
                      }`}
                    >
                      <th scope="col" className="px-6 py-3">
                        No.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Job Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Applicants
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date Created
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                    {/* Second row */}
                    <tr
                      className={`eachData capitalize ${
                        showFirstRow ? "visible" : "hidden"
                      }`}
                    >
                      <th scope="col" className="px-6 py-3">
                        No.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Applicant Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date Applied
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*all data*/}
                    {showAllData &&
                      currentJobs.map((job, index) => (
                        <tr
                          key={job._id}
                          className="bg-white capitalize border-b text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{job.jobName}</td>
                          <td className="px-6 py-4">{job.jobDescription}</td>
                          <td
                            onClick={() => handleClick(job._id)}
                            className="px-6 py-4 cursor-pointer text-blue-600 font-semibold"
                          >
                            <div className="rounded-full w-10 text-center hover:text-green-600">
                              {job.applicant.length}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {formattedJobs[index] &&
                              formattedJobs[index].createdAt}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => openViewJobsModal(job)}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="hover:text-green-500"
                                />
                              </button>
                              <button
                                onClick={() => deleteJobs(job._id)}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="hover:text-red-500"
                                />
                              </button>
                            </div>
                          </td>
                          <div>
                            <ViewEditJobsModal
                              viewJobs={viewJobs}
                              title={"Job Details"}
                              isCloseJobs={closeViewJobsModal}
                              categories={category}
                              job={selectedJob}
                            />
                          </div>
                        </tr>
                      ))}
                    {/*individual data*/}
                    {!showAllData &&
                      currentApplicants.map((jobApplicant, index) => (
                        <React.Fragment key={jobApplicant._id}>
                          {jobApplicant.jobs.includes(jobId) && (
                            <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {index + 1}
                              </th>
                              <td className="px-6 py-4 ">
                                {jobApplicant.fullName}
                              </td>
                              <td className="px-6 py-4">
                                {jobApplicant.jobType}
                              </td>
                              <td className="px-6 py-4">
                                {formattedApplicant[index] &&
                                  formattedApplicant[index].createdAt}
                              </td>
                              <td className="px-6 py-4 text-center">
                                <button
                                  onClick={() =>
                                    openViewApplicantModal(jobApplicant)
                                  }
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  <FontAwesomeIcon
                                    icon={faEye}
                                    className="hover:text-green-500"
                                  />
                                </button>
                              </td>
                              <ViewApplicantDetails
                                isOpen={isViewApplicantModal}
                                isClose={closeViewModal}
                                user={selectedApplicant}
                              />
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                  </tbody>
                </table>
                <nav
                  className={`flex items-center flex-column flex-wrap md:flex-row justify-between pt-8 ${
                    showFirstRow ? "hidden" : "visible"
                  }`}
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {indexOfFirstJobs + 1}-
                      {indexOfLastJobs > filteredJobs.length
                        ? filteredJobs.length
                        : indexOfLastJobs}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {filteredJobs.length}
                    </span>
                  </span>
                  <ul
                    className="flex items-center flex-column flex-wrap md:flex-row justify-between"
                    aria-label="Table navigation"
                  >
                    {/* Render Previous button */}
                    <li>
                      <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </button>
                    </li>

                    {/* Render pagination buttons */}
                    {pageNumbers.map((number) => (
                      <li
                        key={number}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <button
                          onClick={() => handlePageClick(number)}
                          className={`${
                            number === currentPage
                              ? "bg-custom-text-orange text-white w-10 rounded-full"
                              : "text-gray-500 bg-white"
                          }`}
                        >
                          {number}
                        </button>
                      </li>
                    ))}

                    {/* Render Next button */}
                    <li>
                      <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={
                          currentPage === Math.ceil(jobs.length / JobsPerPage)
                        }
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
                <nav
                  className={`flex items-center flex-column flex-wrap md:flex-row justify-between pt-8 ${
                    showFirstRow ? "visible" : "hidden"
                  }`}
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {indexOfFirstApplicants + 1}-
                      {indexOfLastApplicants > filteredApplicants.length
                        ? filteredApplicants.length
                        : indexOfLastApplicants}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {filteredApplicants.length}
                    </span>
                  </span>
                  <ul
                    className="flex items-center flex-column flex-wrap md:flex-row justify-between"
                    aria-label="Table navigation"
                  >
                    {/* Render Previous button */}
                    <li>
                      <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </button>
                    </li>

                    {/* Render pagination buttons */}
                    {pageApplicantNumbers.map((number) => (
                      <li
                        key={number}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <button
                          onClick={() => handlePageClick(number)}
                          className={`${
                            number === currentPage
                              ? "bg-custom-text-orange text-white w-10 rounded-full"
                              : "text-gray-500 bg-white"
                          }`}
                        >
                          {number}
                        </button>
                      </li>
                    ))}

                    {/* Render Next button */}
                    <li>
                      <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={
                          currentPage === Math.ceil(jobs.length / JobsPerPage)
                        }
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default Jobs;
