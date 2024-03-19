import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();
const startYear = currentYear - 100; // Starting from 100 years ago
const years = Array.from({ length: 101 }, (_, index) => startYear + index);

export default function RegisterModal({ isOpen, onClose, title }: ModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    password: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
  });

  const handleClose = () => {
    onClose && onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Test");
    try {
      await axios.post("http://localhost:9000/api/registrations", formData); // Update the URL with your backend server address and port
      toast.success("Successfully created an account"); // Display success toast
      onClose();
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed"); // Display error toast
    }
  };

  if (!isOpen) {
    return null; // If the modal is not open, return null
  }

  return (
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
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border border-gray-400 h-10 rounded-md pl-2 capitalize"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="contactNumber"
                      placeholder="Contact Number"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full border border-gray-400 h-10 rounded-md pl-2"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email" // Set the name attribute to match the state property
                    placeholder="Email"
                    value={formData.email} // Bind input value to state
                    onChange={handleChange} // Update state on change
                    className="w-full border border-gray-400 h-10 rounded-md pl-2"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password" // Set the name attribute to match the state property
                    placeholder="Password"
                    value={formData.password} // Bind input value to state
                    onChange={handleChange} // Update state on change
                    className="w-full border border-gray-400 h-10 rounded-md pl-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="Birthdate"
                    className="text-[12px] font-semibold text-custom-text-gray"
                  >
                    Birthdate
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <select
                        name="birthMonth"
                        className="w-full border border-gray-400 h-10 rounded-md pl-2"
                        value={formData.birthMonth}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Month</option>
                        {months.map((month, index) => (
                          <option key={index} value={index + 1}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        name="birthDay"
                        className="w-full border border-gray-400 h-10 rounded-md pl-2"
                        value={formData.birthDay}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Day</option>
                        {[...Array(31)].map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        name="birthYear"
                        className="w-full border border-gray-400 h-10 rounded-md pl-2"
                        value={formData.birthYear}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
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
                      <input
                        type="radio"
                        id="Female"
                        name="gender"
                        value="female" // Set value attribute according to your preference
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex w-full border border-gray-400 h-10 rounded-md items-center justify-between px-2">
                      <label htmlFor="Male">Male</label>
                      <input
                        type="radio"
                        id="Male"
                        name="gender"
                        value="male" // Set value attribute according to your preference
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex w-full border border-gray-400 h-10 rounded-md items-center justify-between px-2">
                      <label htmlFor="Custom">Custom</label>
                      <input
                        type="radio"
                        id="Custom"
                        name="gender"
                        value="custom" // Set value attribute according to your preference
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <p className="text-[10px] font-semibold text-custom-text-gray">
                    By clicking Sign Up, you agree to our{" "}
                    <span className="text-blue-800">Terms</span>,{" "}
                    <span className="text-blue-800">Privacy Policy</span> and{" "}
                    <span className="text-blue-800">Cookies Policy.</span>
                    <br />
                    You may receive and Email Notifications from us any time.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-60 bg-custom-text-orange font-bold text-[20px] text-white h-10 rounded-md hover:bg-orange-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
