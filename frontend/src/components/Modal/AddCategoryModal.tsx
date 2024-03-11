import React,{ useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function AddCategory({ isOpen, onClose, title }: ModalProps) {
  const [categoryMessage, setCategoryMessage] = useState("");
  const [formData, setFormData] = useState({
    jobCategory: "",
  });

  const addCategory = () => {
    axios
      .post("http://localhost:9000/api/jobs/addcategory", formData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        alert("Add Successfully");
        setCategoryMessage("Add Successfully");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat top-40">
          <div className="flex items-center justify-center min-w-screen px-4 pt-4 pb-20 text-center sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden" aria-hidden="true">
              &#8203;
            </span>
            <div
              className="inline-block bg-white w-full rounded-lg px-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
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
                  <hr />
                  <div className="mt-4 text-black flex flex-col">
                    <form
                      method="post"
                      encType="multipart/form-data"
                      className="space-y-2"
                    >
                      <div>
                        <label
                          htmlFor="inputname"
                          className="block text-gray-800 font-semibold text-sm"
                        >
                          Category Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="inputname"
                            value={formData.jobCategory}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                jobCategory: e.target.value,
                              })
                            }
                            required
                            className="block w-full capitalize rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                          />
                        </div>
                      </div>
                    </form>
                    <span
                      className={
                        categoryMessage === "Add Successfully"
                          ? "text-green-600 pt-4"
                          : "text-red-600 pt-2"
                      }
                    >
                      {categoryMessage}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={addCategory}
                  className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
