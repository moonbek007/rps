import { useState, useEffect } from "react";
import Icons from "./icons/Icons";
import Modal from "./modal/Modal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [yourChoice, setYourChoice] = useState({ choice: "", icon: "" });

  useEffect(() => {
    if (yourChoice.choice !== "") {
      setIsModalOpen(true);
    }
    console.log(yourChoice);
  }, [yourChoice.choice]);

  return (
    <div className="App">
      <div className="body">
        {isModalOpen ? (
          <Modal
            icon={yourChoice.icon}
            setIsModalOpen={setIsModalOpen}
            setYourChoice={setYourChoice}
          />
        ) : (
          ""
        )}
        <div className="main-display">
          <h1 className="title">ROCK – PAPER – SCISSORS</h1>
          <p className="game-description">
            Rock Paper Scissors is a zero sum game that is usually played by two
            people using their hands and no tools. The idea is to make shapes
            with an outstretched hand where each shape will have a certain
            degree of power and will lead to an outcome.
          </p>
          <p className="select-title">SELECT YOUR BET</p>
          <Icons setYourChoice={setYourChoice} />
        </div>
      </div>
    </div>
  );
}

export default App;
