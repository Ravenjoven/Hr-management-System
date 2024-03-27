import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import PdfViewer from "../pdf/PdfViewer";
import SendContractForm from "./SendContractForm";
import React from "react";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface ModalProps {
  viewApplicant: boolean;
  closeApplicant: () => void;
  user: {
    _id: string;
    jobs: string[];
    fullName: string;
    email: string;
    contact: string;
    linkedIn: string;
    jobType: string;
    roles: number;
    skills: string;
    resume: string;
    application: string;
    createdAt: Date;
  } | null;
}

interface Comments {
  comment: string;
  createdAt: Date;
}

export default function ViewApplicantDetails({
  viewApplicant,
  closeApplicant,
  user,
}: ModalProps) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [comments, setComments] = useState<Comments[]>([]);
  const [isFilesClicked, setIsFilesClicked] = useState(false);
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent event bubbling
    closeApplicant && closeApplicant();
  };
  const handleImageClick = () => {
    setIsFilesClicked(true);
  };
  const openFormModal = () => {
    setIsOpenForm(true);
  };
  const closeFormModal = () => {
    setIsOpenForm(false);
  };
  const handleCloseImage = () => {
    setIsFilesClicked(false);
  };

  useEffect(() => {
    const fetchApplicantComment = async () => {
      try {
        const applicantId = user?._id;
        const response = await axios.get(
          `http://localhost:9000/api/jobs/getComment/${applicantId}`
        );
        setComments(response.data.comment);
        console.log(response.data.comment);
      } catch (error) {
        console.error("Error fetching comment");
      }
    };
    fetchApplicantComment();
  }, []);

  return (
    <>
      {viewApplicant && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
          <div
            className="bg-white md:w-[1215px] w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all"
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
                    {user?.fullName}
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
                <div className="flex flex-col ">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="left-details w-full h-full">
                      <div className="text-left py-2">
                        <span className="font-bold">Application Letter</span>
                        <div className="mt-2 break-words normal-case">
                          {user?.application}
                        </div>
                      </div>
                      <div className="text-left py-2 mt-2">
                        <span className="font-bold ">Other Information</span>
                        <div className="mt-2 flex flex-col">
                          <div>
                            Email:{" "}
                            <span className="normal-case">{user?.email}</span>
                          </div>
                          <div>
                            Contact Number:{" "}
                            <span className="normal-case">{user?.contact}</span>
                          </div>
                          <div>
                            LinkedIn:{" "}
                            <a
                              href={user?.linkedIn}
                              className="normal-case text-[10px] font-bold text-blue-700 border-b border-blue-700"
                            >
                              {user?.linkedIn}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="text-left py-2 mt-2">
                        <span className="font-bold">Skills</span>
                        <div className="mt-2 flex flex-col">
                          {user?.skills &&
                            JSON.parse(user.skills).map(
                              (skill: any, index: any) => (
                                <div key={index} className="mb-2">
                                  <span className="text-white bg-blue-500 text-[18px] rounded">
                                    {skill.name}
                                  </span>
                                </div>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                    <div
                      title="Click to view the image"
                      className="right-details border-4 border-gray-400 w-full md:h-[440px] h-full flex justify-center items-center"
                    >
                      {user?.resume ? (
                        <div
                          onClick={handleImageClick}
                          className="h-full w-full cursor-pointer overflow-y-scroll overflow-x-hidden"
                        >
                          <PdfViewer userId={user._id} fileName={user.resume} />
                        </div>
                      ) : (
                        <h1>No File Uploaded</h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Reject
                </button>
                <button
                  type="button"
                  onClick={openFormModal}
                  className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Accept
                </button>
                {user?.email !== undefined && (
                  <SendContractForm
                    isClick={isOpenForm}
                    isClose={closeFormModal}
                    title={"Send Contract"}
                    to={user.email}
                    subjects={"Form of Contract"}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Modal for displaying the pdf */}
          {isFilesClicked && user?.resume && (
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="max-w-screen-lg">
                <div className="max-w-screen max-h-screen overflow-y-auto">
                  <PdfViewer userId={user._id} fileName={user.resume} />
                </div>
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
