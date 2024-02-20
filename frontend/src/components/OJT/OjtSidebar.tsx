import { useState } from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    label: "Jobs",
    to: "/OjtJobsList",
  },
  {
    id: 2,
    label: "My Details",
    to: "/Employee",
  },
  {
    id: 3,
    label: "Leave & Attendance",
    to: "/OjtAttendance",
  },
];
const firstRoute = data[0].to;
const firstLabel = data[0].label;
const secondRoute = data[1].to;
const secondLabel = data[1].label;
const ThirdRoute = data[2].to;
const ThirdLabel = data[2].label;
interface SidebarProps {
  expanded: boolean;
}

function OjtSidebar({ expanded }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <aside
        className={`border-[3px] rounded-[30px] bg-custom-bg-orange mt-28 overflow-hidden fixed top-0 left-0 z-40 h-screen transition-transform ${
          expanded ? "-translate-x-full sm:translate-x-0" : "sm:translate-x-0"
        } ${expanded ? "sm:w-0 border-none" : "w-64 "}`}
      >
        <a href="#" className="flex items-center justify-center my-4">
          <img
            src="../images/ret.png"
            className="h-16 w-14 me-3 my-4 mt-9"
            alt="Flowbite Logo"
          />
        </a>
        <ol className="space-y-2 font-medium">
        
          <li className="m-2 cursor-pointer flex items-center px-2 py-5 hover:mx-2 hover:py-5 text-white hover:rounded-3xl hover:transition ease-in-out delay-100 hover:bg-gray-100 hover:bg-opacity-[25%] active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
            <svg
              className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 21"
            >
              <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
              <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
            </svg>
            <Link to={firstRoute} className="block w-full h-full">
              {firstLabel}
            </Link>
          </li>
          <span className="border-custom-text-gray border-b-1" />
          <li className="m-2 cursor-pointer flex items-center px-2 py-5 hover:mx-2 hover:py-5 text-white hover:rounded-3xl hover:transition ease-in-out delay-100 hover:bg-gray-100 hover:bg-opacity-[25%] active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
            <svg
              className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 21"
            >
              <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
            </svg>
            <Link to={secondRoute} className="block w-full h-full">
              {secondLabel}
            </Link>
          </li>
          <li className="m-2 cursor-pointer flex items-center px-2 py-5 hover:mx-2 hover:py-5 text-white hover:rounded-3xl hover:transition ease-in-out delay-100 hover:bg-gray-100 hover:bg-opacity-[25%] active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
            <svg
              className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 21"
            >
              <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
              <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
            </svg>
            <Link to={ThirdRoute} className="block w-full h-full">
              {ThirdLabel}
            </Link>
          </li>
        </ol>
        <div className="mt-[200px] m-2 cursor-pointer flex items-center px-2 py-5 hover:mx-2 hover:py-5 text-white hover:rounded-3xl hover:transition ease-in-out delay-100 hover:bg-gray-100 hover:bg-opacity-[25%] active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
          <svg
            className="flex-shrink-0 w-10 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 21"
          >
            <path
              stroke="White"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
            />
          </svg>
          Log out
        </div>
      </aside>
    </div>
  );
}
export default OjtSidebar;
