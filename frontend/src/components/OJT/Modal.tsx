import React, { useState, useEffect } from "react";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob: Job | null;
}
interface Job {
  jobName: string;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedJob }) => {
  const [jobName, setJobName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState("Upload Files");
  const [application, setApplication] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/apply", {
        jobName,
        fullName,
        email,
        contact,
        jobType,
        skills,
        resume,
        application,
        linkedIn,
      });
      console.log("Form submitted successfully:", response.data);
      alert("Form Submitted!");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName =
      e.target.files && e.target.files[0] && e.target.files[0].name;
    if (fileName) {
      setResume(fileName);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:text-left w-full">
                      <h3
                        className="text- leading-6 font-medium text-gray-700"
                        id="modal-headline"
                      >
                        Applying for{" "}
                        <span className="text-custom-text-green">
                          {selectedJob ? selectedJob.jobName : ""}
                        </span>
                      </h3>
                      <div className="mt-5 font-normal">
                        <div className="mb-4">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-3 py-2 placeholder-gray-700 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-3 py-2 placeholder-gray-700 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="tel"
                            placeholder="Contact Number"
                            className="w-full px-3 py-2 placeholder-gray-700 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setContact(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="tel"
                            placeholder="LinkedIn Profile"
                            className="w-full px-3 py-2 placeholder-gray-700 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setLinkedIn(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <select
                            name="jobType"
                            id=""
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                            onChange={(e) => setJobType(e.target.value)} // Add this line
                          >
                            <option value="">Select Job Type</option>
                            <option value="fullTime">Full Time</option>
                            <option value="partTime">Part Time</option>
                            <option value="intern">Intern</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <textarea
                            rows={4}
                            placeholder="Application Letter"
                            onChange={(e) => setApplication(e.target.value)}
                            className="w-full px-3 py-2 placeholder-gray-700 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            name="application"
                            id="application"
                          ></textarea>
                        </div>
                        <div className=" mb-4 flex flex-row justify-between">
                          <div className="relative">
                            <label
                              htmlFor="fileInput"
                              className="p-4 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-lg w-[200px] flex items-center justify-center cursor-pointer"
                            >
                              {resume && (
                                <span className="block p-2 text-sm text-gray-700">
                                  {resume}
                                </span>
                              )}
                              <input
                                name="fileInput"
                                id="fileInput"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#6e6e6e"
                                  d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                                />
                              </svg>
                            </label>
                          </div>
                        </div>
                        <div className="mb-4">
                          <textarea
                            placeholder="Skills"
                            className="w-full px-3 py-2 placeholder-gray-700 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            rows={4}
                            onChange={(e) => setSkills(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
