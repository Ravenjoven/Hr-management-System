// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const IdleModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <div className="mb-2">{children}</div>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default IdleModal;
