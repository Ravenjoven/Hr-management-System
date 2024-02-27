import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ViewJobModal {
  isViewJobs: boolean;
  isCloseJobs: () => void;
}

export default function ViewEditJobsModal({
  isViewJobs,
  isCloseJobs,
}: ViewJobModal) {
  const handleClose = () => {
    isCloseJobs && isCloseJobs();
  };
  return (
    <>
      {isViewJobs && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
          <div
            className="bg-white md:w-[1000px] w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="first-page text-custom-text-black">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <div className="flex justify-between items-center">
                  <h3
                    className="text-lg font-medium leading-6 capitalize text-gray-900"
                    id="modal-headline"
                  >
                    Job Details
                  </h3>
                  <button className="text-lg font-medium leading-6 text-gray-900">
                    <FontAwesomeIcon
                      icon={faClose}
                      onClick={handleClose}
                      className="hover:text-green-500"
                    />
                  </button>
                </div>
                <hr className="mb-2" />
                <div className="flex flex-col ">
                  <h1>testing</h1>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse "></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
