import React from "react";

import Rock from "../assets/svg/Rock.svg";
import Paper from "../assets/svg/Paper.svg";
import Scissors from "../assets/svg/Scissors.svg";

import "./Icons.css";

function Icons({ setYourChoice }) {
  const makeYourChoice = (choice, icon) => {
    setYourChoice({ choice, icon });
  };
  return (
    <div className="icons">
      <div>
        <button
          className="icon rock"
          onClick={() => makeYourChoice("Rock", Rock)}
        >
          <img src={Rock} alt="Rock Icon" />
        </button>
        <p>Rock</p>
      </div>
      <div>
        <button
          className="icon paper"
          onClick={() => makeYourChoice("Paper", Paper)}
        >
          <img src={Paper} alt="Paper Icon" />
        </button>
        <p>Paper</p>
      </div>
      <div>
        <button
          className="icon scissors"
          onClick={() => makeYourChoice("Scissors", Scissors)}
        >
          <img src={Scissors} alt="Scissors Icon" />
        </button>
        <p>Scissors</p>
      </div>
    </div>
  );
}

export default Icons;
