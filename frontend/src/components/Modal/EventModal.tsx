import React, {useState} from "react";

interface ModalProps {
  onClose: () => void;
  event:any;

}


const ModalComponent: React.FC<ModalProps> = ({event, onClose}) => {

  const handleClose = () => {
    onClose && onClose();
  };
  return (
    <>
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
                <span>Events And Reminders</span>
                <hr />
                <div className="w-full p-8 flex flex-col mb-2 justify-center items-center  sm:ml-3 sm:w-auto sm:text-sm">
                 
                  <p className="flex justify-center items-center">
                    {event.title}
                  </p>
                  <p className="flex justify-center items-center">
                    {event.startStr}
                  </p>
                </div>
              
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse ">
              <button
             
                type="button"
                className="w-full md:inline-flex inline-block mb-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Add 
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
    </>
  );
};

export default ModalComponent;
