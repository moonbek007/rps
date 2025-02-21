import React from "react";

import WaitingModal from "./WaitingModal/WaitingModal";
import EndModal from "./EndModal/EndModal";

import "./Modal.css";

function Modal({
  icon,
  setIsModalOpen,
  setYourChoice,
  gameState,
  setGameState,
  winner,
}) {
  const toggleModal = () => {
    setIsModalOpen(false);
    setYourChoice({ choice: "", icon: "" });
    setGameState("start");
  };
  return (
    <div className="modal">
      {gameState === "waiting" ? (
        <WaitingModal icon={icon} toggleModal={toggleModal} />
      ) : (
        <EndModal toggleModal={toggleModal} winner={winner} />
      )}
      ;
    </div>
  );
}

export default Modal;
