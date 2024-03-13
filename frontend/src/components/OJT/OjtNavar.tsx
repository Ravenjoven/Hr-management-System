import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function OjtNavar() {
  return (
    <nav className="border-b-2 border-gray-400 bg-custom-bg-smooth top-0 sticky z-50">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto md:p-4 h-full">
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
               
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default OjtNavar