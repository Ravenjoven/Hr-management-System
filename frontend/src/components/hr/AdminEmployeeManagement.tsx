import { useState } from "react";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";

function AdminEmployeeManagement() {
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
            className={`content h-full max-w-full z-1   ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full h-16  bg-custom-text-orange rounded flex text-white items-center rounded-tr-[25px]">
              <span className="pl-4 uppercase font-bold">
                Employee Management
              </span>
            </div>
            <div className="current max-h-screen w-full">
              <div className="current">
                <div className="bg-custom-text-orange rounded-tr-full text-white mt-4 h-10 pt-2 w-60">
                  <span className="pl-4 uppercase font-bold py-20">
                    Current Employee
                  </span>
                </div>
                <div className="current-table">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black border-[3px] border-custom-text-orange uppercase">
                      <tr className="capitalize">
                        <th scope="col" className="px-6 py-3">
                          No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                          JOB CATEGORY
                        </th>
                        <th scope="col" className="px-6 py-3">
                          POSITION
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-[3px] border-custom-text-orange">
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 pl-10">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 pl-10">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 pl-10">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 pl-10">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 pl-10">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pending">
                <div className="mt-10 bg-custom-text-orange rounded-tr-full text-white h-10 pt-2 w-60">
                  <span className="pl-4 uppercase font-bold py-20">
                    Pending Employee
                  </span>
                </div>
                <div className="pending-table">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black border-[3px] border-custom-text-orange uppercase">
                      <tr className="capitalize">
                        <th scope="col" className="px-6 py-3">
                          No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                          JOB CATEGORY
                        </th>
                        <th scope="col" className="px-6 py-3">
                          POSITION
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-[3px] border-custom-text-orange">
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">testing.tes@gmail.com</td>
                        <td className="px-6 py-4">Software Developer</td>
                        <td className="px-6 py-4">Fullstack Developer</td>
                        <td className="px-6 py-4">Fulltime</td>
                        <td className="px-6 py-4 space-x-4 flex">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="hover:text-green-500 flex"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default AdminEmployeeManagement;
