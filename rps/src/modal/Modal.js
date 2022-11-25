import React from "react";

import WaitingModal from "./WaitingModal/WaitingModal";
import EndModal from "./EndModal/EndModal";

import "./Modal.css";

function Modal({ icon, setIsModalOpen, setYourChoice }) {
  const toggleModal = () => {
    setIsModalOpen(false);
    setYourChoice({ choice: "", icon: "" });
    console.log("clicked");
  };
  return <EndModal icon={icon} toggleModal={toggleModal} />;
}

export default Modal;
