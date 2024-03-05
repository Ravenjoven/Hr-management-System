import { ChangeEvent, useState } from "react";
import MultiSelect from "multiselect-react-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  positions: string[];
  types: string[];
}

function AddEmployeeModal({
  isOpen,
  onClose,
  title,
  positions,
  types,
}: ModalProps) {
  const skills = [
    { name: "Hardworking", value: "option1" },
    { name: "Time Management", value: "option2" },
    { name: "Critical Thinking", value: "option3" },
    { name: "Technincal", value: "option4" },
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelectSkills = (selectedList: any) => {
    setSelectedSkills(selectedList);
    setFormData({
      ...formData,
      jobSkils: selectedList,
    });
  };

  const handleRemoveSkills = (selectedList: any) => {
    setSelectedSkills(selectedList);
    setFormData({
      ...formData,
      jobSkils: selectedList,
    });
  };

  const handleClose = () => {
    onClose && onClose();
  };
  const [formData, setFormData] = useState({
    fullname: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    jobSkils: [],
    address: "",
    position: "",
    type: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveData = () => {
    console.log("Form Data:", formData);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat">
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
              className="inline-block bg-white w-full rounded-lg px-4  text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="text-custom-text-black">
                <div className="text-center sm:mt-0 sm:text-left">
                  <div className="mb-3 flex justify-between items-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-headline"
                    >
                      {title}
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
                  <span>Personal Information</span>
                  <hr />
                  <div className="mt-4 text-black flex flex-col">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="Fullname">Fullname</label>
                        <input
                          type="text"
                          id="Fullname"
                          value={formData.fullname}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullname: e.target.value,
                            })
                          }
                          placeholder="Complete Name"
                          className="border capitalize border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input
                          type="date"
                          id="date-of-birth"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              dateOfBirth: e.target.value,
                            })
                          }
                          placeholder="Birthday"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="example@gmail.com"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname">Phone Number</label>
                        <input
                          type="text"
                          id="lastname"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phoneNumber: e.target.value,
                            })
                          }
                          placeholder="+123456789"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                        />
                      </div>
                    </div>
                    <div className="my-4">
                      <label htmlFor="Skills">Skills</label>
                      <MultiSelect
                        options={skills}
                        id="Skills"
                        selectedValues={selectedSkills}
                        onSelect={handleSelectSkills}
                        onRemove={handleRemoveSkills}
                        displayValue="name"
                        placeholder="Input skills here..."
                        className="pt-2 h-full"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="Position">Position</label>
                        <input
                          type="text"
                          id="position"
                          value={formData.position}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              position: e.target.value,
                            })
                          }
                          placeholder="Position"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                          name="position"
                          list="positions-list"
                        />
                        <datalist id="positions-list">
                          {positions.map((position, index) => (
                            <option key={index} value={position} />
                          ))}
                        </datalist>
                      </div>
                      <div>
                        <label htmlFor="Type">Type</label>
                        <input
                          type="text"
                          id="Type"
                          value={formData.type}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              type: e.target.value,
                            })
                          }
                          placeholder="Type"
                          className="border border-custom-text-gray rounded pl-2 w-full h-10"
                          name="type"
                          list="types-list"
                        />
                        <datalist id="types-list">
                          {types.map((types, index) => (
                            <option key={index} value={types} />
                          ))}
                        </datalist>
                      </div>
                    </div>
                    <div className="my-4">
                      <label htmlFor="Address">Address</label>
                      <input
                        type="text"
                        id="Address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: e.target.value,
                          })
                        }
                        placeholder="Complete address.."
                        className="border capitalize border-custom-text-gray rounded pl-2 w-full h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={handleSaveData}
                  className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
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
      )}
    </>
  );
}

export default AddEmployeeModal;
