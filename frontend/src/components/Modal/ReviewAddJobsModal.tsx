import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface Skill {
  name: string;
  value: string;
}

interface FormData {
  jobName: string;
  jobDescription: string;
  jobType: string;
  jobSlots: number;
  jobCategory: string;
  jobSkills: Skill[];
  jobSetUp: string;
  jobExperience: number;
  jobFromSalary: number;
  jobToSalary: number;
}

interface ReviewAddJobsModalProps {
  isOpen: boolean;
  isClose: () => void;
  formData: FormData;
}

const ReviewAddJobsModal: React.FC<ReviewAddJobsModalProps> = ({
  isOpen,
  isClose,
  formData,
}) => {
  const handleClose = () => {
    isClose && isClose();
  };

  const addJobs = () => {
    axios
      .post("http://localhost:9000/api/jobs/add", formData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        alert("Send Successfully");
        setTimeout(() => {
          isClose(); // Close modal after 3 seconds
        }, 3000);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 font-montserrat">
          <div className="flex items-center justify-center min-w-screen min-h-screen px-4 pt-4 pb-20 text-center">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
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
              <div className="first-page text-custom-text-black">
                <div className="flex justify-between items-center">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-headline"
                  >
                    Review Job Posting
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
                  <div className="grid grid-cols-2">
                    <div className="mt-4">
                      <h4 className="font-semibold">
                        Job Name:
                        <span className="font-normal capitalize pl-2">
                          {formData.jobName}
                        </span>
                      </h4>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">
                        Job Type:
                        <span className="font-normal capitalize pl-2">
                          {formData.jobType}
                        </span>
                      </h4>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">
                        Job Slot:
                        <span className="font-normal capitalize pl-2">
                          {formData.jobSlots}
                        </span>
                      </h4>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">
                        Job Category:
                        <span className="font-normal capitalize pl-2 text-[13px]">
                          {formData.jobCategory}
                        </span>
                      </h4>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">
                        Work set-up:
                        <span className="font-normal capitalize pl-2">
                          {formData.jobSetUp}
                        </span>
                      </h4>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">
                        Salary:
                        <span className="font-normal capitalize pl-2">
                          {formData.jobFromSalary} - {formData.jobToSalary}
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">
                      Job Description:
                      <span className="font-normal capitalize pl-2">
                        {formData.jobDescription}
                      </span>
                    </h4>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Selected Skills:</h4>
                    <ul className="grid grid-cols-2 gap-4 font-normal capitalize pl-2">
                      {formData.jobSkills.map((skill, index) => (
                        <li
                          key={index}
                          className="w-full bg-blue-500 rounded text-white text-center h-8 py-1"
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Display other formData properties similarly */}
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                  <button
                    type="button"
                    onClick={addJobs}
                    className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Post now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewAddJobsModal;
