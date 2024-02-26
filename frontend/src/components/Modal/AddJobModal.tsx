import { ChangeEvent, useState } from "react";
import MultiSelect from "multiselect-react-dropdown";
import ReviewAddJobsModal from "./ReviewAddJobsModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

function Modal({ isOpen, onClose, title }: ModalProps) {
  const [formData, setFormData] = useState({
    jobName: "",
    jobDescription: "",
    jobType: "",
    jobRoles: "",
    jobCategory: "",
    jobSkills: [],
    jobSetUp: "",
    jobExperience: "",
    jobSalary: [0, 1],
  });
  const [categories, setCategories] = useState([
    {
      id: 0,
      jobCategory: "IT/Computer",
    },
    {
      id: 1,
      jobCategory: "Financial Associate",
    },
    {
      id: 2,
      jobCategory: "Advetising/Media",
    },
    {
      id: 3,
      jobCategory: "Fullstack Developer",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isExperienceRequired, setIsExperienceRequired] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    { name: "Hardworking", value: "Hardworking" },
    { name: "Time Management", value: "Time Management" },
    { name: "Critical Thinking", value: "Critical Thinking" },
    { name: "Technincal", value: "Technincal" },
  ];
  const handleCheckboxChange = (event: any) => {
    setIsExperienceRequired(event.target.checked);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
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
    setFormData({
      ...formData,
      jobSkills: selectedList,
    });
  };
  const handleCategoryClick = (category: any) => {
    console.log("Category clicked:", category);
    setFormData({
      ...formData,
      jobCategory: category,
    });
  };
  const handleClose = () => {
    onClose && onClose();
  };
  const handleTypeButtonClick = (type: string) => {
    console.log("Type clicked:", type);
    setFormData({
      ...formData,
      jobType: type,
    });
  };
  const handleSetupButtonClick = (val: any) => {
    console.log("Setup clicked:", val);
    setFormData({
      ...formData,
      jobSetUp: val,
    });
  };
  const handleSaveData = () => {
    console.log("Form Data:", formData);
    setIsReviewModalOpen(true);
    // console.log("Form Data:", formData);
    // setFormData({
    //   jobName: "",
    //   jobDescription: "",
    //   jobType: "",
    //   jobRoles: "",
    //   jobCategory: "",
    //   jobSkills: [],
    //   jobSetUp: "",
    //   jobExperience: "",
    //   jobSalary: "",
    // });
    // setIsReviewModalOpen(true);
  };
  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto  font-montserrat">
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
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                    id="modal-headline"
                  >
                    {title}
                  </h3>
                  <span className="font-semibold text-lg">
                    Let's set up your new job
                  </span>
                  <hr />
                  <div className="mt-4  flex flex-col">
                    <div className="mt-4">
                      <h6 className="text-[15px]">
                        <span className="text-red-600 pr-1">*</span>What kind of
                        job is this?
                      </h6>
                      <input
                        type="text"
                        name="jobName"
                        value={formData.jobName}
                        onChange={(e) =>
                          setFormData({ ...formData, jobName: e.target.value })
                        }
                        className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mt-4">
                      <h6 className="text-[15px]">
                        <span className="text-red-600 pr-1">*</span>Job
                        Description
                      </h6>
                      <textarea
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            jobDescription: e.target.value,
                          })
                        }
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mt-4">
                      <h6 className="text-[15px]">
                        <span className="text-red-600 pr-1">*</span>Choose a job
                        type
                      </h6>
                      <div className="flex mt-2">
                        <button
                          onClick={() => handleTypeButtonClick("Contractor")}
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
                    </div>
                    <div className="mt-4">
                      <h6>
                        <span className="text-red-600 pr-1">*</span>How many
                        open slots?
                      </h6>
                      <input
                        type="number"
                        name="jobRoles"
                        value={formData.jobRoles}
                        onChange={(e) =>
                          setFormData({ ...formData, jobRoles: e.target.value })
                        }
                        className="bg-gray-50 border w-52 capitalize text-center mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
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
                <div className="mt-4  flex flex-col">
                  <div className="mt-4 flex flex-col">
                    <h6 className="text-[15px]">
                      <span className="text-red-600 pr-1">*</span>Choose a
                      category for this job
                    </h6>
                    <div className="grid grid-cols-3 mt-2 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() =>
                            handleCategoryClick(category.jobCategory)
                          }
                          className="text-blue-700 h-10 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                          {category.jobCategory}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6 className="text-[15px]">
                      <span className="text-red-600 pr-1">*</span>Skill required
                    </h6>
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
                  <div className="mt-4">
                    <h6 className="text-[15px]">
                      <span className="text-red-600 pr-1">*</span>Work set-up
                    </h6>
                    <div className="flex mt-2">
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
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      id="exp-required"
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Experience required
                    </label>
                    {isExperienceRequired && (
                      <div className="pl-2">
                        <input
                          type="number"
                          value={formData.jobExperience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              jobExperience: e.target.value,
                            })
                          }
                          className="bg-gray-50 h-10 border w-52 capitalize text-center  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        <input
                          type="number"
                          value={formData.jobSalary[0]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              jobSalary: [
                                parseInt(e.target.value), // Convert to number
                                formData.jobSalary[0],
                              ],
                            })
                          }
                          className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h6 className="text-[15px]">To</h6>
                        <input
                          type="number"
                          value={formData.jobSalary[1]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              jobSalary: [
                                parseInt(e.target.value), // Convert to number
                                formData.jobSalary[1],
                              ],
                            })
                          }
                          className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                  <div>
                    <button
                      type="button"
                      onClick={handleSaveData}
                      className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-800 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Review
                    </button>
                    {isReviewModalOpen && (
                      <ReviewAddJobsModal
                        isOpen={isReviewModalOpen}
                        isClose={handleCloseReviewModal}
                        formData={formData}
                      />
                    )}
                  </div>
                  <div className="last-page-btn">
                    <button
                      type="button"
                      onClick={previousPage}
                      className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full md:inline-flex inlune-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Close
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

export default Modal;
