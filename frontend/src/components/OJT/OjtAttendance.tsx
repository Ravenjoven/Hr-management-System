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

function OjtAttendance() {
  const [expanded, setExpanded] = useState(false);
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
          <OjtSidebar expanded={expanded} />
          <div
            className={`content h-full max-w-full z-1  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="flex flex-col justify-center">
              <div className="flex flex-row">
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
                    <div className="flex flex-row ">
                      <div>
                        <button
                          type="button"
                          className="bg-green-500 rounded-[4px] p-2 w-18 m-2"
                        >
                          time in
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="bg-red-500 p-2 w-18 m-2"
                        >
                          time out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row m-2 justify-center items-center">
                    <div className="bg-white p-8 rounded-[20px] w-full h-[80%] flex flex-col">
                      <div className="">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="w-[50px] h-[50px] flex justify-start"
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-500 font-bold text-[200%]">
                          CLOCK
                        </p>
                      </div>
                    </div>
                    <div className="bg-white m-2 p-4 rounded-[20px] w-full h-[80%]">
                      <div className="">
                        <p className="text-gray-500 font-bold text-[200%]">
                          Cebu, Phillippines
                        </p>
                      </div>
                      <div className="">
                        <p>
                          3 : 40 :20 <span className="text-blue-500">PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="bg-white m-2 p-4 rounded-[20px] w-full h-[80%]">
                      <div className="">
                        <p className="text-blue-300 font-bold text-[200%]">
                          12h 13m
                        </p>
                      </div>
                      <div className="">
                        <p>Total hours worked</p>
                      </div>
                    </div>
                    <div className="bg-white m-2 p-4 rounded-[20px] w-full h-[80%]">
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

              <div className="bg-white">dsnad,san,dks,ma</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default OjtAttendance;
