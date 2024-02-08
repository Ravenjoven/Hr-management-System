import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebard";

function ProfilePage() {
  return (
    <div className="min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <nav className="border-b-4 border-gray-400 bg-white top-0 sticky z-50">
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
        <div className="border border-black">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            // onClick={() => setExpanded((curr) => !curr)}
            className="cursor-pointer z-50 inline-flex items-center text-sm text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
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
        <div className="mt-8 relative w-full">
          <Sidebar />
          <div className="content h-full max-w-full md:ml-[280px] z-1">
            <div className="upper-div md:min-w-full h-10 font-bold bg-custom-text-orange rounded flex text-white">
              <span className="my-auto pl-4">PERSONAL INFO</span>
            </div>
            <div className="flex">
              <div className="left-div w-[400px] min-h-screen mt-4 border-[3px] rounded-2xl border-custom-text-orange">
                <div className="border-b-[3px] border-custom-text-orange flex flex-col text-center justify-center items-center">
                  <div className="flex justify-center items-center border-[3px] border-custom-text-orange rounded-l-full rounded-br-full mt-8 mb-2 rounded-tr-lg h-40 w-40">
                    <img
                      src="./images/img2.jpg"
                      className="h-36 w-36 rounded-full"
                    />
                  </div>
                  <h4 className="text-custom-text-black font-bold">
                    TERAVAULT
                  </h4>
                  <span className="text-custom-text-gray font-semibold p-2 mb-2">
                    HR Manager
                  </span>
                </div>
                <div className="my-10 text-center">
                  <h4 className="text-custom-text-black font-bold">CONTACTS</h4>
                  <div>
                    <span className="flex justify-center items-center mb-2">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-4 h-4 text-custom-text-orange"
                      />
                      <span className="underline text-custom-text-gray pl-2">
                        Hr@teravault.com
                      </span>
                    </span>
                    <span className="text-custom-text-gray mt-4">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="w-4 h-4 text-custom-text-orange"
                      />
                      <span className="text-custom-text-gray pl-2">
                        09123456789
                      </span>
                    </span>
                  </div>
                </div>
                <div className="my-10 text-center">
                  <h4 className="text-custom-text-black font-bold">SKILLS</h4>
                  <div className="flex flex-col justify-center items-center text-center space-y-2 mt-2">
                    <span>Critical Thinking</span>
                    <span>Critical Thinking</span>
                    <span>Critical Thinking</span>
                  </div>
                </div>
              </div>
              <div className="right-div w-full h-full mt-4 md:overflow-hidden overflow-x-scroll">
                <div className="border-[3px] border-custom-text-orange md:ml-4 rounded-2xl">
                  <div className="font-bold text-custom-text-black my-4 ml-8 space-y-3">
                    <div>
                      Fullname :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        Teravault Inc
                      </span>
                    </div>
                    <div>
                      Date of Birth :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        00/00/0000
                      </span>
                    </div>
                    <div>
                      Place of Birth :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        Cebu Business Park
                      </span>
                    </div>
                    <div>
                      Address :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        Ayala Center, Cebu Business Park
                      </span>
                    </div>
                    <div>
                      Age :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        00
                      </span>
                    </div>
                    <div>
                      Gender :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        ---
                      </span>
                    </div>
                    <div>
                      Nationality :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        -----
                      </span>
                    </div>
                    <div>
                      Religion :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        ----
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <div className="border-[3px] border-custom-text-orange md:ml-4 rounded-2xl mt-4">
                    <h3 className="my-4 uppercase font-bold md:ml-8 text-xl text-custom-text-black">
                      certification
                    </h3>
                    <div className="text-custom-text-black text-left md:ml-8 capitalize space-y-2 mb-4">
                      Creative Web Design Technical Education and Skills <br />
                      Development Authority(TESDA){" "}
                      <br className="md:hidden block" /> December 0, 0000 -
                      January 00, 0000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProfilePage;
