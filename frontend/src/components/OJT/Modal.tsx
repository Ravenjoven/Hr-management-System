import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [skillsRequirements, setSkillsRequirements] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, you can send data to server or do something else
    console.log('Form submitted:', { fullName, email, contact, skillsRequirements });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        Enter Your Information
                      </h3>
                      <div className="mt-5">
                        <div className="mb-4">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="tel"
                            placeholder="Contact Number"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => setContact(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <textarea
                            placeholder="Skills Requirements"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            rows={4}
                            onChange={(e) => setSkillsRequirements(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
