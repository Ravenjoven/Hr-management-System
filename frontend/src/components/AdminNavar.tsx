import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Notif from "./Notifications";

function AdminNavar() {

  const [showNotification, setShowNotification] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const openNotif = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="border-b-4 border-gray-400 bg-white top-0 sticky z-50">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto md:p-4 h-full">
          <div className="flex items-center justify-start">
            <img src="../images/img2.png" className="h-10"></img>
            <img src="../images/img3.png" className="h-10 pt-2" />
          </div>

          <div className="block w-auto h-auto pr-4" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex space-x-4">
                <div>
                  <a
                    href="#"
                    className="block md:py-2 rounded md:bg-transparent md:text-orange-400 md:p-0 hover:text-blue-400"
                    aria-current="page"
                    onClick={() => setShowNotification(!showNotification)}
                  >
                    <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
                    {showNotification && (
                      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-2 w-2 bg-red-500 rounded-full sm:ml-[40%] lg:ml-[42%] " />
                    )}

                    {/* <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-2 w-2 bg-red-500 rounded-full ml-[42%]"></span> */}
                  </a>
                </div>
                <a
                  href="/Profile"
                  className="block md:py-2 rounded md:bg-transparent md:text-orange-400 md:p-0 hover:text-blue-400"
                  aria-current="page"
                >
                  <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex justify-end">
        <Notif isOpen={isOpen} onClose={closeModal}></Notif>
      </div> */}
      </nav>
      <div className="flex justify-end ml-[75%] z-50 fixed">
        <Notif show={showNotification} />
      </div>
    </>
  );
}

export default AdminNavar;
