import Icons from "./icons/Icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <body className="body">
        <div className="main-display">
          <h1 className="title">ROCK – PAPER – SCISSORS</h1>
          <p className="game-description">
            Rock Paper Scissors is a zero sum game that is usually played by two
            people using their hands and no tools. The idea is to make shapes
            with an outstretched hand where each shape will have a certain
            degree of power and will lead to an outcome.
          </p>
          <p className="select-title">SELECT YOUR BET</p>
          <Icons />
        </div>
      </body>
    </div>
  );
}

export default App;
