import React from "react";

import Rock from "./svg/Rock.svg";
import Paper from "./svg/Paper.svg";
import Scissors from "./svg/Scissors.svg";

import "./Icons.css";

function Icons() {
  return (
    <div className="icons">
      <div>
        <button className="icon rock">
          <img src={Rock} alt="Rock Icon" />
        </button>
        <p>Rock</p>
      </div>
      <div>
        <button className="icon paper">
          <img src={Paper} alt="Paper Icon" />
        </button>
        <p>Paper</p>
      </div>
      <div>
        <button className="icon scissors">
          <img src={Scissors} alt="Scissors Icon" />
        </button>
        <p>Scissors</p>
      </div>
    </div>
  );
}

export default Icons;
