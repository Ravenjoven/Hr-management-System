import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function AdminJobCategory() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <div className="min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <AdminNavar />
        <div className="fixed">
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
            className={`content h-full max-w-full z-1  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full h-12 font-bold bg-custom-text-orange rounded flex text-white">
              <span className="my-auto pl-4 uppercase">job categories</span>
            </div>
            <div className="lower-div w-full h-full border-[3px] border-custom-text-orange rounded-md mt-4">
              <section className="flex">
                <div className="w-full h-full my-auto px-auto text-left">
                  <h1 className="font-bold pl-4 w-full text-custom-text-gray text-3xl">
                    We're passionate about <br />
                    helping entrepreneurs <br /> change the world and build{" "}
                    <br />a better tomorrow.
                  </h1>
                </div>
                <div className="w-full">
                  <img
                    src="../images/image.png"
                    className="w-[350px] h-90 mx-auto"
                  />
                </div>
              </section>
              <div className="h-10 w-full flex mt-2">
                <div className="w-full pl-4">
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="absolute top-1/2 transform -translate-y-1/2 left-4 w-4 h-4 text-custom-text-orange"
                    />
                    <input
                      type="text"
                      className="rounded-full border-[3px] border-custom-text-orange text-black pl-10 pr-4 py-2 w-80 h-10"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <select
                    name="categories"
                    className="rounded-xl cursor-pointer mx-auto text-center font-bold text-white bg-custom-text-orange w-80 h-10"
                  >
                    <option
                      value="IT/Computer"
                      className="uppercase text-[20px]"
                    >
                      IT/Computer
                    </option>
                    <option
                      value="IT/Computer"
                      className="uppercase text-[20px]"
                    >
                      Fullstack Developer
                    </option>
                  </select>
                </div>
              </div>
              <div className="relative overflow-x-auto shadow-md  mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-custom-text-orange">
                    <tr className="capitalize">
                      <th scope="col" className="px-6 py-3">
                        job name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        job descripion
                      </th>
                      <th scope="col" className="px-6 py-3">
                        job applicants
                      </th>
                      <th scope="col" className="px-6 py-3">
                        date end
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white capitalize border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        IT/Computer
                      </th>
                      <td className="px-6 py-4">
                        maintaining computer systems, troubleshooting errors,{" "}
                        <br />
                        and repairing the organization's hardware.
                      </td>
                      <td className="px-6 py-4">123</td>
                      <td className="px-6 py-4">02/28/24</td>
                      <td className="px-6 py-4 space-x-2">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <FontAwesomeIcon
                            icon={faPen}
                            className="hover:text-green-500"
                          />
                        </a>
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="hover:text-red-500"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr className="capitalize bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Fullstack Developer
                      </th>
                      <td
                        className="px-6 py-4"
                        style={{
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {" "}
                        full-stack developer is a developer or engineer who can{" "}
                        <br />
                        build both the front end and the back end of a website.{" "}
                      </td>
                      <td className="px-6 py-4">50</td>
                      <td className="px-6 py-4">02/28/24</td>
                      <td className="px-6 py-4 space-x-2">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <FontAwesomeIcon
                            icon={faPen}
                            className="hover:text-green-500"
                          />
                        </a>
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="hover:text-red-500"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav
                  className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-8"
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1-10
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1000
                    </span>
                  </span>
                  <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </a>
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
export default AdminJobCategory;
