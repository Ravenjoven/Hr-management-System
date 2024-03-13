import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";

interface ModalProps {
  isClick: boolean;
  isClose: () => void;
  title: string;
  to: string;
  subjects: string;
}

export default function SendContractForm({
  isClick,
  isClose,
  title,
  to,
  subjects,
}: ModalProps) {
  const [fileMessage, setFileMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const sendMail = () => {
    const formData = new FormData();
    formData.append("email", to);
    formData.append("subject", subjects);
    files.forEach((file) => formData.append("file", file));
    axios
      .post("http://localhost:9000/api/sendemail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        setFileMessage("Send Successfully");
        setTimeout(() => {
          isClose(); // Close modal after 3 seconds
        }, 3000);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleClose = () => {
    isClose && isClose();
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
                      <div className="flex">
                        <label htmlFor="Subject" className="pr-2 font-semibold">
                          Subject:
                        </label>
                        <input
                          type="text"
                          value={subjects}
                          className="w-full"
                        />
                      </div>
                      <div className="flex">
                        <label htmlFor="email" className="pr-2 font-semibold">
                          To:
                        </label>
                        <input type="text" className="w-full" value={to} />
                      </div>
                      <div className="flex">
                        <label htmlFor="upload" className="pr-2 font-semibold">
                          Upload File:
                        </label>
                        <input
                          type="file"
                          name="file"
                          onChange={handleFileChange}
                          className="cursor-pointer"
                        />
                      </div>
                    </form>
                    <span
                      className={
                        fileMessage === "Send Successfully"
                          ? "text-green-600 pt-4"
                          : "text-red-600 pt-2"
                      }
                    >
                      {fileMessage}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={sendMail}
                  className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
