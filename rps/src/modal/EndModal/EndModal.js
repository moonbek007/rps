import React from "react";

function EndModal({ icon, toggleModal }) {
  return (
    <div className="end-modal">
      <button className="close-button" onClick={toggleModal}></button>
      <p className="result-text">{"YOU LOST!"}</p>
      <p className="winner-text">Curb with paper wins</p>
      <img src={icon} className="winner-choice-icon" alt="Your Choice icon" />
      <button className="ok-button" onClick={toggleModal}>
        Ok
      </button>
    </div>
  );
}

export default EndModal;
