import React from "react";

export default function AddCategory() {
  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat top-40">
        <div className="flex items-center justify-center min-w-screen px-4 pt-4 pb-20 text-center sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
          </div>
          <span className="hidden" aria-hidden="true">
            &#8203;
          </span>
          <div
            className="inline-block   rounded-lg px-4 text-left overflow-hidden transform transition-all sm:align-middle  sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="container">
              <div className="folder">
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
              <div className="title">sending files ready...</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
