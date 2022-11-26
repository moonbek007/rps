import { ROCK, PAPER, SCISSORS } from "../constants/constants";
import Rock from "../assets/svg/Rock.svg";
import Paper from "../assets/svg/Paper.svg";
import Scissors from "../assets/svg/Scissors.svg";

export default function getWinner(yourChoice, curbChoice) {
  if (yourChoice === curbChoice) {
    return {
      winner: "Draw",
      choice: yourChoice,
      icon:
        yourChoice === ROCK ? Rock : yourChoice === PAPER ? Paper : Scissors,
    };
  } else {
    if (yourChoice === ROCK) {
      if (curbChoice === PAPER) {
        return { winner: "Curb", choice: PAPER, icon: Paper };
      } else {
        return { winner: "You", choice: ROCK, icon: Rock };
      }
    } else if (yourChoice === PAPER) {
      if (curbChoice === SCISSORS) {
        return { winner: "Curb", choice: SCISSORS, icon: Scissors };
      } else {
        return { winner: "You", choice: PAPER, icon: Paper };
      }
    } else if (yourChoice === SCISSORS) {
      if (curbChoice === ROCK) {
        return { winner: "Curb", choice: ROCK, icon: Rock };
      } else {
        return { winner: "You", choice: SCISSORS, icon: Scissors };
      }
    }
  }
}
