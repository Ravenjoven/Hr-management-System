import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  user: {
    id: number;
    applicantName: string;
    position: string;
    year_experience: string;
    date_applied: string;
    img: string;
  } | null;
}

export default function ViewApplicantDetails({
  isOpen,
  isClose,
  user,
}: ModalProps) {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent event bubbling
    isClose && isClose();
  };
  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  const handleCloseImage = () => {
    setIsImageClicked(false);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
          <div
            className="bg-white md:w-[800px] w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="first-page text-custom-text-black">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <div className="flex justify-between items-center">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-headline"
                  >
                    Application Details
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
                <hr className="mb-2" />
                <div className="flex flex-col mt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="left-details w-full h-full">
                      <div className="text-center py-2 border">
                        Inputed Information from jobs
                      </div>
                    </div>
                    <div className="right-details border border-black w-full md:h-[500px] h-full">
                      <img
                        src={user?.img}
                        onClick={handleImageClick}
                        className="h-full w-full cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Move to pending
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full md:inline-flex inlune-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Rejected
                </button>
              </div>
            </div>
          </div>
          {/* Modal for displaying the image */}
          {isImageClicked && (
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="max-w-screen-lg">
                <img
                  src={user?.img}
                  alt="Full Screen"
                  className="max-w-full md:h-[640px]"
                />
                <button
                  onClick={handleCloseImage}
                  className="absolute top-4 right-4 text-white text-lg focus:outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
