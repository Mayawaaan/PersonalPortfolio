import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 text-white p-4 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] transform transition-transform duration-300"
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 p-1 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:text-black hover:scale-110 transition-transform shadow-md"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;