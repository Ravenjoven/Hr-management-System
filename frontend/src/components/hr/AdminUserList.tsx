import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import {
  faMagnifyingGlass,
  faEye,
  faTrash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ViewEmployeeModal from "../Modal/ViewUserModal";
import axios from "axios";

interface FormData {
  [key: string]: any;
}

interface Users {
  _id: string;
  fullname: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: number;
  age: string;
  position: string;
  gender: string;
  type: string;
  address: string;
  jobSkills: Object[];
  createdAt: Date;
}

function AdminUserList() {
  const [users, setUsers] = useState<Users[]>([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/user/getAllUsers"
        );
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchUsers();
  }, []);

  const formattedUser = users.map((user) => {
    const formattedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return {
      ...user,
      createdAt: formattedDate,
    };
  });

  const [searchQuery, setSearchQuery] = useState("");
  const filteredUsers = users.filter((user) => {
    return (
      user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phoneNumber
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.createdAt.toString().toLowerCase().includes(searchQuery)
    );
  });
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [isViewModal, setViewModal] = useState(false);
  const openViewModal = (user: any) => {
    setSelectedUser(user);
    setViewModal(true);
  };
  const closeViewModal = () => {
    setViewModal(false);
    setSelectedUser(null);
  };
  const spinnerStyle = {
    fontSize: "24px",
    animation: "spin 1s linear infinite",
  };
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
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
            className={`content h-full max-w-full z-1   ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full h-16  bg-custom-text-orange rounded flex text-white items-center rounded-tr-[25px]">
              <span className="pl-4 uppercase font-bold">User List</span>
              <div className="flex items-end justify-end flex-grow pl-4">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute top-1/2 transform -translate-y-1/2 left-4 w-4 h-4 text-custom-text-orange"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-full border-[3px] border-custom-text-orange text-black pl-10 pr-4 py-2 w-80 h-10"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="lower-div w-full h-full border-[3px] border-custom-text-orange rounded-md mt-4">
              <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-black border-b-[3px] border-custom-text-orange  uppercase">
                    <tr className="capitalize">
                      <th scope="col" className="px-6 py-3">
                        No.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        NAME
                      </th>
                      <th scope="col" className="px-6 py-3">
                        EMAIL
                      </th>
                      <th scope="col" className="px-6 py-3">
                        CONTACTS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GENDER
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DATE CREATED
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`${currentUsers.length > 0 ? "" : "hidden"}`}
                  >
                    {currentUsers.map((user, index) => (
                      <tr
                        key={user._id}
                        className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index + 1}
                        </th>
                        <td className="px-6 py-4">{user.fullname}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.phoneNumber}</td>
                        <td className="px-6 py-4">{user.gender}</td>
                        <td className="px-6 py-4">
                          {formattedUser[index] &&
                            formattedUser[index].createdAt}
                        </td>
                        <td className="px-6 py-4 space-x-2">
                          <button
                            onClick={() => openViewModal(user)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500"
                            />
                          </button>
                          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="hover:text-red-500"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                    <ViewEmployeeModal
                      isView={isViewModal}
                      isClose={closeViewModal}
                      user={selectedUser}
                    />
                  </tbody>
                </table>
                <section
                  className={`${
                    currentUsers.length === 0 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex items-center justify-center mt-4">
                    <FontAwesomeIcon icon={faSpinner} style={spinnerStyle} />
                  </div>
                  <h1 className="text-center font-bold text-[20px] text-custom-text-black my-4">
                    No Data Found
                  </h1>
                </section>
                <nav
                  className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-8"
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {indexOfFirstUser + 1}-
                      {indexOfLastUser > filteredUsers.length
                        ? filteredUsers.length
                        : indexOfLastUser}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {filteredUsers.length}
                    </span>
                  </span>
                  <ul
                    className="flex items-center flex-column flex-wrap md:flex-row justify-between"
                    aria-label="Table navigation"
                  >
                    {/* Render Previous button */}
                    <li>
                      <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </button>
                    </li>

                    {/* Render pagination buttons */}
                    {pageNumbers.map((number) => (
                      <li
                        key={number}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <button
                          onClick={() => handlePageClick(number)}
                          className={`${
                            number === currentPage
                              ? "bg-custom-text-orange text-white w-10 rounded-full"
                              : "text-gray-500 bg-white"
                          }`}
                        >
                          {number}
                        </button>
                      </li>
                    ))}

                    {/* Render Next button */}
                    <li>
                      <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={
                          currentPage === Math.ceil(users.length / usersPerPage)
                        }
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default AdminUserList;
