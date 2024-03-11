import React, { useState } from "react";
import MultiSelect from "multiselect-react-dropdown";
import { faClose, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Category {
  _id: string;
  jobs: string[];
  jobCategory: string;
}

interface ViewJobModal {
  viewJobs: boolean;
  isCloseJobs: () => void;
  job: {
    id: number;
    jobName: string;
    jobDescription: string;
    jobType: string;
    jobSlots: number;
    jobCategory: string;
    jobSkills: string[];
    jobSetUp: string;
    jobExperience: number;
    jobFromSalary: number;
    jobToSalary: number;
    date_created: string;
  } | null;
  title: string;
  categories: Category[];
}

export default function ViewEditJobsModal({
  viewJobs,
  isCloseJobs,
  title,
  job,
  categories,
}: ViewJobModal) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedJobName, setEditedJobName] = useState("");
  const [editedJobDescription, setEditedJobDescription] = useState("");
  const [editedJobSlot, setEditedJobSlot] = useState(0);
  const [buttonJobTypeMessage, setButtonJobTypeMessage] = useState("");
  const [buttonJobCategoryMessage, setButtonJobCategoryMessage] = useState("");
  const [buttonSetUpMessage, setButtonSetUpMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isExperienceRequired, setIsExperienceRequired] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const skills = [
    { id: 0, name: "Hardworking", value: "Hardworking" },
    { id: 1, name: "Time Management", value: "Time Management" },
    { id: 2, name: "Critical Thinking", value: "Critical Thinking" },
    { id: 3, name: "Technincal", value: "Technincal" },
  ];

  const handleSetupButtonClick = (val: any) => {
    setButtonSetUpMessage(val);
    // setFormData({
    //   ...formData,
    //   jobSetUp: val,
    // });
  };
  const handleSelectSkills = (selectedList: any) => {
    setSelectedSkills(selectedList);
    // setFormData({
    //   ...formData,
    //   jobSkills: selectedList,
    // });
  };
  const handleRemoveSkills = (selectedList: any) => {
    setSelectedSkills(selectedList);
    // setFormData({
    //   ...formData,
    //   jobSkills: selectedList,
    // });
  };
  const handleClose = () => {
    setCurrentPage(1);
    isCloseJobs && isCloseJobs();
  };
  const handleEditSaveToggle = () => {
    setIsExperienceRequired(false);
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      // Save the edited data
      const editedJob = {
        ...job,
        jobName: editedJobName,
        jobDescription: editedJobDescription,
        // Update other fields similarly
      };
      console.log("Edited Job Data:", editedJob);

      // Exit edit mode
      setIsEditing(false);
    } else {
      // Enter edit mode
      setIsEditing(true);

      setEditedJobName(job?.jobName || "");
      setEditedJobDescription(job?.jobDescription || "");
    }
  };

  const setEditedExperience = (experience: number) => {
    console.log(experience);
  };
  const handleCategoryClick = (category: any) => {
    setButtonJobCategoryMessage(category);
    // setFormData({
    //   ...formData,
    //   jobCategory: category,
    // });
  };
  const handleCheckboxChange = (event: any) => {
    setIsExperienceRequired(event.target.checked);
  };
  const nextPage = () => {
    console.log("Current Page:", currentPage);
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleTypeButtonClick = (type: string) => {
    setButtonJobTypeMessage(type);
    // setFormData({
    //   ...formData,
    //   jobType: type,
    // });
  };
  return (
    <>
      {viewJobs && (
        <div className="fixed z-50 inset-0 overflow-y-auto  font-montserrat">
          <div className="flex items-center justify-center min-w-screen min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block bg-white w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div
                className={
                  currentPage === 1
                    ? "visible first-page text-custom-text-black"
                    : "hidden"
                }
              >
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="flex justify-between items-center mb-4">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-headline"
                    >
                      {title}{" "}
                      <span className="pl-2">
                        <button
                          onClick={handleEditSaveToggle}
                          className="text-sm font-medium leading-6 text-blue-600"
                        >
                          <FontAwesomeIcon
                            icon={faPen}
                            className="hover:text-green-500"
                          />
                        </button>
                      </span>
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
                  <hr />
                  <div className="flex flex-col">
                    <div className="mt-4">
                      <h6 className="text-[15px]">
                        <span className="text-red-600 pr-1">*</span>What kind of
                        job is this?
                      </h6>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedJobName}
                          onChange={(e) => setEditedJobName(e.target.value)}
                          className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      ) : (
                        <span className="bg-gray-50 border cursor-not-allowed capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {job?.jobName}
                        </span>
                      )}
                    </div>
                    <div className="mt-4">
                      <h6 className="text-[15px]">
                        <span className="text-red-600 pr-1">*</span>Job
                        Description
                      </h6>
                      {isEditing ? (
                        <textarea
                          value={editedJobDescription}
                          onChange={(e) =>
                            setEditedJobDescription(e.target.value)
                          }
                          className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      ) : (
                        <span className="bg-gray-50 border cursor-not-allowed  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {job?.jobDescription}
                        </span>
                      )}
                    </div>
                    <div className="mt-4">
                      <h6 className="text-[15px]">
                        <span className="text-red-600 pr-1">*</span>Choose a job
                        type
                      </h6>
                      {isEditing ? (
                        <div>
                          <div className="flex mt-2">
                            <button
                              onClick={() =>
                                handleTypeButtonClick("Contractor")
                              }
                              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            >
                              Contractor
                            </button>
                            <button
                              onClick={() => handleTypeButtonClick("Employee")}
                              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            >
                              Employee
                            </button>
                            <button
                              onClick={() => handleTypeButtonClick("Intern")}
                              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            >
                              Intern
                            </button>
                          </div>
                          {buttonJobTypeMessage && (
                            <div className="text-custom-text-black">
                              <span className="pr-2 text-green-600">
                                {buttonJobTypeMessage}
                              </span>
                              selected.
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex mt-2">
                          <button
                            className={`text-blue-700  border border-blue-700 ${
                              job && job.jobType === "Contractor"
                                ? "bg-blue-800 text-white"
                                : ""
                            } focus:ring-4 focus:outline-none cursor-not-allowed focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800`}
                            disabled
                          >
                            Contractor
                          </button>
                          <button
                            className={`text-blue-700  border border-blue-700 ${
                              job && job.jobType === "Employee"
                                ? "bg-blue-800 text-white"
                                : ""
                            } focus:ring-4 focus:outline-none cursor-not-allowed focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800`}
                            disabled
                          >
                            Employee
                          </button>
                          <button
                            className={`text-blue-700 border border-blue-700 ${
                              job && job.jobType === "Intern"
                                ? "bg-blue-800 text-white"
                                : ""
                            } focus:ring-4 focus:outline-none cursor-not-allowed focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800`}
                            disabled
                          >
                            Intern
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <h6>
                        <span className="text-red-600 pr-1">*</span>How many
                        open slots?
                      </h6>
                      {isEditing ? (
                        <input
                          type="number"
                          value={job?.jobSlots}
                          onChange={(e) =>
                            setEditedJobSlot(parseInt(e.target.value, 10))
                          }
                          className="bg-gray-50 border w-52 capitalize text-center mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      ) : (
                        <span className="bg-gray-50 border cursor-not-allowed w-52 capitalize text-center mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {job?.jobSlots}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                  <button
                    type="button"
                    onClick={nextPage}
                    className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
              <div
                className={
                  currentPage === 2
                    ? "visible second-page text-custom-text-black"
                    : "hidden"
                }
              >
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-headline"
                    >
                      {title}{" "}
                      <span className="pl-2">
                        <button
                          onClick={handleEditSaveToggle}
                          className="text-sm font-medium leading-6 text-blue-600"
                        >
                          <FontAwesomeIcon
                            icon={faPen}
                            className="hover:text-green-500"
                          />
                        </button>
                      </span>
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
                  <div className="mt-4 flex flex-col">
                    <h6 className="text-[15px]">
                      <span className="text-red-600 pr-1">*</span>Choose a
                      category for this job
                    </h6>
                    <div className="grid grid-cols-4 mt-2 gap-2">
                      {isEditing
                        ? categories.map((category) => (
                            <button
                              key={category._id}
                              onClick={() =>
                                handleCategoryClick(category.jobCategory)
                              }
                              className="text-blue-700 capitalize h-10 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            >
                              {category.jobCategory}
                            </button>
                          ))
                        : categories.map((category) => (
                            <button
                              key={category._id}
                              className={`text-blue-700 capitalize h-10 cursor-not-allowed border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800 ${
                                job?.jobCategory === category.jobCategory
                                  ? "text-white bg-blue-800 "
                                  : ""
                              }`}
                            >
                              <span>{category.jobCategory}</span>
                            </button>
                          ))}
                    </div>
                    {buttonJobCategoryMessage && (
                      <div className="text-custom-text-black">
                        <span className="pr-2 text-green-600">
                          {buttonJobCategoryMessage}
                        </span>
                        selected.
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h6 className="text-[15px]">
                      <span className="text-red-600 pr-1">*</span>Skills
                      required
                    </h6>
                    {isEditing ? (
                      <MultiSelect
                        options={skills}
                        selectedValues={selectedSkills}
                        onSelect={handleSelectSkills}
                        onRemove={handleRemoveSkills}
                        displayValue="name"
                        placeholder="Select skills..."
                        className="pt-2 h-full"
                      />
                    ) : (
                      <div className="flex flex-wrap pt-2">
                        {(job?.jobSkills || []).map(
                          (skill: string | { name: string }, index: number) => (
                            <div
                              key={index}
                              className="bg-blue-600 cursor-not-allowed text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
                            >
                              {/* Check if skill is an object */}
                              {typeof skill === "object"
                                ? (skill as { name: string }).name
                                : skill}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h6 className="text-[15px]">
                      <span className="text-red-600 pr-1">*</span>Work set-up
                    </h6>
                    {isEditing ? (
                      <>
                        <button
                          onClick={() => handleSetupButtonClick("Onsite")}
                          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                          Onsite
                        </button>
                        <button
                          onClick={() => handleSetupButtonClick("WFH")}
                          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                          Work From Home
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className={`text-blue-700 ${
                            job && job?.jobSetUp === "Onsite"
                              ? "text-white bg-blue-800"
                              : ""
                          } border border-blue-700 cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800`}
                          disabled
                        >
                          Onsite
                        </button>
                        <button
                          className={`text-blue-700 ${
                            job && job?.jobSetUp === "WFH"
                              ? "text-white bg-blue-800"
                              : ""
                          } border border-blue-700 cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800`}
                          disabled
                        >
                          Work From Home
                        </button>
                      </>
                    )}
                    {buttonSetUpMessage && (
                      <div className="text-custom-text-black">
                        <span className="pr-2 text-green-600">
                          {buttonSetUpMessage}
                        </span>
                        selected.
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      id="exp-required"
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      checked={isExperienceRequired}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Experience required
                    </label>
                    {isExperienceRequired &&
                      job?.jobExperience !== null &&
                      isEditing && (
                        <div className="pl-2">
                          <input
                            type="number"
                            onChange={(e) =>
                              setEditedExperience(parseInt(e.target.value))
                            }
                            className="bg-gray-50 h-10 border w-52 capitalize text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                      )}
                    {isExperienceRequired &&
                      job?.jobExperience !== null &&
                      !isEditing && (
                        <div className="pl-2">
                          <input
                            disabled
                            type="number"
                            value={job?.jobExperience}
                            className="bg-gray-50 h-10 cursor-not-allowed border w-52 capitalize text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                      )}
                  </div>
                  <div className="mt-4">
                    <h6 className="text-[15px] mb-2">
                      Salary Range (optional)
                    </h6>
                    <div className="flex space-x-4">
                      <div className="flex flex-col">
                        <h6 className="text-[15px]">From</h6>
                        <span className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {job?.jobFromSalary}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <h6 className="text-[15px]">To</h6>
                        <span className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {job?.jobToSalary}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                  <div>
                    <button
                      type="button"
                      // onClick={handleSaveData}
                      className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-800 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Save
                    </button>
                  </div>
                  <div className="last-page-btn">
                    <button
                      type="button"
                      onClick={previousPage}
                      className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Previous
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
