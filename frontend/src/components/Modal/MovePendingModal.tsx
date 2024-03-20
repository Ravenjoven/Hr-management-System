import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";
import LoadingFileAnimation from "../LoadingFileAnimation";

interface ModalProps {
  isClick: boolean;
  isClose: () => void;
  id: string;
}

export default function MoveApplicantModal({
  isClick,
  isClose,
  id,
}: ModalProps) {
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  const handleClose = () => {
    isClose && isClose();
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("comment", comment);
    formData.append("status", "Pending");

    try {
      await axios.put("http://localhost:9000/api/movePending", formData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      alert("Move Successfully");
      setMessage("Move Successfully");
      setTimeout(() => {
        isClose();
      }, 1000);
    } catch (error) {
      setMessage("Move Unsuccessfully");
    }
  };

  return (
    <>
      {isClick && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat">
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
                    ></h3>
                    <button
                      onClick={isClose}
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
                    <form method="post" className="space-y-2">
                      <div className="flex-col">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Comment
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your comment here..."
                          value={comment}
                          onChange={(e) => {
                            setComment(e.target.value);
                          }}
                          required
                        ></textarea>
                      </div>
                    </form>
                    <span
                      className={
                        message === "Move Successfully"
                          ? "text-green-600 pt-4"
                          : "text-red-600 pt-2"
                      }
                    >
                      {message}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loadingAnimation && <LoadingFileAnimation />}
    </>
  );
}
