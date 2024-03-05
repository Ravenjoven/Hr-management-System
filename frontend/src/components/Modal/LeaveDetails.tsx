import React from "react";

interface LeaveDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  leaveData: {
    leaveType: string;
    fromDate: string;
    toDate: string;
    reason: string;
  };
  closeModal: () => void;
  showModal: boolean;
  onConfirm: () => void; // Define onConfirm property for confirmation action
}

const LeaveDetailsModal: React.FC<LeaveDetailsModalProps> = ({
  showModal,
  closeModal,
  isOpen,
  onClose,
  leaveData,
  onConfirm, // Include onConfirm in the component props
}) => {
  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="absolute inset-0 bg-gray-100 opacity-75"></div>
        <div className="bg-white p-8 rounded-lg z-50 w-[700px]">
          <h2 className="text-2xl font-bold mb-4">Leave Details</h2>
          <p><strong>Leave Type:</strong> {leaveData.leaveType}</p>
          <p><strong>From:</strong> {leaveData.fromDate}</p>
          <p><strong>To:</strong> {leaveData.toDate}</p>
          <p><strong>Reason:</strong> {leaveData.reason}</p>
          <div className="flex justify-end mt-4">
            <button
              className="mr-4 py-2 px-4 rounded-xl bg-custom-text-green text-white"
              onClick={onConfirm} // Call onConfirm function on button click
            >
              Confirm
            </button>
            <button
              className="py-2 px-4 rounded-xl bg-gray-400 text-white"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LeaveDetailsModal;
