import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../Sidebar";
import Calendar from "../Calendar";

function Dashboard() {
  return (
    <div className="min-h-screen max-w-full bg-white font-montserrat">
      <nav className="border-b-4 border-gray-400  top-0 sticky z-50">
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
                  <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Sidebar />
      <div className="content fixed h-screen w-[100%] mr-8 mt-8 md:ml-[280px] ">
        <div className="upper-div max-w-5xl rounded-tr-[30px] h-10 font-bold bg-custom-text-orange rounded flex text-white">
          <span className="my-auto pl-4">DASHBOARD</span>
        </div>
        <div className="max-w-5xl h-full mt-4 border-[3px] rounded-2xl border-custom-text-orange">
          <div className="w-[60%] rounded-tr-[10px] mt-[20px] ml-[10px] rounded-tl-[10px] h-10 font-bold bg-custom-text-orange rounded flex flex-col text-white">
            <div className="flex mt-2 justify-center items-center text-black">
              CALENDAR
            </div>
            <div className="mt-4 border-custom-text-orange text-black">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
