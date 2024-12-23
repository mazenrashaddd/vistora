import React from "react";
import "./style.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <input
          type="number"
          max={5}
          min={1}
          className="m-4 rounded-3"
          placeholder="Write a Rate from 1 To 5"
        />
        <textarea
          name="Comment"
          className="m-4 rounded-3"
          placeholder="Write a Comment"
          type="text"
        />
        <button onClick={submit()} className="btn btn-dark" type="submit">
          submit
        </button>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
