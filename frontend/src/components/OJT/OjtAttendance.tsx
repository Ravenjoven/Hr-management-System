import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OjtNavar from "../OJT/OjtNavar";
import OjtSidebar from "../OJT/OjtSidebar";
import {
  faMagnifyingGlass,
  faTrash,
  faPen,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FileLeave from "./FileLeave";
import { Link, Route } from "react-router-dom";

function OjtAttendance() {
  const [expanded, setExpanded] = useState(false);
  const [jobCount, setJobCount] = useState("•");
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <div className="min-h-screen max-w-screen bg-custom-bg-smooth font-montserrat font-bold">
      <>
        <OjtNavar />
        <div className="hamburger-menu flex items-center">
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
        <div className="relative w-full mt-2 bg-custom-bg-smooth">
          <OjtSidebar expanded={expanded} jobCount={jobCount} />
          <div
            className={`content h-full max-w-full z-1  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="flex flex-col justify-center">
              <div className="flex flex-row w-full">
                <div className="bg-white m-2 rounded-[20px]">
                  <div className="flex flex-col p-8 justify-center items-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="flex w-[105px] p-4 h-[100px] border-[5px] border-black rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-xl">Jhon doe</p>
                    </div>
                    <div>
                      <p className="text-gray-500 font-semibold p-1 text-m">
                        Software Developer
                      </p>
                    </div>
                    <div className="flex flex-row text-white text-sm">
                      <div>
                        <button
                          type="button"
                          className="bg-green-500 rounded-[4px] p-2 w-18 m-2"
                        >
                          Time in
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="bg-red-500 rounded-[4px] p-2 w-18 m-2"
                        >
                          Time out
                        </button>
                      </div>
                    </div>
                    <div className="text-xs p-2 text-custom-text-blue">
                      <span>
                        Other options,{" "}
                        <a
                          className="border-b-2 no-wrap border-blue-600"
                          href="/FileLeave"
                        >
                          learn more !
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[70%]">
                  <div className="flex flex-row m-2 justify-center items-center h-full">
                    <div className="bg-white rounded-[20px] w-[50%] h-full">
                      <div className="m-2 p-2">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="w-[50px] h-[50px] flex justify-start"
                        />
                      </div>
                      <div className="m-2">
                        <p className="text-gray-500 font-bold text-[200%]">
                          CLOCK
                        </p>
                      </div>
                    </div>
                    <div className="bg-white m-4 rounded-[20px] w-full h-full  pt-8 pl-8">
                      <div className="">
                        <p className="text-gray-500 font-bold text-[150%]">
                          Cebu, Phillippines
                        </p>
                      </div>
                      <div className="">
                        <p className="font-bold text-[300%]">
                          3 : 40 : 20 <span className="text-blue-500">PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row  m-2 justify-center items-center h-full">
                    <div className="bg-white m-2 rounded-[20px] w-full h-full flex flex-col pt-8 pl-4">
                      <div className="">
                        <p className="text-blue-300 font-bold text-[200%]">
                          12h 13m
                        </p>
                      </div>
                      <div className="">
                        <p>Total hours worked</p>
                      </div>
                    </div>
                    <div className="bg-white m-2 rounded-[20px] w-full h-full flex flex-col pt-8 pl-4">
                      <div className="">
                        <p className="text-red-400 font-bold text-[200%]">
                          640h 0m
                        </p>
                      </div>
                      <div className="">
                        <p>Work hours required</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white w-full flex flex-col h-full m-2 rounded-[20px]">
                  <div className="p-8">
                    <p>Mon, Feb. 13, 2024</p>
                  </div>
                  <div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-black   uppercase">
                        <tr className="capitalize font-bold text-[15px]">
                          <th scope="col" className="px-6 py-3">
                            Employee
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Time
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Department
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">John Doe</td>
                          <td className="px-6 py-4">Time in</td>
                          <td className="px-6 py-4">
                            7 : 00 : 14 am Cebu, Philippines
                          </td>
                          <td className="px-6 py-4">Software Department</td>
                        </tr>
                        <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">John Doe</td>
                          <td className="px-6 py-4">Time in</td>
                          <td className="px-6 py-4">
                            7 : 00 : 14 am Cebu, Philippines
                          </td>
                          <td className="px-6 py-4">Software Department</td>
                        </tr>
                        <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">John Doe</td>
                          <td className="px-6 py-4">Time in</td>
                          <td className="px-6 py-4">
                            7 : 00 : 14 am Cebu, Philippines
                          </td>
                          <td className="px-6 py-4">Software Department</td>
                        </tr>
                        <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">John Doe</td>
                          <td className="px-6 py-4">Time in</td>
                          <td className="px-6 py-4">
                            7 : 00 : 14 am Cebu, Philippines
                          </td>
                          <td className="px-6 py-4">Software Department</td>
                        </tr>
                        <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">John Doe</td>
                          <td className="px-6 py-4">Time in</td>
                          <td className="px-6 py-4">
                            7 : 00 : 14 am Cebu, Philippines
                          </td>
                          <td className="px-6 py-4">Software Department</td>
                        </tr>
                        <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">John Doe</td>
                          <td className="px-6 py-4">Time in</td>
                          <td className="px-6 py-4">
                            7 : 00 : 14 am Cebu, Philippines
                          </td>
                          <td className="px-6 py-4">Software Department</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default OjtAttendance;
