import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CompDetails() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
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
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative w-full mt-8">
          <Sidebar expanded={expanded} />
          <div
            className={`content overflow-y-auto scrollbar-hide  rounded-3xl bg-custom-bg-smooth fixed w-full h-full  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full md:h-12  bg-custom-text-orange md:flex text-white ">
              <span className="my-auto pl-4 uppercase font-bold">
                COMPANY PROFILE
              </span>
            </div>
          
              <div className=" m-14 flex flex-row ">
                <div className=" font-bold text-custom-text-black w-96 flex justify-center items-center">
                  <span className="text-xl">
                    Description & Contact Information
                  </span>
                </div>
                <div>
                <img
                  className="pl-[660px] md:h-20 md:w-full self-start "
                  src="../images/img2.png"
                  alt=""
                />
                </div>
            </div>
            <div className=" ml-20  text-custom-text-black flex flex-row">
              <div className=" font-semibold justify-bottom items-bottom">
                <span>Company Description</span>
              </div>
              <div className="ml-52 text-sm  w-[750px] text-custom-text-black">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </div>
            </div>
            <div className=" w-20 ml-20 font-semibold text-custom-text-black flex justify-between mt-8">
              <span>Address</span>
              <div className=" ml-80">
                <span>Contact</span>
              </div>
              <div className=" ml-[200px]">
                <span>Website</span>
              </div>
            </div>
            <div className=" flex text-sm text-custom-text-black justify-between">
            <div className="  w-[250px] ml-20">
              <ul>
                <li>
                  <ol>Los Angeles</ol>
                  <ol>Honolulu</ol>
                  <ol>Sydney</ol>
                  <ol>Ayala Cebu, Cebu Business Park</ol>
                </li>
              </ul>
              </div>
              <div className="absolute ml-[468px]">
              <ul>
                <li>
                  <ol>+1 (818) 917-4799</ol>
                  <ol>+1 (808) 979-5969</ol>
                  <ol>+61 400 384 297</ol>
                  <ol>+63 9151 318 486</ol>
                </li>
              </ul>
              </div>
              <div className="absolute ml-[735px] text-custom-text-blue">
                <span><a href="https://teravault.co">https://teravault.co</a></span>
              </div>
             
            </div>
           
            <div className=" w-20 ml-20 mt-10 font-bold text-custom-text-black">
                <span>Details</span>
              </div>
              <div className=" flex mt-4 justify-space-between">
              <div className=" w-20 ml-20  font-semibold text-custom-text-black">
                <span>CEO</span>
              </div>
              <div className=" w-[150px] text-sm ml-[310px]  text-custom-text-black">
                <span>Mark Monzon</span>
              </div>
              <div className=" w-20 ml-20 font-semibold text-custom-text-black">
                <span>Employees</span>
              </div>
              <div className=" w-[150px] text-sm ml-[210px]  text-custom-text-black">
                <span>123123</span>
              </div>
              </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default CompDetails;
