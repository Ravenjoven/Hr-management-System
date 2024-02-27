import { useState } from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 0,
    label: "Job",
    to: "/OjtJobList",
  },
  {
    id: 1,
    label: "Profile",
    to: "/UserProfile",
  },
  {
    id: 2,
    label: "Attendance",
    to: "/UserAttendance",
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

function UserSidebar({ expanded }: SidebarProps) {
  return (
    <div>
      <aside
        className={`border-[3px] rounded-tr-2xl bg-custom-text-orange text-white mt-28 overflow-hidden border-custom-text-orange fixed top-0 left-0 z-40 h-screen transition-transform ${
          expanded ? "-translate-x-full sm:translate-x-0" : "sm:translate-x-0"
        } ${expanded ? "sm:w-0 border-none" : "w-64 "}`}
      >
        <a href="#" className="flex items-center justify-center mt-4 mb-10">
          <img
            src="../images/img2.png"
            className="h-14 w-14 me-3"
            alt="Teravault Logo"
          />
        </a>
        <ol className="space-y-8 font-medium">
          <li className="cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg
              className="flex-shrink-0 w-10 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <Link to={firstRoute} className="block w-full h-full">
              {firstLabel}
            </Link>
          </li>
          <li className="cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group">
            <svg
              className="flex-shrink-0 w-10 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 21"
            >
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
            <Link to={secondRoute} className="block w-full h-full">
              {secondLabel}
            </Link>
          </li>
          <li className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg
              className="flex-shrink-0 w-10 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 21"
            >
              <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
              <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
            </svg>
            <Link to={ThirdRoute} className="block w-full h-full">
              {ThirdLabel}
            </Link>
          </li>
        </ol>
        <div className="mt-60 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg
            className="flex-shrink-0 w-10 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 21"
          >
            <path
              stroke="currentColor"
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
export default UserSidebar;
