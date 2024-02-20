import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import AddJobModal from "../Modal/AddJobModal";
import {
  faMagnifyingGlass,
  faPen,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ViewApplicantDetails from "../Modal/ViewApplicantDetails";

function Jobs() {
  const [expanded, setExpanded] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [JobsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllData, setShowAllData] = useState(true);
  const [showFirstRow, setShowFirstRow] = useState(false);
  const [isViewApplicantModal, setViewApplicantModal] = useState(false);

  const openViewApplicantModal = (user: any) => {
    setSelectedApplicant(user);
    setViewApplicantModal(true);
  };
  const closeViewModal = () => {
    setViewApplicantModal(false);
    setSelectedApplicant(null);
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
  const [jobs, setJobs] = useState([
    {
      id: 0,
      jobName: "Financial Associate",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 10,
      date_createad: "02/14/24",
    },
    {
      id: 1,
      jobName: "Computer Hardware",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 5,
      date_createad: "02/14/24",
    },
    {
      id: 2,
      jobName: "Advertising Media",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 5,
      date_createad: "02/14/24",
    },
    {
      id: 3,
      jobName: "UI/UX Designer",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 5,
      date_createad: "02/14/24",
    },
    {
      id: 4,
      jobName: "IT Analyst",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 5,
      date_createad: "02/14/24",
    },
    {
      id: 5,
      jobName: "IT Consultant",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 5,
      date_createad: "02/14/24",
    },
    {
      id: 6,
      jobName: "Fullstack Developer",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 5,
      date_createad: "02/14/24",
    },
    {
      id: 7,
      jobName: "Computer Engineering",
      jobDescription:
        "Lorem Ipsum Dolor Sit Amet. Ab Odio Atque Et Molestiae Illo A Nihil Provident Ut Velit Esse Non Beatae Voluptatem Nam Omnis Voluptas Sit Natus Quia.",
      jobLimit: 5,
      date_createad: "02/14/24",
    },
  ]);
  const [applicants, setApplicants] = useState([
    {
      id: 0,
      applicantName: "Jezrael Suliano",
      position: "Fullstack Developer",
      year_experience: "1",
      date_applied: "03/15/24",
      img: "./images/cv1.png",
    },
    {
      id: 1,
      applicantName: "Ranel Soliano",
      position: "Fullstack Developer",
      year_experience: "1",
      date_applied: "03/15/24",
    },
    {
      id: 2,
      applicantName: "Arnel Carcella",
      position: "Fullstack Developer",
      year_experience: "1",
      date_applied: "03/15/24",
    },
    {
      id: 3,
      applicantName: "Raven Joven",
      position: "Fullstack Developer",
      year_experience: "1",
      date_applied: "03/15/24",
    },
    {
      id: 4,
      applicantName: "Aijem Aijem",
      position: "Fullstack Developer",
      year_experience: "1",
      date_applied: "03/15/24",
    },
  ]);
  const filteredJobs = jobs.filter((job) => {
    return (
      job.jobName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobLimit
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      job.date_createad.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const filteredApplicants = applicants.filter((applicant) => {
    return (
      applicant.applicantName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      applicant.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.year_experience
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      applicant.date_applied.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // Get current users
  const indexOfLastJobs = currentPage * JobsPerPage;
  const indexOfFirstJobs = indexOfLastJobs - JobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJobs, indexOfLastJobs);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / JobsPerPage); i++) {
    pageNumbers.push(i);
  }
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleClick =
    (jobId: number) => (event: React.MouseEvent<HTMLTableDataCellElement>) => {
      console.log(`Clicked job with ID ${jobId}`);
      setShowAllData(!showAllData);
      setShowFirstRow(!showFirstRow);
    };

  const handleShowAllData =
    (applicantId: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      alert(applicantId);
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
                clip-rule="evenodd"
                fill-rule="evenodd"
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
                        Year Experience
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date Applied
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*all data*/}
                    {showAllData &&
                      currentJobs.map((job, index) => (
                        <tr
                          key={job.id}
                          className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
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
                            onClick={handleClick(job.id)}
                            className="px-6 py-4 cursor-pointer text-green-600 font-semibold"
                          >
                            {job.jobLimit}
                          </td>
                          <td className="px-6 py-4">{job.date_createad}</td>
                          <td className="px-6 py-4 space-x-2">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              <FontAwesomeIcon
                                icon={faPen}
                                className="hover:text-green-500"
                              />
                            </a>
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="hover:text-red-500"
                              />
                            </a>
                          </td>
                        </tr>
                      ))}
                    {/*individual data*/}
                    {!showAllData &&
                      filteredApplicants.map((jobApplicant, index) => (
                        <tr
                          key={jobApplicant.id}
                          className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4 ">
                            {jobApplicant.applicantName}
                          </td>
                          <td className="px-6 py-4">{jobApplicant.position}</td>
                          <td className="px-6 py-4">
                            {jobApplicant.year_experience}
                          </td>
                          <td className="px-6 py-4">
                            {jobApplicant.date_applied}
                          </td>
                          <td className="px-6 py-4 space-x-2">
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
                      ))}
                  </tbody>
                </table>
                <nav
                  className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-8"
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
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default Jobs;
