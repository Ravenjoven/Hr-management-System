import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React from "react";
interface ModalProps {
  isView: boolean;
  isClose: () => void;
  user: {
    id: number;
    fullname: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: number;
    position: string;
    age: string;
    gender: string;
    type: string;
    address: string;
    jobSkills: Object[];
    createdAt: Date;
  } | null;
}

export default function ViewEmployeeModal({
  isView,
  isClose,
  user,
}: ModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent event bubbling
    isClose && isClose();
  };
  return (
    <>
      {isView && (
        <div className="fixed z-50 inset-0 overflow-y-auto  font-montserrat">
          <div className="flex items-center justify-center min-w-screen min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
              className="inline-block bg-white w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
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
                      User Details
                    </h3>
                    {/* <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {user && ( // Check if user exists
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          user id: {user.id}
                        </h3>
                      )}
                    </h3> */}
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
                  <div className="mt-2 flex">
                    <div className="flex justify-start items-left">
                      <img
                        src="./images/office.png"
                        className="h-36 w-36 rounded-2xl border border-custom-text-black"
                      />
                    </div>
                    <div className="details flex flex-col pl-10 py-2 space-y-2">
                      <div>
                        Name: <span>{user?.fullname}</span>
                      </div>
                      <div>
                        Email: <span>{user?.email}</span>
                      </div>
                      <div>
                        Contact: <span>{user?.phoneNumber}</span>
                      </div>
                      <div>
                        Date of Birth: <span>{user?.dateOfBirth}</span>
                      </div>
                      <div>
                        Age: <span>{user?.age}</span>
                      </div>
                    </div>
                  </div>
                  <hr className="text-custom-text-black mt-2" />
                  <div className="mt-2 flex">
                    <div className="w-full h-full ">
                      <label htmlFor="skills" className="font-bold">
                        Skills
                      </label>
                      <div className="ml-2 flex flex-col">
                        <span>.net</span>
                        <span>mongodb</span>
                      </div>
                    </div>
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
