import React from "react";

import Loader from "../assets/Loader.svg";
import CurbLogo from "../assets/Curb_logo.png";

function WaitingModal({ icon, toggleModal }) {
  return (
    <div className="waiting-modal">
      <button className="close-button" onClick={toggleModal}></button>
      <p className="waiting-text">{"WAITING CURB’S CHOOSE"}</p>
      <img src={icon} className="your-choice-icon" alt="Your Choice icon" />
      <p className="your-bet-text">Your bet</p>
      <img src={Loader} className="loader-icon" alt="Loader icon" />
      <img src={CurbLogo} className="curb-icon" alt="Curb Logo" />
    </div>
  );
}

export default WaitingModal;
