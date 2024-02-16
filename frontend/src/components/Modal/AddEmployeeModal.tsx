import { ChangeEvent, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  positions: string[];
}

function Modal({ isOpen, onClose, title, positions }: ModalProps) {
  const handleClose = () => {
    onClose && onClose();
  };
  const [formData, setFormData] = useState({
    fullname: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: "",
    type: "Fulltime",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleClick = () => {
  //   onSave(formData);
  //   handleClose();
  // };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
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
              <div className="text-custom-text-black">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                    id="modal-headline"
                  >
                    {title}
                  </h3>
                  <span>Personal Information</span>
                  <hr />
                  <div className="mt-4 text-black flex flex-col">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstname">Fullname</label>
                        <input
                          type="text"
                          placeholder="Fullname"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input
                          type="date"
                          placeholder="Birthday"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname">Phone Number</label>
                        <input
                          type="text"
                          placeholder="+123456789"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                    </div>
                    <div className="my-4">
                      <label htmlFor="lastname">Address</label>
                      <input
                        type="text"
                        placeholder="Complete address.."
                        className="border border-custom-text-gray rounded pl-2 w-full h-10"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="position">Position</label>
                        <input
                          type="text"
                          placeholder="Position"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                          value={formData.position}
                          name="position"
                          onChange={handleChange}
                          list="positions-list"
                        />
                        <datalist id="positions-list">
                          {positions.map((position, index) => (
                            <option key={index} value={position} />
                          ))}
                        </datalist>
                      </div>
                      <div>
                        <label htmlFor="lastname">Type</label>
                        <select
                          name="type"
                          className="uppercase border border-custom-text-gray rounded pl-2 w-full h-10"
                        >
                          <option
                            value="Fulltime"
                            className="text-custom-text-gray"
                            selected
                          >
                            Full Time
                          </option>
                          <option
                            value="Parttime"
                            className="text-custom-text-gray"
                          >
                            Part Time
                          </option>
                          <option
                            value="Intern"
                            className="text-custom-text-gray"
                          >
                            Intern
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="my-4">
                      <label htmlFor="lastname">Skills</label>
                      <textarea
                        placeholder="Input skills here..."
                        className="border border-custom-text-gray rounded pl-2 w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
