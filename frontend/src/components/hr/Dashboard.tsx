import { useState } from "react";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import Calendar from "../Calendar";

function Dashboard() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <div className="min-h-screen max-w-full bg-white font-montserrat">
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
      <div className=" w-full mt-8">
        <Sidebar expanded={expanded} />
        <div
          className={`content h-full max-w-full z-1  ${
            expanded ? "ml-0" : "ml-[280px]"
          }`}
        >
          <div className="upper-div rounded-tr-[30px] md:min-w-full h-12 font-bold bg-custom-text-orange rounded flex text-white">
            <span className="my-auto pl-4">DASHBOARD</span>
          </div>

          <div className="relative flex flex-col lower-div w-full h-full border-[3px] border-custom-text-orange rounded-md mt-4">
            <div className="flex h-[500px] ">
              <div className=" lg:w-full rounded-tr-[20px] m-2 rounded-tl-[20px] h-10 font-bold bg-custom-text-orange rounded text-white xs:w-full">
                <div className="flex mt-2 justify-center items-center text-black">
                  CALENDAR
                </div>
                <div className=" mt-4  border-custom-text-orange w-full text-black">
                  <Calendar />
                </div>
              </div>

              <div className="flex flex-col w-[20%] m-8 border-custom-text-orange">
                <img
                  src="../images/dashboard-img.png"
                  className="h-[400px]  w-full sm:block hidden"
                ></img>
              </div>
            </div>
          </div>
          <div className="w-full h-full border-[3px] border-custom-text-orange rounded-md mt-4 ">
            <div className=" m-8 text-black grid md:grid-cols-3 xs:grid-cols-1 gap-4 font-extrabold">
              <a href="/EmployeeList">
                <div className="h-[110px] p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <li className="cursor-pointer flex items-center justify-center p-2 text-gray-900 rounded-lg ">
                    <svg
                      className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    USERS
                  </li>
                </div>
              </a>
              <a href="/Jobs">
                <div className="h-[110px] p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <li className="cursor-pointer flex items-center justify-center p-2 text-gray-900 rounded-lg ">
                    <svg
                      className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                      <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                    </svg>
                    JOBS
                  </li>
                </div>
              </a>
              <a href="/Category">
                <div className="h-[110px] p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <li className="cursor-pointer flex items-center justify-center p-2 text-gray-900 rounded-lg ">
                    <svg
                      className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
                    </svg>
                    CATEGORY
                  </li>
                </div>
              </a>
              <a href="/Management">
                <div className="h-[110px] p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <li className="cursor-pointer flex items-center justify-center text-gray-900 rounded-lg ">
                    <svg
                      className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    EMPLOYEE <br />
                    MANAGEMENT
                  </li>
                </div>
              </a>
              <a href="/Company">
                <div className="h-[110px] p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <li className="cursor-pointer flex items-center justify-center text-gray-900 rounded-lg ">
                    <svg
                      className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                    </svg>
                    COMPANY DETAILS
                  </li>
                </div>
              </a>
              <a href="/Attendance">
                <div className="h-[110px] p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <li className="cursor-pointer flex items-center justify-center text-gray-900 rounded-lg ">
                    <svg
                      className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                      <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                    </svg>
                    LEAVE & <br />
                    ATTENDANCE
                  </li>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
