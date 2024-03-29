import React from "react";
import { Link } from "react-scroll";

function Navar() {
  return (
    <nav className="bg-custom-bg-gray top-0 sticky z-50">
      <div className="sm:max-w-screen md:max-w-screen flex mx-20 flex-wrap items-center justify-between p-4 h-full ">
        <div className="flex items-center justify-start ">
          <img src="../images/img2.png" className="h-10"></img>
          <img src="../images/img3.png" className="h-10 pt-2" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="home"
                className="cursor-pointer block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-400 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="cursor-pointer block py-2 px-3 md:text-custom-text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="jobs"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer block py-2 px-3 md:text-custom-text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer block py-2 px-3 md:text-custom-text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navar;
