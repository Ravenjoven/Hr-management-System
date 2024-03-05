import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AttendanceHistoryModal from "../Modal/AttendanceHistory";

function AdminAttendance() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [employees, setEmployees] = useState([
    {
      id: 0,
      img: "../images/profile-image.png",
      name: "Ranel Soliano",
      attendance: "P",
    },
    {
      id: 1,
      img: "../images/profile-image.png",
      name: "Arnel Carcella",
      attendance: "ML",
    },
    {
      id: 2,
      img: "../images/profile-image.png",
      name: "Jezrael Suliano",
      attendance: "SL",
    },
    {
      id: 3,
      img: "../images/profile-image.png",
      name: "Raven Joven",
      attendance: "VL",
    },
    {
      id: 4,
      img: "../images/profile-image.png",
      name: "Aijem Aijem",
      attendance: "U",
    },
    {
      id: 5,
      img: "../images/profile-image.png",
      name: "Aijem Aijem",
      attendance: "PL",
    },
    {
      id: 6,
      img: "../images/profile-image.png",
      name: "Aijem Aijem",
      attendance: "BL",
    },
    {
      id: 7,
      img: "../images/profile-image.png",
      name: "Aijem Aijem",
      attendance: "A",
    },
  ]);
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openViewModal = () => {
    setIsModalOpen(true);
  };
  const closeViewModal = () => {
    setIsModalOpen(false);
  };

  // Sample attendance data
  const attendanceData = [
    { month: "January", day: "01", year: "2024", status: "Present" },
    { month: "", day: "02", year: "2024", status: "Absent" },
    { month: "", day: "03", year: "2024", status: "UTO" },
  ];

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
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative w-full mt-8">
          <Sidebar expanded={expanded} />
          <div
            className={`content min-h-screen overflow-y-auto scrollbar-hide max-w-full rounded border-[3px] border-custom-text-orange  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full md:h-12 w-full h-full bg-custom-text-orange border-[3px] border-custom-text-orange md:flex  text-white">
              <span className="my-auto pl-4 uppercase font-bold">
                leave & attendance
              </span>
              <div className="flex md:justify-center md:items-center flex-grow">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute top-1/2 transform -translate-y-1/2 left-4 w-4 h-4 text-custom-text-orange"
                  />
                  <input
                    type="text"
                    className="rounded-full border-[3px] border-custom-text-orange text-black pl-10 pr-4 py-2 w-80 h-10"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="relative max-w-sm">
                <div className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="absolute left-4 w-4 h-4 flex z-10 items-center pointer-events-none text-custom-text-orange"
                  />
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date as Date)}
                    dateFormat="MMMM d, yyyy"
                    className="rounded-xl border-[3px] border-custom-text-orange h-10 text-center text-black py-2 w-80 cursor-pointer"
                    placeholderText="Select a date"
                  />
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 w-4 h-4 text-custom-text-orange"
                  />
                </div>
              </div>
            </div>
            <div className="lower-di flex flex-col m-10">
              <div>
                <span className="font-bold text-xl">Legends:</span>
              </div>
              <div className="flex flex-row ">
                <div className=" flex flex-col m-2">
                  <div className="w-4 h-4 mb-2 rounded-3xl p-[5px] bg-custom-text-green" />

                  <div className="w-4 h-4 mb-2 w-2 rounded-3xl p-[5px] bg-custom-text-red" />

                  <div className="w-4 h-4 mb-2 w-2 rounded-3xl p-[5px] bg-custom-text-pink" />

                  <div className="w-4 h-4 mb-2 w-2 rounded-3xl p-[5px] bg-custom-text-yellowpale" />
                </div>
                <div className="flex flex-col mt-[4px] ">
                  <span>Present</span>
                  <span>Absent</span>
                  <span>Maternity Leave</span>
                  <span>Sick Leave</span>
                </div>
                <div className="flex flex-col m-2">
                  <div className="w-4 h-4 mb-2 w-2 rounded-3xl p-[5px] bg-custom-text-orange" />

                  <div className="w-4 h-4 mb-2 w-2 rounded-3xl p-[5px] bg-custom-text-blue" />

                  <div className="w-4 h-4 mb-2 w-2 rounded-3xl p-[5px] bg-custom-text-violet" />

                  <div className="w-4 h-4 mb-2 w-2 rounded-3xl p-[5px] bg-custom-text-cyan" />
                </div>
                <div className="flex flex-col mt-[4px] ">
                  <span>Vacation Leave</span>
                  <span>Unpaid time off</span>
                  <span>Paternity Leave</span>
                  <span>Bereavement Leave</span>
                </div>
              </div>
              <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <div className="grid gap-5 md:grid-cols-6 grid-cols-1 h-full">
                  {filteredEmployees.map((employee) => (
                    <div
                      onClick={openViewModal}
                      key={employee.id}
                      className=" bg-gray-300 w-full rounded h-full flex justify-center items-center flex-col"
                    >
                      <div className="flex items-center">
                        <AttendanceHistoryModal
                          isOpen={isModalOpen}
                          onClose={closeViewModal}
                          attendanceData={attendanceData}
                          leaveData={{
                            leaveType: "",
                            fromDate: "",
                            toDate: "",
                            reason: "",
                          }}
                        />
                        <img
                          src={employee.img}
                          alt=""
                          className="w-24 h-24 text-custom-text-black my-2"
                        />
                      </div>
                      <div className="text-center text-custom-text-black capitalize">
                        {employee.name}
                      </div>
                      <div className="flex space-x-4 m-4">
                        <div
                          className={`border-[3px] rounded-full w-10 h-10 flex justify-center items-center
                        ${
                          employee.attendance === "P"
                            ? "bg-green-600 border-green-400"
                            : employee.attendance === "A"
                            ? "bg-red-600 border-red-400"
                            : employee.attendance === "SL"
                            ? "bg-yellow-200 border-yellow-400"
                            : employee.attendance === "ML"
                            ? "bg-pink-500 border-pink-400"
                            : employee.attendance === "VL"
                            ? "bg-orange-600 border-orange-400"
                            : employee.attendance === "U"
                            ? "bg-blue-600 border-blue-400"
                            : employee.attendance === "PL"
                            ? "bg-pink-800 border-pink-400"
                            : employee.attendance === "BL"
                            ? "bg-cyan-300 border-cyan-400"
                            : ""
                        }`}
                        >
                          <span className="text-[20px] text-white">
                            {employee.attendance}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
             
            
          </div>
        </div>
      </>
    </div>
  );
}

export default AdminAttendance;
