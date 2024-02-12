import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { CiUser } from "react-icons/ci";
import Sidebar from "../Sidebar";
import Calendar from "../Calendar";

function Dashboard() {
  return (
    <div className="min-h-screen max-w-full bg-white font-montserrat">
      <nav className="border-b-4 border-gray-400  top-0 sticky z-50">
        <div className="max-w-screen flex flex-wrap items-center bg-white justify-between mx-auto md:p-4 h-full">
          <div className="flex items-center justify-start">
            <img src="../images/img2.png" className="h-10"></img>
            <img src="../images/img3.png" className="h-10 pt-2" />
          </div>

          <div className="block w-auto h-auto pr-4" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block md:py-2 px-3 rounded md:bg-transparent md:text-orange-400 md:p-0 hover:text-blue-400"
                  aria-current="page"
                >
                  <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Sidebar />
      <div className="content h-screen mr-8 mt-2 md:ml-[280px] ">
        <div className="upper-div max-w-5xl rounded-tr-[30px] h-10 font-bold bg-custom-text-orange rounded flex text-white">
          <span className="my-auto pl-4">DASHBOARD</span>
        </div>
        <div className="max-w-5xl mt-4 border-[3px] rounded-2xl border-custom-text-orange">
          <div className="w-[60%] rounded-tr-[20px] mt-2 ml-2 rounded-tl-[20px] h-10 font-bold bg-custom-text-orange rounded flex flex-col text-white">
            <div className="flex mt-2 justify-center items-center text-black">
              CALENDAR
            </div>
            <div className="mt-4 border-custom-text-orange text-black">
              <Calendar />
            </div>
          </div>
          <div className="flex justify-end ">
            <img src="../images/image.png" className="h-[400px]"></img>
          </div>
          <div className="m-4 mt-8 text-black h-56 grid grid-cols-3 gap-4 content-center font-extrabold">
            <div className="p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <li className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ">
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
            <div className="p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <li className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ">
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
            <div className="p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <li className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ">
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
            <div className="p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <li className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ">
                <svg
                  className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                EMPLOYEE MANAGEMENT
              </li>
            </div>
            <div className="p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <li className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ">
                <svg
                  className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
                MY DETAILS
              </li>
            </div>
            <div className="p-8 border-[3px] border-custom-text-orange rounded-[10px] bg-gray-300 text-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <li className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ">
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
                LEAVE & ATTENDANCE
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
