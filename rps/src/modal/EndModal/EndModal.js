import React from "react";

function EndModal({ toggleModal, winner }) {
  return (
    <div className="end-modal">
      <button className="close-button" onClick={toggleModal}></button>
      <p className="result-text">
        {winner.winner === "Draw"
          ? "DRAW!"
          : winner.winner === "You"
          ? "YOU WIN!"
          : "YOU LOST!"}
      </p>
      <p className="winner-text">
        {winner.winner === "Curb"
          ? `Curb with ${winner.choice} wins`
          : winner.winner === "You"
          ? `You with ${winner.choice} win`
          : ""}
      </p>
      <img
        src={winner.icon}
        className="winner-choice-icon"
        alt="Winner Choice icon"
      />
      <button className="ok-button" onClick={toggleModal}>
        Ok
      </button>
    </div>
  );
}

export default EndModal;
