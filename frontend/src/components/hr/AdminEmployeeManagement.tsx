import React, { useState } from "react";
import AdminNavar from "../AdminNavar";
import AddEmployeeModal from "../Modal/AddEmployeeModal";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPen,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ViewApplicant from "../Modal/ViewApplicant";

function AdminEmployeeManagement() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [ApplicantPerPage] = useState(10);
  const [types, setTypes] = useState(["Full Time", "Part Time", "Intern"]);
  const [isViewApplicantModal, setViewApplicantModal] = useState(false);
  const [positions, setPositions] = useState([
    "Backend Developer",
    "Frontend Developer",
    "Project Manager",
  ]);
  const [applicants, setApplicants] = useState([
    {
      id: 0,
      applicantName: "Jezrael Suliano",
      position: "Fullstack Developer",
      year_experience: "1",
      status: 0,
      date_applied: "03/15/24",
      files: "./files/formal.pdf",
      letter:
        "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
      img: "./images/cv1.png",
      email: "jezraelsuliano507@gmail.com",
      contact_number: "099191912013",
      linkedIn:
        "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
      skills: ["hardworking", "technical", "time management"],
    },
    {
      id: 1,
      applicantName: "Ranel Soliano",
      position: "Fullstack Developer",
      year_experience: "1",
      status: 0,
      date_applied: "03/15/24",
      files: "./files/formal.pdf",
      letter:
        "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
      img: "./images/cv1.png",
      email: "jezraelsuliano@gmail.com",
      contact_number: "099191912013",
      linkedIn:
        "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
      skills: ["hardworking", "technical", "time management"],
    },
    {
      id: 2,
      applicantName: "Arnel Carcella",
      position: "Fullstack Developer",
      year_experience: "1",
      status: 0,
      date_applied: "03/15/24",
      files: "./files/formal.pdf",
      letter:
        "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
      img: "./images/cv1.png",
      email: "jezraelsuliano@gmail.com",
      contact_number: "099191912013",
      linkedIn:
        "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
      skills: ["hardworking", "technical", "time management"],
    },
    {
      id: 3,
      applicantName: "Raven Joven",
      position: "Fullstack Developer",
      year_experience: "1",
      status: 0,
      date_applied: "03/15/24",
      files: "./files/formal.pdf",
      letter:
        "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
      img: "./images/cv1.png",
      email: "jezraelsuliano@gmail.com",
      contact_number: "099191912013",
      linkedIn:
        "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
      skills: ["hardworking", "technical", "time management"],
    },
    {
      id: 4,
      applicantName: "Aijem Aijem",
      position: "Fullstack Developer",
      year_experience: "1",
      status: 0,
      date_applied: "03/15/24",
      files: "./files/formal.pdf",
      letter:
        "I am writing to express my interest in the [Job Title] position advertised on [Where You Found the Job Posting]. With a [Your Years of Experience]-year background in [Your Field/Area of Expertise], I am confident in my ability to contribute effectively to your team.",
      img: "./images/cv1.png",
      email: "jezraelsuliano@gmail.com",
      contact_number: "099191912013",
      linkedIn:
        "https://in.linkedin.com/in/r-88165a58?trk=people-guest_people_search-card",
      skills: ["hardworking", "technical", "time management"],
    },
  ]);
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
  const indexOfLastApplicants = currentPage * ApplicantPerPage;
  const indexOfFirstApplicants = indexOfLastApplicants - ApplicantPerPage;
  const currentApplicants = filteredApplicants.slice(
    indexOfFirstApplicants,
    indexOfLastApplicants
  );
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
            className={`content h-full max-w-full z-1   ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full h-16  bg-custom-text-orange rounded flex text-white items-center rounded-tr-[25px]">
              <span className="pl-4 uppercase font-bold">
                Employee Management
              </span>
              <div className="flex items-center justify-center flex-grow">
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
              <div className="flex justify-end items-end">
                <button
                  onClick={openModal}
                  className="border-[3px] hover:bg-blue-400 border-custom-text-white m-4 bg-green-400 text-white py-2 px-4 rounded"
                >
                  Add Employees
                </button>
                {isOpen && (
                  <AddEmployeeModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title="Add Employee"
                    positions={positions}
                    types={types}
                  ></AddEmployeeModal>
                )}
              </div>
            </div>
            <div className="pending max-h-screen w-full">
              <div className="pending">
                <div className="bg-custom-text-orange rounded-tr-full text-white mt-4 h-10 pt-2 w-60">
                  <span className="pl-4 uppercase font-bold py-20">
                    Pending Employee
                  </span>
                </div>
                <div className="pending-table">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black border-[3px] border-custom-text-orange uppercase">
                      <tr className="capitalize">
                        <th scope="col" className="px-6 py-3">
                          No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                          JOB CATEGORY
                        </th>
                        <th scope="col" className="px-6 py-3">
                          POSITION
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-[3px] border-custom-text-orange">
                      {currentApplicants.map((jobApplicant, index) => (
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
                          <ViewApplicant
                            viewApplicant={isViewApplicantModal}
                            closeApplicant={closeViewModal}
                            user={selectedApplicant}
                          />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="current">
                <div className="mt-10 bg-custom-text-orange rounded-tr-full text-white h-10 pt-2 w-60">
                  <span className="pl-4 uppercase font-bold py-20">
                    Current Employee
                  </span>
                </div>
                <div className="current-table">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black border-[3px] border-custom-text-orange uppercase">
                      <tr className="capitalize">
                        <th scope="col" className="px-6 py-3">
                          No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                          JOB CATEGORY
                        </th>
                        <th scope="col" className="px-6 py-3">
                          POSITION
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-[3px] border-custom-text-orange">
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default AdminEmployeeManagement;
