import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function RegisterModal({ isOpen, onClose, title }: ModalProps) {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat">
          <div className="flex items-center justify-center min-w-screen min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={handleClose}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block bg-white w-full rounded-lg px-4  text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="text-custom-text-black">
                <div className="text-center sm:mt-0 sm:text-left">
                  <div className="flex justify-between items-center mb-2">
                    <h3
                      className="text-lg font-semibold  text-[32px] leading-6 text-gray-900"
                      id="modal-headline"
                    >
                      {title}
                    </h3>
                    <button
                      onClick={handleClose}
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <FontAwesomeIcon
                        icon={faClose}
                        className="hover:text-green-500"
                      />
                    </button>
                  </div>
                  <span>It's quick and easy</span>
                  <hr className="mt-2" />
                  <div className="mt-4 text-black flex flex-col space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full border border-gray-400 h-10 rounded-md pl-2 capitalize"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Contact Number"
                          className="w-full border border-gray-400 h-10 rounded-md pl-2"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-400 h-10 rounded-md pl-2"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-400 h-10 rounded-md pl-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="Birthday"
                        className="text-[12px] font-semibold text-custom-text-gray"
                      >
                        Birthday
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <select
                            name="month"
                            className="w-full border border-gray-400 h-10 rounded-md pl-2"
                          >
                            <option value=""></option>
                          </select>
                        </div>
                        <div>
                          <select
                            name="day"
                            className="w-full border border-gray-400 h-10 rounded-md pl-2"
                          >
                            <option value=""></option>
                          </select>
                        </div>
                        <div>
                          <select
                            name="year"
                            className="w-full border border-gray-400 h-10 rounded-md pl-2"
                          >
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="Gender"
                        className="text-[12px] font-semibold text-custom-text-gray"
                      >
                        Gender
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex w-full border border-gray-400 h-10 rounded-md items-center justify-between px-2">
                          <label htmlFor="Female">Female</label>
                          <input type="radio" id="Female" name="gender" />
                        </div>
                        <div className="flex w-full border border-gray-400 h-10 rounded-md items-center justify-between px-2">
                          <label htmlFor="Male">Male</label>
                          <input type="radio" id="Male" name="gender" />
                        </div>
                        <div className="flex w-full border border-gray-400 h-10 rounded-md items-center justify-between px-2">
                          <label htmlFor="Custom">Custom</label>
                          <input type="radio" id="Custom" name="gender" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-custom-text-gray">
                        People who use our service may have uploaded your
                        contact information to <br />
                        Teravault.{" "}
                        <a href="#" className="text-blue-800">
                          Learn more.
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-custom-text-gray">
                        By clicking Sign Up, you agree to our{" "}
                        <span className="text-blue-800">Terms</span>,{" "}
                        <span className="text-blue-800">Privacy Policy</span>{" "}
                        and{" "}
                        <span className="text-blue-800">Cookies Policy.</span>
                        <br />
                        You may receive and Email Notifications from us any
                        time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center">
                <button
                  type="button"
                  className="w-60 bg-custom-text-orange font-bold text-[20px] text-white h-10 rounded-md hover:bg-orange-500"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
