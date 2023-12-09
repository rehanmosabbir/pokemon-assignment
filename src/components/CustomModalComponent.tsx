// components/Modal.tsx
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
  info: any;
}

Modal.setAppElement("#__next"); // Set the app element for accessibility

const CustomModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  info,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-4 rounded-md"
      contentLabel="Example Modal"
    >
      <button
        className="absolute top-2 right-2 hover:text-gray-700"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faXmark} className="text-red-800 fa-xl" />;
      </button>
      {children}
    </Modal>
  );
};

export default CustomModalComponent;
