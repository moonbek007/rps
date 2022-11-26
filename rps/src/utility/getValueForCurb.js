import { SIGNS } from "../constants/constants";

export default function getValueForCurb() {
  const choice = SIGNS[Math.floor(Math.random() * 2)];
  return { choice, icon: `../assets/svg/${choice}.svg` };
}
