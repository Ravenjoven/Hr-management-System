import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isClick: boolean;
  isClose: () => void;
  title: string;
}

export default function SendContractForm({
  isClick,
  isClose,
  title,
}: ModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileMessage, setFileMessage] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };
  const handleClose = () => {
    isClose && isClose();
  };
  const [formData, setFormData] = useState({
    file: "",
  });

  const handleSaveData = () => {
    if (file) {
      const formData = new FormData();
      formData.append("contract_file", file);
      // Now you can send formData to your backend API using fetch or any other method
      console.log("Form Data:", formData);
      setFileMessage("Send Successfully");
    } else {
      setFileMessage("No File Uploaded");
    }
  };

  return (
    <>
      {isClick && (
        <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat">
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
                    <form method="post" encType="multipart/form-data">
                      <input
                        type="file"
                        name="contract_file"
                        onChange={handleFileChange}
                      />
                    </form>
                    <span
                      className={
                        fileMessage === "Send Successfully"
                          ? "text-green-600"
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
                  onClick={handleSaveData}
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
