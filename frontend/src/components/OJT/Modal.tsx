import React, { useState } from "react";
import MultiSelect from "multiselect-react-dropdown";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob: Job | null;
}
interface Job {
  jobName: string;
}
export default function Modal({ isOpen, onClose, selectedJob }: ModalProps) {
  const jobId = localStorage.getItem("id");
  const [files, setFiles] = useState<File | null>(null);
  const [resume, setResume] = useState("Upload Files . pdf");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const skills = [
    { id: 0, name: "Hardworking", value: "Hardworking" },
    { id: 1, name: "Time Management", value: "Time Management" },
    { id: 2, name: "Critical Thinking", value: "Critical Thinking" },
    { id: 3, name: "Technincal", value: "Technincal" },
  ];

  const [formData, setFormData] = useState({
    jobId: jobId,
    fullName: "",
    email: "",
    contact: "",
    linkedIn: "",
    jobType: "",
    jobSkills: [],
    application: "",
  });

  const handleSave = async (e: any) => {
    e.preventDefault();

    if (!files) {
      // No file selected
      console.error("No file selected");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("jobId", jobId || "");
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("linkedIn", formData.linkedIn);
    formDataToSend.append("jobType", formData.jobType);
    formDataToSend.append("application", formData.application);
    formDataToSend.append("resume", files);
    console.log(formDataToSend);

    const result = await axios
      .post("http://localhost:9000/api/apply/jobs", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        console.log(result);
        alert("Sent Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelectSkills = (selectedList: any) => {
    setSelectedSkills(selectedList);
    setFormData({
      ...formData,
      jobSkills: selectedList,
    });
  };

  const handleRemoveSkills = (selectedList: any) => {
    setSelectedSkills(selectedList);
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
              <div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:text-left w-full">
                      <h3
                        className=" leading-6 font-medium text-gray-100 rounded-2xl p-4 flex justify-center items-center bg-custom-text-green "
                        id="modal-headline"
                      >
                        APPLYING FOR{" "}
                        <span className="uppercase text-custom-text-blue font-bold pl-2">
                          {selectedJob ? selectedJob.jobName : ""}
                        </span>
                      </h3>
                      <div className="mt-5 font-normal">
                        <form method="post" encType="multipart/form-data">
                          <div className="mb-4">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              placeholder="Full Name"
                              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  fullName: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <label htmlFor="enail">Email</label>
                          <div className="mb-4">
                            <input
                              name="email"
                              type="email"
                              value={formData.email}
                              placeholder="Example@gmail.com"
                              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="contact">Contact No.</label>
                            <input
                              type="tel"
                              name="contact"
                              value={formData.contact}
                              placeholder="+1234567890"
                              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  contact: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="link">LinkedIn Profile</label>
                            <input
                              name="link"
                              type="tel"
                              value={formData.linkedIn}
                              placeholder="LinkedIn Profile"
                              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  linkedIn: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="jobType">Job Type</label>
                            <select
                              name="jobType"
                              id="jobtype"
                              value={formData.jobType}
                              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-400"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  jobType: e.target.value,
                                })
                              }
                            >
                              <option value="">Select Job Type</option>
                              <option value="fullTime">Full Time</option>
                              <option value="partTime">Part Time</option>
                              <option value="intern">Intern</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="application">
                              Application Letter
                            </label>
                            <textarea
                              rows={4}
                              placeholder="Application Letter"
                              value={formData.application}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  application: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              name="application"
                              id="application"
                            ></textarea>
                          </div>
                          <div className=" mb-4 flex flex-row justify-between">
                            <div className="relative">
                              <label
                                htmlFor="fileInput"
                                className="p-4 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-[200px] flex items-center justify-center cursor-pointer"
                              >
                                {" "}
                                {resume && (
                                  <span className="block p-2 text-sm text-gray-400">
                                    {resume}
                                  </span>
                                )}
                                <input
                                  name="fileInput"
                                  id="fileInput"
                                  accept="application/pdf"
                                  type="file"
                                  className="hidden"
                                  onChange={(e) => {
                                    if (e.target.files) {
                                      setFiles(e.target.files[0]);
                                      setResume(e.target.files[0].name);
                                    }
                                  }}
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
                            <label htmlFor="skill">Skills</label>
                            <MultiSelect
                              options={skills}
                              selectedValues={selectedSkills}
                              onSelect={handleSelectSkills}
                              onRemove={handleRemoveSkills}
                              displayValue="name"
                              placeholder="Input skills here..."
                              className="pt-2 h-full"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    onClick={handleSave}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
