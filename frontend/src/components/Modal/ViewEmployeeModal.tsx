import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isView: boolean;
  isClose: () => void;
  user: {
    id: string;
    name: string;
    position: string;
    contact: string;
    type: string;
    date_hire: string;
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
                      Employee Details
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
                        Name: <span>{user?.name}</span>
                      </div>
                      <div>
                        Position: <span>{user?.position}</span>
                      </div>
                      <div>
                        Contact: <span>{user?.contact}</span>
                      </div>
                      <div>
                        Type: <span>{user?.type}</span>
                      </div>
                      <div>
                        Hire Date: <span>{user?.date_hire}</span>
                      </div>
                    </div>
                  </div>
                  <hr className="text-custom-text-black mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
